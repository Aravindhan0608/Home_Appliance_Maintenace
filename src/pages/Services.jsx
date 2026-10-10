import { useState } from "react";
import { navigateTo } from "../utils/navigation";

const services = [
  {
    id: "washer",
    title: "Washing Machine Repair & Service",
    description:
      "Diagnosis and repair for front load, top load, and semi-automatic units, resolving drum spinning, drainage, motor, and vibration issues.",
    image: "/assets/appliances/washing-machine.png",
    alt: "Washing machine repair service",
  },
  {
    id: "fridge",
    title: "Refrigerator / Fridge Service",
    description:
      "Comprehensive cooling solutions, compressor diagnostics, thermostat adjustment, gas refilling, and defrost issue resolution.",
    image: "/assets/appliances/refrigerator.png",
    alt: "Refrigerator and fridge service",
  },
  {
    id: "ac",
    title: "Air Conditioner (AC) Service",
    description:
      "Doorstep AC maintenance, cooling performance restoration, refrigerant leak checks, coil cleaning, and filter servicing.",
    image: "/assets/appliances/air-conditioner.png",
    alt: "Air conditioner repair service",
  },
  {
    id: "microwave",
    title: "Microwave Oven Repair",
    description:
      "Accurate troubleshooting for heating failure, magnetron replacements, touch panel defects, and high-voltage circuit safety checks.",
    image: "/assets/appliances/microwave-oven.png",
    alt: "Microwave oven repair service",
  },
  {
    id: "dishwasher",
    title: "Dishwasher Repair & Service",
    description:
      "Water circulation fixes, wash pump servicing, drainage clearing, and spray arm adjustments to restore sparkling clean cycles.",
    image: "/assets/appliances/dishwasher.png",
    alt: "Dishwasher repair service",
  },
  {
    id: "geyser",
    title: "Water Heater / Geyser Service",
    description:
      "Thermostat inspection, heating element replacement, pressure valve safety checks, and leak prevention for instant and storage geysers.",
    image: "/assets/appliances/heater.png",
    alt: "Water heater and geyser service",
  },
  {
    id: "tv",
    title: "Television (TV) Repair",
    description:
      "Screen display panel diagnostics, audio/speaker fixes, power supply board repairs, and HDMI/input port connectivity troubleshooting.",
    image: "/assets/appliances/tv.png",
    alt: "Television repair service",
  },
  {
    id: "other",
    title: "Other Home Appliances",
    description:
      "Reliable inspection and repair for other essential household electrical appliances with professional care and genuine components.",
    image: "/assets/appliances/other-appliances.png",
    alt: "Home appliance repair service",
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Service",
    description:
      "Submit a request online or call us directly with your appliance brand and issue details.",
  },
  {
    number: "02",
    title: "Technician Consultation",
    description:
      "Our specialist contacts you to understand the problem and schedule a convenient doorstep visit.",
  },
  {
    number: "03",
    title: "Inspection & Repair",
    description:
      "We perform accurate on-site diagnostics and carry out professional repair work with genuine parts.",
  },
  {
    number: "04",
    title: "Service Completed",
    description:
      "Full post-service cycle testing and demonstration ensure your machine operates flawlessly.",
  },
];

const trustPoints = [
  {
    title: "Expert Technicians",
    description:
      "Skilled and background-verified technicians with extensive experience across all major brands.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8">
        <path d="M24 5 8 11v10c0 10.5 6.7 18.8 16 22 9.3-3.2 16-11.5 16-22V11L24 5Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
  {
    title: "Genuine Spare Parts",
    description:
      "100% authentic spare components ensuring long-lasting performance and complete reliability.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="17" />
        <path d="m24 10 3.1 3.7 4.8-.3 1.5 4.5 4.2 2.4-1.7 4.5 1.7 4.5-4.2 2.4-1.5 4.5-4.8-.3L24 38l-3.1-3.7-4.8.3-1.5-4.5-4.2-2.4 1.7-4.5-1.7-4.5 4.2-2.4 1.5-4.5 4.8.3L24 10Z" />
        <path d="m18 24 4 4 8-9" />
      </svg>
    ),
  },
  {
    title: "Doorstep Service",
    description:
      "Prompt, hassle-free service delivered right at your home with minimal disruption to your day.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8">
        <path d="m7 22 17-15 17 15" />
        <path d="M11 19v22h26V19" />
        <path d="M19 41V29h10v12" />
        <path d="M29 14v-6h6v11" />
      </svg>
    ),
  },
  {
    title: "Customer-Focused Support",
    description:
      "Transparent communication, courteous service, and dedicated assistance for all service queries.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="10" />
        <path d="M18 14 14 5h7l3 7 3-7h7l-4 9" />
        <path d="m20 24 3 3 6-7" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Which home appliance services are available?",
    answer:
      "We provide comprehensive repair, preventive maintenance, and servicing for washing machines, refrigerators, air conditioners (AC), microwave ovens, dishwashers, water heaters (geysers), TVs, and other household appliances.",
  },
  {
    question: "How can I request an appliance service?",
    answer:
      "You can request a service directly by calling our support line at 918870657575, chatting with us on WhatsApp, or clicking 'Book a Service' on our website to reach our enquiry desk.",
  },
  {
    question: "Do you provide doorstep service for all appliances?",
    answer:
      "Yes, our qualified technicians provide convenient doorstep service. They arrive at your home equipped with professional diagnostic tools and genuine spare parts to inspect and service your appliances on-site.",
  },
  {
    question: "How can I contact Service Hub?",
    answer:
      "You can contact Service Hub by telephone at +91 8870657575 or through the Contact section on our website.",
  },
];



