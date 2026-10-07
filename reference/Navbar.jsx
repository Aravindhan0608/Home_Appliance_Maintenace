import React from "react";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "SERVICES", href: "#services" },
  { name: "ABOUT US", href: "#about" },
  { name: "WHY US", href: "#why-us" },
  { name: "CONTACT US", href: "#contact" },
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
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-[104px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="Service Hub Home"
        >
          <img
            src="/assets/logo.jpeg"
            alt="Service Hub"
            className="h-[82px] w-[82px] object-contain sm:h-[88px] sm:w-[88px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex xl:gap-12">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative py-2 text-[15px] font-medium tracking-wide transition duration-300 ${
                index === 0
                  ? "text-[#f5bb2f]"
                  : "text-white hover:text-[#f5bb2f]"
              }`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#f5bb2f]" />
              )}
            </a>
          ))}
        </nav>

        {/* Phone */}
        <a
          href="tel:8870657575"
          className="hidden items-center gap-3 rounded-full border border-[#e9ad21] px-6 py-3 text-white transition duration-300 hover:bg-[#e9ad21] hover:text-[#071a39] sm:flex"
        >
          <PhoneIcon />
          <span className="text-[16px] font-medium tracking-wide">
            8870657575
          </span>
        </a>

        {/* Mobile phone */}
        <a
          href="tel:8870657575"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e9ad21] text-[#f5bb2f] sm:hidden"
          aria-label="Call Service Hub"
        >
          <PhoneIcon />
        </a>
      </div>
    </header>
  );
}