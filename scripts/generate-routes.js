import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routesMetadata } from "../src/routesMetadata.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

export function generateRouteHtmlFiles() {
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    console.error(`[generate-routes] Template not found at: ${templatePath}`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(templatePath, "utf-8");

  for (const [routePath, meta] of Object.entries(routesMetadata)) {
    let routeHtml = baseHtml;

    // Replace title
    routeHtml = routeHtml.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${meta.title}</title>`
    );

    // Replace meta description
    routeHtml = routeHtml.replace(
      /<meta\s+name="description"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta name="description"\n    content="${meta.description}" />`
    );

    // Replace canonical link
    routeHtml = routeHtml.replace(
      /<link\s+rel="canonical"[\s\S]*?href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${meta.canonical}" />`
    );

    // Replace og:url
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:url"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${meta.canonical}" />`
    );

    // Replace og:title
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:title"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${meta.title}" />`
    );

    // Replace og:description
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:description"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta property="og:description"\n    content="${meta.description}" />`
    );

    // Replace og:image
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:image"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${meta.ogImage}" />`
    );

    // Replace twitter:title
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:title"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${meta.title}" />`
    );

    // Replace twitter:description
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description"\n    content="${meta.description}" />`
    );

    // Replace twitter:image
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:image"[\s\S]*?content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${meta.ogImage}" />`
    );

    if (routePath === "/") {
      fs.writeFileSync(templatePath, routeHtml, "utf-8");
      console.log(`[generate-routes] Updated dist/index.html (/)`);
    } else {
      const cleanSlug = routePath.replace(/^\//, "");
      const dirPath = path.join(distDir, cleanSlug);
      const dirIndexFile = path.join(dirPath, "index.html");
      const cleanFile = path.join(distDir, `${cleanSlug}.html`);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      fs.writeFileSync(dirIndexFile, routeHtml, "utf-8");
      fs.writeFileSync(cleanFile, routeHtml, "utf-8");
      console.log(
        `[generate-routes] Created ${cleanSlug}/index.html and ${cleanSlug}.html (${routePath})`
      );
    }
  }

  console.log("[generate-routes] Route-specific HTML generation complete.");
}

// Auto-run if executed directly via CLI
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateRouteHtmlFiles();
}