export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="bg-[#061a3a] text-white">
      {/* ================= COMPACT SERVICE-FOCUSED HEADER ================= */}
      <section className="relative overflow-hidden pt-[116px] pb-12 sm:pb-16 lg:pb-18">
        <div className="absolute top-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#f4b82b]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-12">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm text-white/60">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="transition hover:text-[#f4b82b]"
            >
              Home
            </a>
            <span className="text-white/40">/</span>
            <span className="font-medium text-[#f4b82b]">Services</span>
          </nav>

          <div className="max-w-[840px]">
            <span className="inline-block rounded-full border border-[#f4b82b]/30 bg-[#f4b82b]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#f4b82b]">
              Service Hub Expertise
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              Professional Doorstep Appliance Care &amp; Repair Services
            </h1>

            <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />

            <p className="max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              Comprehensive repair, preventive maintenance, and doorstep servicing across washing machines, refrigerators, air conditioners, microwaves, dishwashers, water heaters, and televisions.
            </p>

            {/* Quick scope tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-white/80">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#314a6c] bg-[#0a2145]/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4b82b]" aria-hidden="true" />
                All Major Brands
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#314a6c] bg-[#0a2145]/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4b82b]" aria-hidden="true" />
                Genuine Replacement Parts
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#314a6c] bg-[#0a2145]/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4b82b]" aria-hidden="true" />
                On-Site Diagnostics
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#314a6c] bg-[#0a2145]/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f4b82b]" aria-hidden="true" />
                Doorstep Service
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f0b52a]/25"
              >
                Browse 8 Appliances
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center justify-center rounded-md border border-[#eeb52a]/60 px-6 py-3 text-xs font-semibold text-[#f4b82b] transition hover:border-[#eeb52a] hover:bg-[#eeb52a]/10"
              >
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8 APPLIANCE CARDS SHOWCASE ================= */}
      <section id="services-list" className="relative bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          {/* Asymmetric Section Heading */}
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Supported Appliances
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Appliance Service Range
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Complete doorstep care, from routine maintenance and inspection to component repairs across all major appliances.
            </p>
          </div>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#314a6c] bg-[#0a2145]/70 p-6 sm:p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#eeb52a] hover:bg-[#0d284f] hover:shadow-xl hover:shadow-[#041026]/40"
              >
                <div>
                  <div className="mb-5 overflow-hidden rounded-xl border border-[#314a6c] bg-[#061a3a] transition duration-300 group-hover:border-[#eeb52a]">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-white transition duration-300 group-hover:text-[#f4b82b]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#314a6c]/60">
                  <a
                    href="/contact"
                    aria-label={`Enquire about ${service.title}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/contact");
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:text-[#ffd666]"
                  >
                    <span>Enquire Now</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEDICATED 4-STEP SERVICE PROCESS ================= */}
      <section className="relative bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 max-w-2xl sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Doorstep Service Workflow
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How Your Service Appointment Works
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              A transparent, hassle-free service experience from booking to verified testing.
            </p>
          </div>

          {/* Connected Process Flow */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl border border-[#314a6c] bg-[#0a2145]/50 p-6 transition duration-300 hover:border-[#eeb52a]/70 hover:bg-[#0a2145]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl font-bold text-[#f4b82b]">
                      {step.number}
                    </span>
                    <span className="rounded-full border border-[#eeb52a]/30 bg-[#eeb52a]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#f4b82b]">
                      Step {idx + 1}
                    </span>
                  </div>

                  <div className="my-4 h-[2px] w-10 bg-[#eeb52a]" />

                  <h3 className="text-base font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#314a6c]/40 text-[11px] font-medium text-white/50 uppercase tracking-wider">
                  Service Hub Workflow
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE STANDARDS & COMMITMENTS ================= */}
      <section className="bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Quality Assurance
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Every Service Visit Includes
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Dedicated to professional workmanship, authentic components, and reliable doorstep service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col justify-between rounded-xl border border-[#314a6c] bg-[#0a2145]/60 p-6 transition duration-300 hover:border-[#eeb52a]/60 hover:-translate-y-1"
              >
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b]">
                    {point.icon}
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {point.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm">
                    {point.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#f4b82b]/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f4b82b]" aria-hidden="true" />
                  <span>Standard on every visit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GENERAL SERVICE FAQ ================= */}
      <section className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Appliance Care FAQs
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="text-sm leading-6 text-white/70 sm:text-base">
              Find quick answers to common questions about our home appliance repair and maintenance services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#314a6c] bg-[#0a2145]/60 transition duration-200 hover:border-[#eeb52a]/50"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-services-${index}`}
                    className="flex w-full items-center justify-between p-5 text-left transition sm:p-6"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#314a6c] text-[#f4b82b] transition-transform duration-300 ${isOpen ? "rotate-180 border-[#eeb52a]" : ""
                        }`}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-services-${index}`}
                      className="border-t border-[#314a6c]/60 px-5 pb-5 pt-3 text-sm leading-6 text-white/80 sm:px-6 sm:pb-6"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SERVICE ENQUIRY CALLOUT ================= */}
      <section className="bg-[#071d40] px-6 pb-28 pt-10 sm:px-10 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-[#314a6c] bg-[#0a2145] p-7 sm:p-12 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Appliance Assistance Desk
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Need Help Diagnosing Your Appliance?
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                Connect with our service specialists for doorstep repair, parts inspection, or scheduled maintenance.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="tel:+918870657575"
                className="inline-flex items-center justify-center rounded-md border border-[#eeb52a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a]"
              >
                CALL 918870657575
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/contact");
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#f4b82b] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#061a3a] transition hover:bg-[#ffc94a]"
              >
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
