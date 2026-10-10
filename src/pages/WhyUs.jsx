import { useState } from "react";
import { navigateTo } from "../utils/navigation";

const differentiators = [
  {
    id: "expert-service",
    title: "Expert Service",
    description:
      "Careful diagnostics and professional servicing across all home appliances by experienced specialists.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M24 5 8 11v10c0 10.5 6.7 18.8 16 22 9.3-3.2 16-11.5 16-22V11L24 5Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
  {
    id: "doorstep-convenience",
    title: "Doorstep Convenience",
    description:
      "Service appointments delivered directly to your home, avoiding the hassle of moving heavy household appliances.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m7 22 17-15 17 15" />
        <path d="M11 19v22h26V19" />
        <path d="M19 41V29h10v12" />
        <path d="M29 14v-6h6v11" />
      </svg>
    ),
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication",
    description:
      "Clear, honest explanations regarding the issue and recommended service with no confusing technical jargon.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l6 6" />
      </svg>
    ),
  },
  {
    id: "customer-first",
    title: "Customer-First Approach",
    description:
      "Respectful, courteous service tailored around your daily schedule, household needs, and peace of mind.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="24" cy="24" r="10" />
        <path d="M18 14 14 5h7l3 7 3-7h7l-4 9" />
        <path d="m20 24 3 3 6-7" />
      </svg>
    ),
  },
  {
    id: "convenient-scheduling",
    title: "Convenient Scheduling",
    description:
      "Flexible appointment booking designed to accommodate your busy lifestyle without unnecessary waiting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </svg>
    ),
  },
  {
    id: "careful-handling",
    title: "Careful Appliance Handling",
    description:
      "Attentive and meticulous care during disassembly, component replacement, and testing to safeguard your unit.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="11" y="13" width="26" height="27" rx="2" />
        <path d="M17 13V9h14v4" />
        <path d="M17 21h14M17 28h14M17 35h9" />
        <path d="M7 18h4M37 18h4" />
      </svg>
    ),
  },
];

const serviceCommitments = [
  {
    title: "Clear Communication",
    description:
      "We explain what needs attention before beginning any work, giving you full confidence and understanding.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </svg>
    ),
  },
  {
    title: "Customer Convenience",
    description:
      "From phone consultations to doorstep arrival, our entire workflow is organized to save your valuable time.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 11h24v23H5z" />
        <path d="M29 19h8l6 7v8H29z" />
        <circle cx="14" cy="36" r="4" />
        <circle cx="36" cy="36" r="4" />
        <path d="M29 27h13" />
      </svg>
    ),
  },
  {
    title: "Careful Diagnosis",
    description:
      "We inspect key systems—motors, pumps, drums, and electronics—to address root causes rather than temporary fixes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 8v5M24 35v5M8 24h5M35 24h5" />
      </svg>
    ),
  },
  {
    title: "Professional Service Approach",
    description:
      "Equipped with appropriate tools and genuine replacement components, we respect your home and appliance integrity.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8">
        <circle cx="24" cy="24" r="17" />
        <path d="m24 10 3.1 3.7 4.8-.3 1.5 4.5 4.2 2.4-1.7 4.5 1.7 4.5-4.2 2.4-1.5 4.5-4.8-.3L24 38l-3.1-3.7-4.8.3-1.5-4.5-4.2-2.4 1.7-4.5-1.7-4.5 4.2-2.4 1.5-4.5 4.8.3L24 10Z" />
        <path d="m18 24 4 4 8-9" />
      </svg>
    ),
  },
];

const whyUsFaqs = [
  {
    question: "What details should I provide when booking an appliance visit?",
    answer:
      "Sharing your appliance category (such as washing machine, refrigerator, or AC), brand, and observable symptoms helps our technician arrive equipped with the appropriate diagnostic tools and genuine spare parts.",
  },
  {
    question: "How do your technicians handle diagnostics before repair?",
    answer:
      "Our technicians perform a comprehensive on-site inspection first. They clearly explain the issue, the required service or part replacement, and provide transparent guidance before carrying out any work.",
  },
];

