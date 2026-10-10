import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import About from "./pages/About";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { navigateTo } from "./utils/navigation";

const services = [
  {
    title: "WASHING",
    title2: "MACHINE",
    description:
      "Expert repair and maintenance for front load, top load, and semi-automatic units.",
    icon: "washer",
  },
  {
    title: "REFRIGERATOR /",
    title2: "FRIDGE",
    description:
      "Cooling diagnostics, compressor servicing, gas charging, and thermostat fixes.",
    icon: "fridge",
  },
  {
    title: "AIR CONDITIONER",
    title2: "(AC)",
    description:
      "Doorstep AC maintenance, cooling restoration, coil cleaning, and leak checks.",
    icon: "ac",
  },
  {
    title: "MICROWAVE",
    title2: "OVEN",
    description:
      "Heating fault repairs, magnetron replacements, and touch panel troubleshooting.",
    icon: "microwave",
  },
  {
    title: "DISHWASHER",
    title2: "SERVICE",
    description:
      "Wash pump repairs, drainage clearing, spray arm fixes, and cycle restoration.",
    icon: "dishwasher",
  },
  {
    title: "WATER HEATER /",
    title2: "GEYSER",
    description:
      "Thermostat checkup, heating element replacement, and safe leak prevention.",
    icon: "geyser",
  },
  {
    title: "TELEVISION",
    title2: "(TV)",
    description:
      "Display panel diagnostics, sound/audio fixes, and power supply repairs.",
    icon: "tv",
  },
  {
    title: "OTHER HOME",
    title2: "APPLIANCES",
    description:
      "Reliable inspection and doorstep servicing for other essential home appliances.",
    icon: "other",
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-11 w-11"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M24 5 8 11v10c0 10.5 6.7 18.8 16 22 9.3-3.2 16-11.5 16-22V11L24 5Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  );
}

function GenuineIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-11 w-11"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" />
      <path d="m24 10 3.1 3.7 4.8-.3 1.5 4.5 4.2 2.4-1.7 4.5 1.7 4.5-4.2 2.4-1.5 4.5-4.8-.3L24 38l-3.1-3.7-4.8.3-1.5-4.5-4.2-2.4 1.7-4.5-1.7-4.5 4.2-2.4 1.5-4.5 4.8.3L24 10Z" />
      <path d="m18 24 4 4 8-9" />
    </svg>
  );
}

function HomeServiceIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-11 w-11"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="m7 22 17-15 17 15" />
      <path d="M11 19v22h26V19" />
      <path d="M19 41V29h10v12" />
      <path d="M29 14v-6h6v11" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ServiceIcon({ type }) {
  if (type === "washer") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="6" width="32" height="36" rx="3" />
        <path d="M8 14h32" />
        <circle cx="24" cy="28" r="9" />
        <circle cx="24" cy="28" r="5" />
        <path d="M14 10h.01M18 10h.01M34 10h.01" />
      </svg>
    );
  }

  if (type === "fridge") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="11" y="6" width="26" height="36" rx="3" />
        <path d="M11 20h26" />
        <path d="M16 11v5M16 25v7" />
        <path d="M11 38h26" />
      </svg>
    );
  }

  if (type === "ac") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="10" width="36" height="18" rx="2" />
        <path d="M10 21h28" />
        <path d="M36 15h2" />
        <path d="m14 34 3 6M24 34v6M34 34l-3 6" />
      </svg>
    );
  }

  if (type === "microwave") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="11" width="34" height="26" rx="3" />
        <rect x="11" y="15" width="20" height="18" rx="1.5" />
        <circle cx="36" cy="18" r="2" />
        <circle cx="36" cy="26" r="2" />
        <path d="M34 33h4" />
      </svg>
    );
  }

  if (type === "dishwasher") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="8" y="7" width="32" height="34" rx="3" />
        <path d="M8 15h32" />
        <circle cx="15" cy="11" r="1.5" />
        <circle cx="21" cy="11" r="1.5" />
        <circle cx="24" cy="28" r="7" />
        <path d="M19 28h10M24 23v10" />
      </svg>
    );
  }

  if (type === "geyser") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="14" y="6" width="20" height="34" rx="10" />
        <circle cx="24" cy="20" r="4" />
        <path d="M24 18v4" />
        <path d="M19 40v3M29 40v3" />
        <path d="M21 28h6" />
      </svg>
    );
  }

  if (type === "tv") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="8" width="36" height="26" rx="2" />
        <path d="M17 40h14" />
        <path d="M24 34v6" />
        <path d="M11 30h26" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="1.8">
      <circle cx="24" cy="24" r="16" />
      <path d="m20 20 8 8M28 20l-8 8" />
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="24" cy="24" r="10" />
      <path d="M18 14 14 5h7l3 7 3-7h7l-4 9" />
      <path d="m20 24 3 3 6-7" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M5 11h24v23H5z" />
      <path d="M29 19h8l6 7v8H29z" />
      <circle cx="14" cy="36" r="4" />
      <circle cx="36" cy="36" r="4" />
      <path d="M29 27h13" />
    </svg>
  );
}

function SafeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M24 5 8 11v10c0 10.5 6.7 18.8 16 22 9.3-3.2 16-11.5 16-22V11L24 5Z" />
      <path d="m17 24 5 5 10-11" />
    </svg>
  );
}

function FeatureItem({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#eeb52a] text-white">
        {icon}
      </div>
      <span className="text-[12px] font-medium leading-5 tracking-wide text-white sm:text-[13px]">
        {children}
      </span>
    </div>
  );
}


export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }

    const metaDescriptions = {
      "/": "Service Hub provides multibrand home appliance repair and maintenance services in Mettupalayam and nearby areas including Sirumugai, Karamadai, Annur and Periyanaikanpalayam.",
      "/services": "Explore multibrand home appliance repair and doorstep maintenance services in Mettupalayam for washing machines, fridges, ACs, microwave ovens, dishwashers, and TVs.",
      "/about": "Learn about Service Hub, a dedicated multibrand home appliance repair and doorstep maintenance service serving Mettupalayam and nearby areas in Tamil Nadu.",
      "/why-us": "Discover why households choose Service Hub for multibrand appliance care, honest diagnostics, and doorstep repair across Mettupalayam.",
      "/contact": "Contact Service Hub in Mettupalayam for multibrand home appliance repair and service enquiries. Reach out by phone or WhatsApp at 8870657575.",
    };

    const pageTitles = {
      "/": "Service Hub | Home Appliance Repair & Maintenance",
      "/services": "Home Appliance Repair Services in Mettupalayam | Service Hub",
      "/about": "About Service Hub | Home Appliance Services in Mettupalayam",
      "/why-us": "Why Choose Service Hub | Multibrand Appliance Care Mettupalayam",
      "/contact": "Contact Service Hub | Appliance Repair Services in Mettupalayam",
    };

    const canonicalUrls = {
      "/": "https://homeappliancemaintenace.vercel.app/",
      "/services": "https://homeappliancemaintenace.vercel.app/services",
      "/about": "https://homeappliancemaintenace.vercel.app/about",
      "/why-us": "https://homeappliancemaintenace.vercel.app/why-us",
      "/contact": "https://homeappliancemaintenace.vercel.app/contact",
    };

    const normalized =
      currentPath.length > 1 && currentPath.endsWith("/")
        ? currentPath.slice(0, -1)
        : currentPath;

    const pageTitle = pageTitles[normalized] || "Page Not Found | Service Hub";
    document.title = pageTitle;

    const descContent =
      metaDescriptions[normalized] ||
      "Page not found. Return to Service Hub for home appliance repair and maintenance services.";

    const updateMetaTag = (attribute, name, content) => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMetaTag("name", "description", descContent);
    updateMetaTag("property", "og:title", pageTitle);
    updateMetaTag("property", "og:description", descContent);
    updateMetaTag("name", "twitter:title", pageTitle);
    updateMetaTag("name", "twitter:description", descContent);

    // Absolute social share image
    const socialImage = "https://homeappliancemaintenace.vercel.app/assets/washing-machine-hero.webp";
    updateMetaTag("property", "og:image", socialImage);
    updateMetaTag("name", "twitter:image", socialImage);

    // Canonical & og:url management
    const canonicalUrl = canonicalUrls[normalized];
    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonicalUrl);
      updateMetaTag("property", "og:url", canonicalUrl);
    } else {
      if (canonicalLink) {
        canonicalLink.remove();
      }
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (ogUrlTag) {
        ogUrlTag.remove();
      }
    }

    // Robots meta tag management (noindex, follow on unknown routes; remove on valid routes)
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (canonicalUrl) {
      if (robotsTag) {
        robotsTag.remove();
      }
    } else {
      if (!robotsTag) {
        robotsTag = document.createElement("meta");
        robotsTag.setAttribute("name", "robots");
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute("content", "noindex, follow");
    }
  }, [currentPath]);

  const isHomePage = currentPath === "/" || currentPath === "";
  const isServicesPage = currentPath === "/services" || currentPath === "/services/";
  const isAboutPage = currentPath === "/about" || currentPath === "/about/";
  const isWhyUsPage = currentPath === "/why-us" || currentPath === "/why-us/";
  const isContactPage = currentPath === "/contact" || currentPath === "/contact/";
  const isKnownRoute = isHomePage || isServicesPage || isAboutPage || isWhyUsPage || isContactPage;

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#061a3a] text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-md focus:bg-[#f4b82b] focus:px-4 focus:py-2.5 focus:text-sm focus:font-bold focus:text-[#061a3a] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1" className="flex-1 outline-none">
        {isServicesPage ? (
          <Services />
        ) : isAboutPage ? (
          <About />
        ) : isWhyUsPage ? (
          <WhyUs />
        ) : isContactPage ? (
          <Contact />
        ) : !isKnownRoute ? (
          <NotFound />
        ) : (
          <>
            {/* ================= HERO ================= */}
            <section


              id="home"
              className="relative min-h-[680px] overflow-hidden bg-[#061a3a] pt-[104px] lg:min-h-[640px]"
            >
              {/* Hero background image */}
              <div className="absolute right-0 top-[104px] h-[430px] w-full overflow-hidden lg:h-[535px] lg:w-[58%]">
                <img
                  src="/assets/washing-machine-hero.webp"
                  alt="Home appliance maintenance and repair service"
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-center"
                />

                {/* Dark gradient over image */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a] via-[#061a3a]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a3a]/30 to-transparent" />

                {/* Gold curved accent */}
                <div className="absolute -left-[210px] top-[5px] hidden h-[600px] w-[600px] rounded-full border-[5px] border-[#eeb52a] lg:block pointer-events-none" />
              </div>

              <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 sm:px-10 lg:min-h-[535px] lg:px-10">
                <div className="w-full pt-8 sm:pt-12 lg:w-[52%] lg:pt-[88px]">
                  {/* Small heading */}
                  <p className="mb-2 text-[19px] font-semibold tracking-wide text-[#f4b82b] sm:text-[23px]">
                    HOME APPLIANCE
                  </p>

                  {/* Main heading */}
                  <h1 className="font-serif text-[44px] font-bold uppercase leading-[0.98] tracking-[-1px] text-white sm:text-[56px] lg:text-[58px] xl:text-[62px]">
                    REPAIR &amp; SERVICE
                  </h1>

                  {/* Subtitle */}
                  <p className="mt-3 text-[18px] font-semibold uppercase tracking-wide text-[#f4b82b] sm:text-[21px]">
                    DOORSTEP REPAIR &amp; MAINTENANCE
                  </p>

                  <div className="mt-4 h-[3px] w-[62px] bg-[#f4b82b]" />

                  {/* Description */}
                  <p className="mt-5 max-w-[535px] text-[14px] leading-6 text-white/90 sm:text-[16px] sm:leading-7">
                    We provide home appliance repair, maintenance, installation, and
                    cleaning services for washing machines, refrigerators, air conditioners,
                    microwaves, dishwashers, water heaters, TVs, and other household
                    appliances. Doorstep service with quality replacement parts and
                    professional care.
                  </p>

                  {/* Feature icons */}
                  <div className="mt-7 grid max-w-[610px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                    <FeatureItem icon={<ShieldIcon />}>
                      SKILLED
                      <br />
                      TECHNICIANS
                    </FeatureItem>

                    <FeatureItem icon={<GenuineIcon />}>
                      QUALITY
                      <br />
                      SPARE PARTS
                    </FeatureItem>

                    <FeatureItem icon={<HomeServiceIcon />}>
                      DOORSTEP
                      <br />
                      SERVICE
                    </FeatureItem>
                  </div>

                  {/* CTA */}
                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("/services");
                      }}
                      className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-7 py-3.5 text-[14px] font-bold uppercase tracking-wide text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f0b52a]/20 sm:text-[15px]"
                    >
                      Explore Services
                    </a>

                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("/contact");
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-[#eeb52a]/60 px-7 py-3.5 text-[14px] font-semibold text-[#f4b82b] transition hover:border-[#eeb52a] hover:bg-[#eeb52a]/10 sm:text-[15px]"
                    >
                      <CalendarIcon />
                      <span>Book a Service</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= SERVICES DISCOVERY ================= */}
            <section
              id="services"
              className="relative bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
            >
              <div className="mx-auto max-w-[1380px]">
                {/* Asymmetric Header */}
                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end sm:mb-12">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                      Appliance Care &amp; Repair
                    </span>
                    <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Our Appliance Services
                    </h2>
                    <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
                  </div>
                  <a
                    href="/services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/services");
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:text-[#ffd666]"
                  >
                    <span>Explore All 8 Categories</span>
                    <ArrowIcon />
                  </a>
                </div>

                {/* Service discovery cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service) => (
                    <a
                      key={service.title + service.title2}
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("/services");
                      }}
                      className="group flex min-h-[210px] flex-col justify-between rounded-xl border border-[#314a6c] bg-[#0a2145]/50 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[#eeb52a] hover:bg-[#0d284f]"
                    >
                      <div>
                        <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#061a3a] text-[#f4b82b] transition duration-300 group-hover:scale-105 group-hover:border group-hover:border-[#eeb52a]/40">
                          <ServiceIcon type={service.icon} />
                        </div>

                        <h3 className="text-sm font-bold leading-5 text-white transition group-hover:text-[#f4b82b]">
                          {service.title} {service.title2}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-white/75">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center gap-1.5 pt-3 border-t border-[#314a6c]/40 text-xs font-semibold text-[#f4b82b]/80 group-hover:text-[#f4b82b]">
                        <span>View Details</span>
                        <ArrowIcon />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* ================= WHY CHOOSE US (Asymmetric Highlight Split) ================= */}
            <section
              id="why-us"
              className="relative bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
            >
              <div className="mx-auto max-w-[1380px]">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Left Column: Anchor message */}
                  <div className="lg:col-span-5">
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                      The Service Hub Standard
                    </span>

                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:leading-tight">
                      Dependable Doorstep Care Without the Hassle
                    </h2>

                    <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />

                    <p className="text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                      We focus on dependable doorstep diagnostics, quality components, and customer-centered care to keep your home appliances running smoothly.
                    </p>

                    <div className="mt-7">
                      <a
                        href="/why-us"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo("/why-us");
                        }}
                        className="inline-flex items-center gap-2 rounded-md border border-[#eeb52a]/70 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a]/10 hover:border-[#eeb52a]"
                      >
                        <span>Learn Why Customers Choose Us</span>
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: 4 Horizontal Feature Strips (2x2 grid) */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
                    {/* Feature 1 */}
                    <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/60 p-5 transition duration-200 hover:border-[#eeb52a]/60">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b]">
                          <ShieldIcon />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">Expert Service</h3>
                          <p className="mt-1 text-xs leading-5 text-white/70">Careful diagnosis and professional home appliance servicing.</p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/60 p-5 transition duration-200 hover:border-[#eeb52a]/60">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b]">
                          <TruckIcon />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">Doorstep Convenience</h3>
                          <p className="mt-1 text-xs leading-5 text-white/70">Service appointments delivered directly at your home.</p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/60 p-5 transition duration-200 hover:border-[#eeb52a]/60">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b]">
                          <SafeIcon />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">Transparent Communication</h3>
                          <p className="mt-1 text-xs leading-5 text-white/70">Clear explanations about the issue and recommended service.</p>
                        </div>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/60 p-5 transition duration-200 hover:border-[#eeb52a]/60">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b]">
                          <MedalIcon />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">Customer-First Care</h3>
                          <p className="mt-1 text-xs leading-5 text-white/70">Respectful service focused on your convenience and time.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= ABOUT (Editorial Split Showcase) ================= */}
            <section
              id="about"
              className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
            >
              <div className="mx-auto max-w-[1380px]">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Left Editorial Narrative */}
                  <div className="lg:col-span-7">
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                      About Service Hub
                    </span>

                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Professional Home Appliance Care You Can Rely On
                    </h2>

                    <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />

                    <p className="text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                      We provide reliable repair, maintenance, installation and cleaning services for major household appliances. Our technicians focus on professional workmanship, replacement parts and convenient doorstep service.
                    </p>

                    <p className="mt-3 text-xs leading-5 text-white/65 sm:text-sm sm:leading-6">
                      From laundry units to kitchen cooling and climate appliances, we ensure comprehensive on-site diagnostics so your household runs smoothly without disruption.
                    </p>

                    <div className="mt-6">
                      <a
                        href="/about"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo("/about");
                        }}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:text-[#ffd666]"
                      >
                        <span>Read Our Full Story &amp; Principles</span>
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>

                  {/* Right Pillars Box */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-[#314a6c] bg-[#0a2145]/70 p-6 sm:p-8 shadow-xl">
                      <h3 className="font-serif text-lg font-bold text-white">
                        Our Service Philosophy
                      </h3>
                      <p className="mt-1 text-xs text-white/65">
                        Three core commitments delivered on every visit.
                      </p>

                      <div className="mt-5 space-y-4">
                        <div className="flex items-start gap-3 border-b border-[#314a6c]/50 pb-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">1</span>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wide text-white">Quality Spare Parts</h4>
                            <p className="mt-0.5 text-xs text-white/70">Quality replacement components for lasting performance.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 border-b border-[#314a6c]/50 pb-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">2</span>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wide text-white">Accurate Diagnostics</h4>
                            <p className="mt-0.5 text-xs text-white/70">Thorough inspection of root causes before any work begins.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">3</span>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wide text-white">Doorstep Convenience</h4>
                            <p className="mt-0.5 text-xs text-white/70">On-site service visits arranged at your schedule.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ================= HOME BOOKING BANNER ================= */}
            <section
              id="contact"
              className="bg-[#071d40] px-6 py-16 pb-28 sm:px-10 sm:pb-20 lg:px-12"
            >
              <div className="mx-auto max-w-[1200px] rounded-2xl border border-[#eeb52a]/40 bg-gradient-to-r from-[#0a2145] to-[#071d40] p-7 sm:p-12 shadow-2xl">
                <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                  <div className="text-center lg:text-left">
                    <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                      Convenient Doorstep Service
                    </span>
                    <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      Ready to Restore Your Appliance?
                    </h2>
                    <p className="mt-2 max-w-xl text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                      Contact our service desk for prompt inspection, repair, or maintenance across your household appliances.
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                    <a
                      href="tel:+918870657575"
                      className="inline-flex items-center justify-center rounded-md border border-[#eeb52a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a]"
                    >
                      CALL 8870657575
                    </a>

                    <a
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("/contact");
                      }}
                      className="inline-flex items-center justify-center rounded-md bg-[#f4b82b] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#061a3a] transition hover:bg-[#ffc94a]"
                    >
                      BOOK SERVICE
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
      <BottomNavbar />
    </div>
  );
}
