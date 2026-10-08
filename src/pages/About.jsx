import { navigateTo } from "../utils/navigation";

const coreValues = [
  {
    title: "Reliability",
    description:
      "Consistent, dependable doorstep service you can count on for timely diagnosis and durable, long-lasting repairs.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M24 5 8 11v10c0 10.5 6.7 18.8 16 22 9.3-3.2 16-11.5 16-22V11L24 5Z" />
        <path d="m17 24 5 5 10-11" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "Clear guidance on appliance conditions and straightforward communication with no hidden surprises or guesswork.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="24" cy="24" r="16" />
        <path d="M24 14v10l6 6" />
      </svg>
    ),
  },
  {
    title: "Customer Care",
    description:
      "Courteous, attentive service tailored to your convenience, treating your home and time with utmost respect.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="24" cy="24" r="10" />
        <path d="M18 14 14 5h7l3 7 3-7h7l-4 9" />
        <path d="m20 24 3 3 6-7" />
      </svg>
    ),
  },
  {
    title: "Quality Service",
    description:
      "Professional workmanship using genuine spare parts and proven diagnostic procedures across all major brands.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="24" cy="24" r="17" />
        <path d="m24 10 3.1 3.7 4.8-.3 1.5 4.5 4.2 2.4-1.7 4.5 1.7 4.5-4.2 2.4-1.5 4.5-4.8-.3L24 38l-3.1-3.7-4.8.3-1.5-4.5-4.2-2.4 1.7-4.5-1.7-4.5 4.2-2.4 1.5-4.5 4.8.3L24 10Z" />
        <path d="m18 24 4 4 8-9" />
      </svg>
    ),
  },
];


