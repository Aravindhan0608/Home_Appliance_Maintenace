import { navigateTo } from "../utils/navigation";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact Us", href: "/contact" },
];

const applianceServices = [
  "Washing Machine",
  "Refrigerator / Fridge",
  "Air Conditioner (AC)",
  "Microwave Oven",
  "Dishwasher",
  "Water Heater / Geyser",
  "TV",
  "Other Home Appliances",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-[#263d61]/60 bg-[#041226] text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Service Hub"
                className="h-14 w-14 rounded-full object-contain"
              />
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  SERVICE HUB
                </span>
                <p className="text-xs uppercase tracking-[2px] text-[#f4b82b]">
                  Home Appliance Care
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Reliable doorstep repair, preventive maintenance, and servicing for household appliances across washing machines, refrigerators, air conditioners, microwaves, dishwashers, water heaters, and televisions.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="tel:8870657575"
                className="inline-flex items-center gap-2 rounded-full border border-[#eeb52a] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#041226]"
              >
                <svg
                  width="15"
                  height="15"
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
                <span>Call 8870657575</span>
              </a>

              <a
                href="https://wa.me/8870657575"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#25d366] transition hover:bg-[#25d366] hover:text-black"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#f4b82b]">
              Quick Links
            </h3>
            <nav aria-label="Footer Quick Links">
              <ul className="mt-4 space-y-2.5 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(link.href);
                      }}
                      className="inline-block py-1 text-white/80 transition hover:text-[#f4b82b]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 3: Appliance Services */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#f4b82b]">
              Appliance Services
            </h3>
            <nav aria-label="Footer Appliance Services">
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
                {applianceServices.map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo("/services");
                      }}
                      className="inline-block py-0.5 text-white/80 transition hover:text-[#f4b82b]"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Col 4: Contact & Bookings */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#f4b82b]">
              Direct Contact
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Need prompt repair or maintenance? Reach out directly via call, WhatsApp, or our online enquiry form.
            </p>

            <div className="mt-5 space-y-2 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <span className="text-[#f4b82b]">Phone:</span>
                <a href="tel:8870657575" className="hover:text-[#f4b82b]">
                  8870657575
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#f4b82b]">WhatsApp:</span>
                <a
                  href="https://wa.me/8870657575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f4b82b]"
                >
                  8870657575
                </a>
              </p>
            </div>

            <div className="mt-5">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#f4b82b] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#061a3a] transition hover:bg-[#ffc94a]"
              >
                Book a Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & BottomNavbar clearance */}
        <div className="mt-12 border-t border-[#263d61]/60 pt-6 text-center text-xs text-white/75 pb-20 sm:pb-0">
          <p>© {currentYear} Service Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