export default function WhyUs() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="bg-[#061a3a] text-white">
      {/* ================= 1. DISTINCT TRUST-FOCUSED HERO ================= */}
      <section className="relative overflow-hidden pt-[116px] pb-16 sm:pb-20 lg:pb-22">
        <div className="absolute top-0 left-1/2 -z-10 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-[#f4b82b]/5 blur-[130px] pointer-events-none" />

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
            <span className="font-medium text-[#f4b82b]">Why Choose Us</span>
          </nav>

          {/* Centered High-Trust Header */}
          <div className="mx-auto max-w-[860px] text-center">
            <span className="inline-block rounded-full border border-[#f4b82b]/30 bg-[#f4b82b]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#f4b82b]">
              Why Choose Service Hub
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-tight">
              Built on Reliability, Clarity &amp; Doorstep Care
            </h1>

            <div className="mx-auto my-4 h-[3px] w-12 bg-[#eeb52a]" />

            <p className="mx-auto max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              We provide convenient, dependable, and customer-focused home appliance servicing delivered right at your doorstep to keep your household running smoothly.
            </p>

            {/* 3 Core Trust Badges */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 text-left">
              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/80 p-4 transition hover:border-[#eeb52a]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4b82b]">
                  Quality Parts
                </span>
                <p className="mt-1 text-xs text-white/75">
                  Quality replacement parts to support appliance longevity.
                </p>
              </div>

              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/80 p-4 transition hover:border-[#eeb52a]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4b82b]">
                  Clear Explanations
                </span>
                <p className="mt-1 text-xs text-white/75">
                  Transparent diagnosis before any work starts.
                </p>
              </div>

              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/80 p-4 transition hover:border-[#eeb52a]/60">
                <span className="text-xs font-bold uppercase tracking-wider text-[#f4b82b]">
                  Doorstep Comfort
                </span>
                <p className="mt-1 text-xs text-white/75">
                  No heavy lifting; appointments at your home.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#differentiators"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5"
              >
                Explore What Sets Us Apart
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. STRUCTURED DIFFERENTIATOR ROWS ================= */}
      <section id="differentiators" className="relative bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 max-w-2xl sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              The Service Hub Difference
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Sets Our Service Apart
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Thoughtful service details designed to deliver a dependable and stress-free appliance care experience.
            </p>
          </div>

          {/* 6 Structured Horizontal Rows (2-column layout) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {differentiators.map((item) => (
              <div
                key={item.id}
                className="group flex items-start gap-4 rounded-xl border border-[#314a6c] bg-[#0a2145]/70 p-6 transition duration-300 hover:border-[#eeb52a] hover:bg-[#0d284f]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b] transition group-hover:scale-105 group-hover:border-[#eeb52a]">
                  {item.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white transition group-hover:text-[#f4b82b]">
                      {item.title}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#f4b82b]/70">
                      Standard
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs leading-5 text-white/75 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. FOUR SERVICE COMMITMENTS (Unified Quality Banner) ================= */}
      <section className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="rounded-2xl border border-[#314a6c] bg-gradient-to-br from-[#0a2145] to-[#071d40] p-7 sm:p-10 shadow-xl">
            <div className="mb-8 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Service Commitments
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Our 4 Operational Standards
              </h2>
              <div className="mt-3.5 h-[2px] w-10 bg-[#eeb52a]" />
              <p className="mt-2 text-xs leading-5 text-white/70 sm:text-sm">
                Consistent standards guiding our technician visits, repairs, and customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCommitments.map((commitment, idx) => (
                <div
                  key={commitment.title}
                  className="border-t border-[#314a6c]/80 pt-4"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#f4b82b]">
                    <span>0{idx + 1}.</span>
                    <span className="uppercase tracking-wider">Commitment</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {commitment.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 text-white/75">
                    {commitment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. DOORSTEP CUSTOMER EXPERIENCE (Checklist Flow - No Duplicate Image) ================= */}
      <section className="bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Narrative Context */}
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Customer Experience
              </span>

              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A Stress-Free Doorstep Journey
              </h2>

              <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />

              <p className="text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                We believe that appliance repair should be simple and predictable. Our approach is designed around your schedule, offering convenient appointments and clear explanations at every step.
              </p>

              <div className="mt-6">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/contact");
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:text-[#ffd666]"
                >
                  <span>Book Your Doorstep Visit</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
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

            {/* Right Column: 3 Structured Experience Milestones */}
            <div className="space-y-4 lg:col-span-7">
              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/70 p-5 transition hover:border-[#eeb52a]/60">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">
                    1
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Convenient Doorstep Appointments</h3>
                    <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                      Scheduling that fits smoothly into your day with punctual doorstep visits and upfront technician communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/70 p-5 transition hover:border-[#eeb52a]/60">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">
                    2
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Transparent Explanations &amp; Fair Guidance</h3>
                    <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                      Technicians who walk you through the diagnosis and recommended solutions clearly before any repairs start.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#314a6c] bg-[#0a2145]/70 p-5 transition hover:border-[#eeb52a]/60">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-xs font-bold text-[#f4b82b]">
                    3
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Clean &amp; Respectful Workmanship</h3>
                    <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                      Mindful handling of your appliance, quality parts replacement, and leaving your household workspace neat and tidy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. CURATED TRUST FAQS ================= */}
      <section className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Trust &amp; Service FAQ
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Common Service Questions
            </h2>
            <div className="mx-auto my-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="text-sm leading-6 text-white/70 sm:text-base">
              Key questions about our diagnostic process, technician standards, and doorstep visits.
            </p>
          </div>

          <div className="space-y-4">
            {whyUsFaqs.map((faq, index) => {
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
                    aria-controls={`faq-answer-why-${index}`}
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
                      id={`faq-answer-why-${index}`}
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

      {/* ================= 6. TRUST-TO-SERVICE CTA ================= */}
      <section className="bg-[#071d40] px-6 pb-28 pt-10 sm:px-10 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-[#314a6c] bg-[#0a2145] p-7 sm:p-12 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Reliable Doorstep Care
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Experience the Service Hub Standard
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                Explore our full service options across household appliances or contact our service desk directly for doorstep booking.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/services");
                }}
                className="inline-flex items-center justify-center rounded-md bg-[#f4b82b] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#061a3a] transition hover:bg-[#ffc94a]"
              >
                View Services
              </a>

              <a
                href="tel:+918870657575"
                className="inline-flex items-center justify-center rounded-md border border-[#eeb52a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a]"
              >
                Call 8870657575
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
