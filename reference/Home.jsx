import React from "react";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";

const services = [
  {
    title: "WASHING MACHINE",
    title2: "REPAIR",
    description:
      "We fix all types of washing machine issues quickly and efficiently.",
    icon: "repair",
  },
  {
    title: "WASHING MACHINE",
    title2: "MAINTENANCE",
    description:
      "Regular maintenance to keep your machine running smoothly.",
    icon: "maintenance",
  },
  {
    title: "INSTALLATION &",
    title2: "DEMONSTRATION",
    description:
      "Professional installation and usage guidance at your doorstep.",
    icon: "installation",
  },
  {
    title: "SPARE PARTS",
    title2: "REPLACEMENT",
    description:
      "We use genuine spare parts for long-lasting performance.",
    icon: "parts",
  },
  {
    title: "DEEP CLEANING",
    title2: "SERVICE",
    description:
      "Deep cleaning to remove dirt, odor and improve washing performance.",
    icon: "cleaning",
  },
  {
    title: "WARRANTY SUPPORT",
    title2: "& CHECKUP",
    description:
      "Warranty support and general checkup for all major brands.",
    icon: "warranty",
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
  if (type === "repair") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="8" y="6" width="28" height="36" rx="3" />
        <path d="M8 14h28" />
        <circle cx="22" cy="27" r="8" />
        <path d="m29 34 8 8" />
        <path d="M14 10h.01M18 10h.01" />
      </svg>
    );
  }

  if (type === "maintenance") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 8v5M24 35v5M8 24h5M35 24h5" />
        <path d="m13 13 4 4M31 31l4 4M35 13l-4 4M17 31l-4 4" />
      </svg>
    );
  }

  if (type === "installation") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="m14 18 10-9 10 9" />
        <path d="M17 16v23h14V16" />
        <circle cx="24" cy="27" r="6" />
        <path d="m20 27 3 3 6-7" />
      </svg>
    );
  }

  if (type === "parts") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="11" y="13" width="26" height="27" rx="2" />
        <path d="M17 13V9h14v4" />
        <path d="M17 21h14M17 28h14M17 35h9" />
        <path d="M7 18h4M37 18h4" />
      </svg>
    );
  }

  if (type === "cleaning") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-12 w-12"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M18 7h12v6H18z" />
        <path d="M15 13h18v29H15z" />
        <path d="M20 20h8" />
        <path d="M19 30c3-5 7 5 10 0" />
        <path d="M34 8c4 3 5 7 2 10" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-12 w-12"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="10" y="9" width="28" height="32" rx="3" />
      <path d="M16 9V6h16v3" />
      <path d="m17 25 5 5 10-11" />
      <path d="M16 17h16" />
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

function RupeeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-10 w-10"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="24" cy="24" r="18" />
      <path d="M17 16h15M17 21h12M20 16c5 0 8 2 8 6s-3 6-8 6l8 6" />
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

