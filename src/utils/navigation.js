export function navigateTo(url) {
  if (url.startsWith("/#") || (url.startsWith("#") && window.location.pathname !== "/")) {
    const hash = url.includes("#") ? url.substring(url.indexOf("#")) : "";
    window.history.pushState({}, "", "/" + hash);
    window.dispatchEvent(new Event("popstate"));
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
    return;
  }

  if (url.startsWith("#")) {
    const el = document.querySelector(url);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState({}, "", url);
    window.dispatchEvent(new Event("popstate"));
    return;
  }

  window.history.pushState({}, "", url);
  window.dispatchEvent(new Event("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
