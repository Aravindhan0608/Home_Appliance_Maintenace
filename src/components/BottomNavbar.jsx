import { useState, useEffect } from "react";
import { navigateTo } from "../utils/navigation";

function HomeIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <circle cx="12" cy="12" r="4" />
      <path d="M8 7h.01M12 7h.01M16 7h.01" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function WhyIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}

const items = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Services",
    href: "/services",
    icon: ServicesIcon,
  },
  {
    name: "About",
    href: "/about",
    icon: AboutIcon,
  },
  {
    name: "Why Us",
    href: "/why-us",
    icon: WhyIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: ContactIcon,
  },
];

export default function BottomNavbar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  return (
    <nav aria-label="Mobile Bottom Navigation" className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#263d61] bg-[#061936]/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.25)] backdrop-blur-lg sm:hidden">
      <div className="mx-auto flex h-[68px] max-w-md items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isServices = currentPath === "/services" || currentPath === "/services/";
          const isAbout = currentPath === "/about" || currentPath === "/about/";
          const isWhyUs = currentPath === "/why-us" || currentPath === "/why-us/";
          const isContact = currentPath === "/contact" || currentPath === "/contact/";
          const isActive = isServices
            ? item.href === "/services"
            : isAbout
              ? item.href === "/about"
              : isWhyUs
                ? item.href === "/why-us"
                : isContact
                  ? item.href === "/contact"
                  : currentHash
                    ? item.href === `/${currentHash}`
                    : item.href === "/";

          return (
            <a
              key={item.name}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.href);
              }}
              className={`flex min-w-[55px] flex-col items-center justify-center gap-1 transition duration-200 ${
                isActive
                  ? "text-[#f5bb2f]"
                  : "text-white/70 hover:text-[#f5bb2f]"
              }`}
            >
              <Icon />
              <span className="text-[10px] font-medium">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
