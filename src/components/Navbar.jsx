import { useState, useEffect } from "react";
import { navigateTo } from "../utils/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT US", href: "/about" },
  { name: "WHY US", href: "/why-us" },
  { name: "CONTACT US", href: "/contact" },
];

function PhoneIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function isItemActive(itemHref, currentPath, currentHash) {
  const isServices = currentPath === "/services" || currentPath === "/services/";
  const isAbout = currentPath === "/about" || currentPath === "/about/";
  const isWhyUs = currentPath === "/why-us" || currentPath === "/why-us/";
  const isContact = currentPath === "/contact" || currentPath === "/contact/";

  if (isServices) return itemHref === "/services";
  if (isAbout) return itemHref === "/about";
  if (isWhyUs) return itemHref === "/why-us";
  if (isContact) return itemHref === "/contact";
  if (currentHash) return itemHref === `/${currentHash}`;
  return itemHref === "/";
}

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
      setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#263d61]/50 bg-[#061a3a]/95 shadow-sm backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-[72px] sm:h-[76px] lg:h-[80px] max-w-[1400px] items-center justify-between px-4 sm:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              navigateTo("/");
            }}
            className="flex shrink-0 items-center"
            aria-label="Service Hub Home"
          >
            <img
              src="/assets/logo.png"
              alt="Service Hub"
              className="h-[52px] w-[52px] rounded-full object-contain sm:h-[58px] sm:w-[58px] lg:h-[62px] lg:w-[62px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden items-center gap-10 lg:flex xl:gap-12">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href, currentPath, currentHash);

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.href);
                  }}
                  className={`relative py-1.5 text-[15px] font-medium tracking-wide transition duration-300 ${
                    isActive
                      ? "text-[#f5bb2f]"
                      : "text-white hover:text-[#f5bb2f]"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#f5bb2f]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Phone & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop / Tablet Phone */}
            <a
              href="tel:8870657575"
              aria-label="Call Service Hub at 8870657575"
              className="hidden items-center gap-2.5 rounded-full border border-[#e9ad21] px-5 py-2 text-white transition duration-300 hover:bg-[#e9ad21] hover:text-[#071a39] sm:flex lg:py-2.5"
            >
              <PhoneIcon />
              <span className="text-[14px] font-medium tracking-wide sm:text-[15px]">
                8870657575
              </span>
            </a>

            {/* Mobile phone button */}
            <a
              href="tel:8870657575"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9ad21] text-[#f5bb2f] sm:hidden"
              aria-label="Call Service Hub at 8870657575"
            >
              <PhoneIcon />
            </a>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#314a6c] bg-[#0a2145] text-white transition duration-200 hover:border-[#eeb52a] hover:text-[#f5bb2f] focus:outline-none focus:ring-2 focus:ring-[#eeb52a] lg:hidden"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-76px)] overflow-y-auto border-t border-[#263d61]/60 bg-[#061a3a]/98 px-5 pb-24 pt-4 shadow-2xl backdrop-blur-xl sm:pb-6 lg:hidden"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
              {navItems.map((item) => {
                const isActive = isItemActive(item.href, currentPath, currentHash);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      navigateTo(item.href);
                    }}
                    className={`flex items-center justify-between rounded-lg px-4 py-3.5 text-[15px] font-medium tracking-wide transition duration-200 ${
                      isActive
                        ? "border-l-4 border-[#f5bb2f] bg-[#0a234d] font-semibold text-[#f5bb2f]"
                        : "text-white/90 hover:bg-[#0a234d]/60 hover:text-[#f5bb2f]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#f5bb2f]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[72px] sm:top-[76px] z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