function TrustItem({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <div className="shrink-0 text-[#f4b82b]">{icon}</div>
      <span className="text-[11px] font-medium uppercase leading-4 tracking-wide text-white sm:text-[13px] sm:leading-5">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#061a3a] text-white">
      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-[680px] overflow-hidden bg-[#061a3a] pt-[104px] lg:min-h-[640px]"
      >
        {/* Hero background image */}
        <div className="absolute right-0 top-[104px] h-[430px] w-full overflow-hidden lg:h-[535px] lg:w-[58%]">
          <img
            src="/assets/washing-machine-hero.jpg"
            alt="Washing machine"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark gradient over image */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a3a] via-[#061a3a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a3a]/30 to-transparent" />

          {/* Gold curved accent */}
          <div className="absolute -left-[210px] top-[5px] hidden h-[600px] w-[600px] rounded-full border-[5px] border-[#eeb52a] lg:block" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col px-6 sm:px-10 lg:min-h-[535px] lg:px-10">
          <div className="w-full pt-8 sm:pt-12 lg:w-[52%] lg:pt-[88px]">
            
            {/* Small heading */}
            <p className="mb-2 text-[19px] font-semibold tracking-wide text-[#f4b82b] sm:text-[23px]">
              WASHING MACHINE
            </p>

            {/* Main heading */}
            <h1 className="font-serif text-[44px] font-bold uppercase leading-[0.98] tracking-[-1px] text-white sm:text-[56px] lg:text-[58px] xl:text-[62px]">
              SERVICE &amp; REPAIR
            </h1>

            {/* Subtitle */}
            <p className="mt-3 text-[18px] font-semibold uppercase tracking-wide text-[#f4b82b] sm:text-[21px]">
              FAST. RELIABLE. AFFORDABLE.
            </p>

            <div className="mt-4 h-[3px] w-[62px] bg-[#f4b82b]" />

            {/* Description */}
            <p className="mt-5 max-w-[535px] text-[14px] leading-6 text-white/90 sm:text-[16px] sm:leading-7">
              We provide expert washing machine repair and maintenance
              services for all major brands. Doorstep service with genuine
              spare parts and professional care.
            </p>

            {/* Feature icons */}
            <div className="mt-7 grid max-w-[610px] grid-cols-3 gap-3 sm:gap-6">
              <FeatureItem icon={<ShieldIcon />}>
                EXPERT
                <br />
                TECHNICIANS
              </FeatureItem>

              <FeatureItem icon={<GenuineIcon />}>
                GENUINE
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
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-6 py-3.5 text-[14px] font-bold uppercase tracking-wide text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f0b52a]/20 sm:px-8 sm:text-[15px]"
            >
              <CalendarIcon />
              BOOK SERVICE NOW
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative bg-[#061a3a] px-5 pb-12 pt-2 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-[1380px]">
          {/* Section title */}
          <div className="mb-7 flex items-center justify-center gap-3">
            <div className="hidden h-[2px] w-[90px] bg-[#eeb52a] sm:block" />

            <span className="h-2 w-2 rounded-full bg-[#eeb52a]" />

            <h2 className="text-[27px] font-semibold tracking-wide text-white sm:text-[30px]">
              OUR SERVICES
            </h2>

            <span className="h-2 w-2 rounded-full bg-[#eeb52a]" />

            <div className="hidden h-[2px] w-[90px] bg-[#eeb52a] sm:block" />
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {services.map((service) => (
              <div
                key={service.title + service.title2}
                className="group flex min-h-[220px] flex-col items-center rounded-[14px] border border-[#405573] bg-[#0a2145]/50 px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[#eeb52a] hover:bg-[#0d284f]"
              >
                <div className="mb-4 flex h-[58px] items-center justify-center text-[#f4b82b] transition duration-300 group-hover:scale-105">
                  <ServiceIcon type={service.icon} />
                </div>

                <h3 className="text-[14px] font-bold leading-5 text-white">
                  {service.title}
                  <br />
                  {service.title2}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-white/85">
                  {service.description}
                </p>

                <div className="mt-auto pt-4 text-[#f4b82b] opacity-0 transition group-hover:opacity-100">
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US / TRUST ================= */}
      <section
        id="why-us"
        className="bg-[#061a3a] px-5 pb-24 pt-3 sm:px-8 sm:pb-14 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-6 border-t border-[#324766] pt-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:border-t-0 lg:pt-0">
          
          <div className="flex justify-center border-b border-[#334867] pb-5 sm:border-r lg:border-b-0">
            <TrustItem icon={<MedalIcon />}>
              100% SATISFACTION
              <br />
              GUARANTEED
            </TrustItem>
          </div>

          <div className="flex justify-center border-b border-[#334867] pb-5 sm:border-b-0 lg:border-r">
            <TrustItem icon={<TruckIcon />}>
              QUICK RESPONSE
              <br />
              WITHIN 24 HOURS
            </TrustItem>
          </div>

          <div className="flex justify-center border-b border-[#334867] pb-5 sm:border-r sm:border-b-0">
            <TrustItem icon={<SafeIcon />}>
              SAFE &amp; RELIABLE
              <br />
              SERVICE
            </TrustItem>
          </div>

          <div className="flex justify-center">
            <TrustItem icon={<RupeeIcon />}>
              AFFORDABLE
              <br />
              PRICING
            </TrustItem>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="bg-[#071d40] px-6 py-16 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-[#eeb52a]" />
            <span className="text-sm font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              About Us
            </span>
            <span className="h-[2px] w-12 bg-[#eeb52a]" />
          </div>

          <h2 className="font-serif text-3xl font-bold sm:text-4xl">
            Professional Washing Machine Care
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
            We provide reliable washing machine repair, maintenance,
            installation and cleaning services. Our technicians focus on
            professional workmanship, genuine spare parts and convenient
            doorstep service.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-[#061a3a] px-6 py-16 pb-28 sm:px-10 sm:pb-16"
      >
        <div className="mx-auto max-w-[1100px] rounded-2xl border border-[#314a6c] bg-[#0a2145] p-7 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#f4b82b]">
            Need Service?
          </p>

          <h2 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
            Book a Technician Today
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Contact us for washing machine repair, maintenance,
            installation, spare parts or cleaning service.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:8870657575"
              className="inline-flex w-full items-center justify-center rounded-md border border-[#eeb52a] px-7 py-3 text-sm font-semibold text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a] sm:w-auto"
            >
              CALL 8870657575
            </a>

            <a
              href="#home"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#f4b82b] px-7 py-3 text-sm font-semibold text-[#061a3a] transition hover:bg-[#ffc94a] sm:w-auto"
            >
              BOOK SERVICE
            </a>
          </div>
        </div>
      </section>

      <BottomNavbar />
    </div>
  );
}