export default function About() {
  return (
    <div className="bg-[#061a3a] text-white">
      {/* ================= 1. EDITORIAL HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-[116px] pb-16 sm:pb-20 lg:pb-22">
        <div className="absolute top-0 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#f4b82b]/5 blur-[120px] pointer-events-none" />

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
            <span className="font-medium text-[#f4b82b]">About Us</span>
          </nav>

          {/* Editorial Heading Block */}
          <div className="max-w-[900px]">
            <span className="inline-block rounded-full border border-[#f4b82b]/30 bg-[#f4b82b]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#f4b82b]">
              About Service Hub
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-[54px] lg:leading-[1.12]">
              Dedicated to Quality Care for Every Household Appliance
            </h1>

            <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />

            <p className="max-w-2xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              We built Service Hub with a clear purpose: to provide honest diagnostics, skilled workmanship, and dependable doorstep service for the appliances your home relies on every single day.
            </p>
          </div>

          {/* Editorial Visual & Narrative Strip */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Team Visual */}
            <div className="lg:col-span-6">
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#314a6c] bg-[#0a2145] p-2 shadow-2xl">
                <div className="overflow-hidden rounded-xl h-full">
                  <img
                    src="/about.webp"
                    alt="Service Hub dedicated service team"
                    loading="eager"
                    fetchPriority="high"
                    className="h-[420px] w-full object-contain sm:h-[500px] lg:h-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#eeb52a]/20" />

                {/* Integrated badge */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-[300px] rounded-xl border border-[#eeb52a]/40 bg-[#061a3a]/95 p-3.5 shadow-2xl backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#f4b82b]">
                    Doorstep Technicians
                  </p>
                  <p className="mt-0.5 text-xs text-white/75">
                    Trained, verified, and customer-focused care.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Pillars Block */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#314a6c] bg-[#0a2145]/70 p-7 sm:p-8 lg:col-span-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                  Our Service Philosophy
                </span>
                <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                  Bringing Professional Care Directly to Your Doorstep
                </h2>
                <div className="my-3.5 h-[2px] w-10 bg-[#eeb52a]" />
                <p className="text-sm leading-6 text-white/75">
                  Household appliances shouldn&apos;t require the hassle of transport, prolonged waiting, or unclear repair quotes. Our mobile specialists arrive directly at your location with proper tools and authentic components.
                </p>
              </div>

              <div className="mt-6 space-y-3.5 border-t border-[#314a6c]/50 pt-5 text-xs text-white/80">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[#f4b82b] font-bold">✓</span>
                  <span>Skilled technicians with multi-brand troubleshooting experience</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[#f4b82b] font-bold">✓</span>
                  <span>100% genuine spare components for long-lasting performance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[#f4b82b] font-bold">✓</span>
                  <span>Transparent communication before, during, and after service</span>
                </div>
              </div>

              <div className="mt-7">
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-7 py-3 text-xs font-bold uppercase tracking-wider text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5"
                >
                  Explore Appliance Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. WHO WE ARE (Editorial Narrative) ================= */}
      <section className="relative bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Our Identity
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:leading-tight">
                Specialists in Household Appliance Diagnostics &amp; Care
              </h2>
              <div className="my-4 h-[3px] w-12 bg-[#eeb52a]" />
              <p className="font-serif italic text-lg leading-7 text-[#f4b82b]/90">
                &ldquo;We understand how essential smoothly running appliances are to your household routine.&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-sm leading-7 text-white/80 sm:text-base lg:col-span-7">
              <p>
                At Service Hub, we specialize in comprehensive home appliance solutions across washing machines, refrigerators, air conditioners, microwaves, dishwashers, and more. When an essential appliance stops functioning, it disrupts everyday life.
              </p>
              <p>
                Our customer-focused approach means prioritizing convenience, quick turnarounds, and clear guidance. We bring skilled workmanship and authentic spare parts right to your doorstep so you never have to deal with the hassle of moving heavy appliances.
              </p>
              <p className="text-xs text-white/65 sm:text-sm">
                Every service visit concludes with complete operational testing, ensuring that cycles, cooling, heating, or electronic controls run exactly as intended before we consider the job done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MISSION & OPERATING PRINCIPLES ================= */}
      <section className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Mission Box */}
            <div className="rounded-2xl border border-[#314a6c] bg-gradient-to-br from-[#0a2145] to-[#071d40] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Our Mission
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Dependable Service, Every Single Visit
              </h3>
              <div className="my-3.5 h-[2px] w-10 bg-[#eeb52a]" />
              <p className="text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Our mission is to deliver dependable, convenient, and high-quality home appliance care to every household, ensuring prompt doorstep response, transparent service, and appliances that last longer.
              </p>
            </div>

            {/* Operating Principles Box */}
            <div className="rounded-2xl border border-[#314a6c] bg-gradient-to-br from-[#0a2145] to-[#071d40] p-8 sm:p-10 shadow-xl">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Operating Standard
              </span>
              <h3 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">
                Clarity Before Any Work Begins
              </h3>
              <div className="my-3.5 h-[2px] w-10 bg-[#eeb52a]" />
              <p className="text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Every service visit is grounded in clarity: explaining the diagnosed issue honestly before starting, using genuine components, and testing thoroughly so you have lasting peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. HORIZONTAL VALUES SEQUENCE ================= */}
      <section className="bg-[#071d40] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Guiding Principles
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Core Values
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              The fundamental pillars that define our service standards and customer commitment.
            </p>
          </div>

          {/* Horizontal Value Sequence */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, idx) => (
              <div
                key={value.title}
                className="group flex flex-col justify-between rounded-xl border border-[#314a6c] bg-[#0a2145]/70 p-6 transition duration-300 hover:border-[#eeb52a] hover:bg-[#0d284f]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#eeb52a]/40 bg-[#061a3a] text-[#f4b82b] transition group-hover:border-[#eeb52a]">
                      {value.icon}
                    </div>
                    <span className="text-xs font-bold text-[#f4b82b]/60">0{idx + 1}</span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white transition group-hover:text-[#f4b82b]">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm">
                    {value.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#314a6c]/40 text-[11px] font-semibold text-[#f4b82b]/70 uppercase tracking-wider">
                  Service Hub Value
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. OUR COMMITMENT (Clean 3-Pillar Row) ================= */}
      <section className="bg-[#061a3a] px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
              Our Promise
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Commitment to You
            </h2>
            <div className="mt-3.5 h-[3px] w-12 bg-[#eeb52a]" />
            <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
              Providing a seamless, respectful, and dependable experience at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-t-2 border-[#eeb52a] bg-[#0a2145]/40 p-6 pt-7 rounded-b-xl">
              <h3 className="text-base font-bold text-white">Clear Communication</h3>
              <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                We keep you fully informed before, during, and after service with upfront explanations and no surprises.
              </p>
            </div>

            <div className="border-t-2 border-[#eeb52a] bg-[#0a2145]/40 p-6 pt-7 rounded-b-xl">
              <h3 className="text-base font-bold text-white">Convenient Doorstep Care</h3>
              <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                Experienced technicians arrive directly at your home with tools and genuine parts, saving your time and energy.
              </p>
            </div>

            <div className="border-t-2 border-[#eeb52a] bg-[#0a2145]/40 p-6 pt-7 rounded-b-xl">
              <h3 className="text-base font-bold text-white">Dependable Service</h3>
              <p className="mt-2 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
                We prioritize thorough inspection, authentic parts, and full cycle testing to ensure lasting appliance performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. LIGHTER DIRECTIONAL FINAL CTA ================= */}
      <section className="bg-[#071d40] px-6 pb-28 pt-10 sm:px-10 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-[#314a6c] bg-[#0a2145] p-7 sm:p-12 shadow-xl">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#f4b82b]">
                Explore Services
              </span>
              <h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Ready to Experience Hassle-Free Appliance Care?
              </h2>
              <p className="mt-2 max-w-xl text-xs leading-5 text-white/70 sm:text-sm sm:leading-6">
                Discover our full range of repair and maintenance options across household appliances, or call our desk directly.
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
                View All Services
              </a>

              <a
                href="tel:+918870657575"
                className="inline-flex items-center justify-center rounded-md border border-[#eeb52a] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a]"
              >
                Call Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
