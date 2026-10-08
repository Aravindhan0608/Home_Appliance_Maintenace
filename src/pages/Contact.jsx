import { useState } from "react";
import { navigateTo } from "../utils/navigation";

const applianceCategories = [
  "Washing Machine",
  "Refrigerator / Fridge",
  "Air Conditioner (AC)",
  "Microwave Oven",
  "Dishwasher",
  "Water Heater / Geyser",
  "TV",
  "Other Home Appliances",
];

const serviceOptions = [
  "Repair & Troubleshooting",
  "Preventive Maintenance",
  "Installation & Setup",
  "Spare Parts Replacement",
  "Deep Cleaning Service",
  "General Inspection & Checkup",
];

const faqs = [
  {
    question: "Can I send photos or videos of the issue via WhatsApp?",
    answer:
      "Yes, you can connect with us on WhatsApp at 918870657575 to share photos, video clips, or error codes of the issue before the visit.",
  },
  {
    question: "What details should I have ready when contacting you?",
    answer:
      "Providing your appliance type (e.g. washing machine, refrigerator, AC), brand, and a brief description of the problem helps us assist you promptly.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    appliance: "Washing Machine",
    service: "Repair & Troubleshooting",
    preferredMethod: "Call",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [lastSubmittedText, setLastSubmittedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCopyEnquiry = async () => {
    if (!lastSubmittedText) return;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(lastSubmittedText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = lastSubmittedText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // fallback silent
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setWhatsappLink("");
    setLastSubmittedText("");
    setCopied(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    const digitsOnly = formData.phone.replace(/[^0-9]/g, "");
    if (!digitsOnly || digitsOnly.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message or service description.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const textContent = `*New Service Enquiry - Service Hub*
*Full Name:* ${formData.fullName.trim()}
*Phone Number:* ${formData.phone.trim()}
${formData.email.trim() ? `*Email:* ${formData.email.trim()}\n` : ""}*Appliance:* ${formData.appliance}
*Service Required:* ${formData.service}
*Preferred Contact Method:* ${formData.preferredMethod}
*Message:* ${formData.message.trim()}`;

    const url = `https://wa.me/918870657575?text=${encodeURIComponent(textContent)}`;
    setWhatsappLink(url);
    setLastSubmittedText(textContent);
    setSubmitted(true);

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#061a3a] text-white">
      {/* ================= COMPACT CONVERSION HEADER ================= */}
      <section className="relative border-b border-[#314a6c]/40 bg-gradient-to-b from-[#0a2145] to-[#061a3a] pt-[116px] pb-10 sm:pb-14">
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
            <span className="font-medium text-[#f4b82b]">Contact Us</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[2.5px] text-[#f4b82b]">
                Service Hub Enquiry Desk
              </span>
              <h1 className="mt-2 font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Book Doorstep Appliance Service
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                Call our direct phone line, chat on WhatsApp to share appliance faults, or submit the service form below for prompt doorstep scheduling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-400 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Live Desk Available
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#314a6c] bg-[#0a2145] px-3 py-1">
                Doorstep Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRIMARY CONVERSION SECTION (2-COL COCKPIT) ================= */}
      <section className="px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">

            {/* Left Column: Direct Connect & Support Hub (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">

              {/* Direct Call & WhatsApp Panel */}
              <div className="rounded-2xl border border-[#314a6c] bg-[#0a2145] p-6 sm:p-8 shadow-xl">
                <div className="border-b border-[#314a6c]/60 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f4b82b]">
                    Instant Support Lines
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Direct Contact Options
                  </h2>
                </div>

                {/* Primary Phone Box */}
                <div className="mt-6 rounded-xl border border-[#314a6c] bg-[#061a3a] p-4 transition duration-200 hover:border-[#eeb52a]/60">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Phone Support Line</p>
                    <span className="text-[11px] font-bold text-[#f4b82b]">Fastest Response</span>
                  </div>
                  <a
                    href="tel:8870657575"
                    className="mt-2 flex items-center justify-between text-2xl font-bold tracking-tight text-[#f4b82b] transition hover:text-white"
                  >
                    <span>918870657575</span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#eeb52a]/15 text-[#f4b82b]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                  </a>
                  <p className="mt-1 text-xs text-white/65">Direct consultation &amp; doorstep service booking</p>
                </div>

                {/* WhatsApp Chat Box */}
                <a
                  href="https://wa.me/918870657575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-white transition duration-200 hover:border-emerald-400 hover:bg-emerald-500/20"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">Chat on WhatsApp</p>
                      <p className="text-xs text-white/70">Share photos, videos &amp; error codes</p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-emerald-400" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Physical Business Address */}
                <div className="mt-4 rounded-xl border border-[#314a6c] bg-[#061a3a] p-4 transition duration-200 hover:border-[#eeb52a]/60">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#eeb52a]/15 text-[#f4b82b]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        Physical Business Address
                      </p>
                      <address className="mt-1 text-xs not-italic leading-5 text-white/90 sm:text-sm">
                        516 A, Rajiv Gandhi Nagar,<br />
                        Karamadai Road,<br />
                        Mettupalayam,<br />
                        Tamil Nadu - 641301, India
                      </address>
                    </div>
                  </div>
                </div>

                {/* Service Coverage Note */}
                <div className="mt-6 border-t border-[#314a6c]/60 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    Appliance Coverage
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-white/70">
                    Washing Machines, Refrigerators, Air Conditioners, Microwave Ovens, Dishwashers, Water Heaters, TVs, and more.
                  </p>
                </div>
              </div>

              {/* Service Process Checklist */}
              <div className="rounded-2xl border border-[#314a6c]/60 bg-[#071d40] p-6 text-xs text-white/80">
                <p className="font-bold uppercase tracking-wider text-[#f4b82b]">
                  What Happens Next?
                </p>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[11px] font-bold text-[#f4b82b]">
                      1
                    </span>
                    <p className="leading-5">Submit your appliance issue details via form or direct WhatsApp.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[11px] font-bold text-[#f4b82b]">
                      2
                    </span>
                    <p className="leading-5">Our service coordinator confirms symptoms and schedules a technician visit.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f4b82b]/15 text-[11px] font-bold text-[#f4b82b]">
                      3
                    </span>
                    <p className="leading-5">Technician provides on-site doorstep diagnosis with transparent estimation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Service Enquiry Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#314a6c] bg-[#0a2145] p-6 sm:p-10 shadow-2xl">
                <div className="border-b border-[#314a6c]/60 pb-5 mb-6">
                  <span className="text-xs font-bold uppercase tracking-[2px] text-[#f4b82b]">
                    Fast Online Booking
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                    Home Appliance Service Form
                  </h2>
                  <p className="mt-1.5 text-xs text-white/70 sm:text-sm">
                    Fill in your details below to prepare an instant WhatsApp dispatch message.
                  </p>
                </div>

                {submitted && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mb-8 rounded-xl border border-[#eeb52a]/60 bg-[#071d40] p-6 text-white/90 shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4b82b] text-[#061a3a] font-bold text-sm" aria-hidden="true">
                        ✓
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#f4b82b] text-base sm:text-lg">
                          Enquiry Prepared for WhatsApp
                        </h3>
                        <p className="mt-1 text-sm text-white/80 leading-6">
                          Your enquiry has been prepared and formatted for WhatsApp. If WhatsApp did not open automatically (for example, if popups are blocked or WhatsApp is not installed on this device), use the options below:
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {whatsappLink && (
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center rounded-md bg-[#25d366] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#20ba59]"
                            >
                              Open WhatsApp
                            </a>
                          )}

                          <a
                            href="tel:8870657575"
                            className="inline-flex items-center justify-center rounded-md border border-[#eeb52a] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a]"
                          >
                            Call Now: 918870657575
                          </a>

                          <button
                            type="button"
                            onClick={handleCopyEnquiry}
                            aria-live="polite"
                            className="inline-flex items-center justify-center rounded-md border border-[#314a6c] bg-[#0a2145] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-[#eeb52a] hover:text-[#f4b82b]"
                          >
                            {copied ? "Copied to Clipboard!" : "Copy Enquiry Text"}
                          </button>

                          <button
                            type="button"
                            onClick={handleResetForm}
                            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-xs font-medium text-white/60 underline transition hover:text-white"
                          >
                            Edit / Send Another
                          </button>
                        </div>

                        <p className="mt-4 text-xs text-white/60">
                          Note: You must click <strong>Send</strong> in WhatsApp to deliver your message. No data is stored on external servers.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Full Name <span className="text-[#f4b82b]" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        aria-required="true"
                        aria-invalid={errors.fullName ? "true" : "false"}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full rounded-lg border bg-[#061a3a] px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 ${errors.fullName
                          ? "border-red-500 focus:ring-red-400"
                          : "border-[#314a6c] focus:border-[#eeb52a] focus:ring-[#eeb52a]/30"
                          }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Phone Number <span className="text-[#f4b82b]" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 918870657575"
                        aria-required="true"
                        aria-invalid={errors.phone ? "true" : "false"}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`w-full rounded-lg border bg-[#061a3a] px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 ${errors.phone
                          ? "border-red-500 focus:ring-red-400"
                          : "border-[#314a6c] focus:border-[#eeb52a] focus:ring-[#eeb52a]/30"
                          }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Appliance Category Dropdown */}
                    <div>
                      <label htmlFor="appliance" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Appliance Category <span className="text-[#f4b82b]" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="appliance"
                        name="appliance"
                        value={formData.appliance}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full rounded-lg border border-[#314a6c] bg-[#061a3a] px-4 py-3 text-sm text-white focus:border-[#eeb52a] focus:outline-none focus:ring-2 focus:ring-[#eeb52a]/30"
                      >
                        {applianceCategories.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#061a3a] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Service Required Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Service Required <span className="text-[#f4b82b]" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        aria-required="true"
                        className="w-full rounded-lg border border-[#314a6c] bg-[#061a3a] px-4 py-3 text-sm text-white focus:border-[#eeb52a] focus:outline-none focus:ring-2 focus:ring-[#eeb52a]/30"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#061a3a] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Email (Optional) */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Email Address <span className="text-white/60 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full rounded-lg border border-[#314a6c] bg-[#061a3a] px-4 py-3 text-sm text-white placeholder-white/60 focus:border-[#eeb52a] focus:outline-none focus:ring-2 focus:ring-[#eeb52a]/30"
                      />
                    </div>

                    {/* Preferred Contact Method */}
                    <fieldset>
                      <legend className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                        Preferred Contact Method
                      </legend>
                      <div className="flex items-center gap-6 pt-2">
                        <label className="flex items-center gap-2 text-sm text-white/90 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredMethod"
                            value="Call"
                            checked={formData.preferredMethod === "Call"}
                            onChange={handleChange}
                            className="accent-[#f4b82b]"
                          />
                          <span>Phone Call</span>
                        </label>
                        <label className="flex items-center gap-2 text-sm text-white/90 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredMethod"
                            value="WhatsApp"
                            checked={formData.preferredMethod === "WhatsApp"}
                            onChange={handleChange}
                            className="accent-[#f4b82b]"
                          />
                          <span>WhatsApp</span>
                        </label>
                      </div>
                    </fieldset>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                      Message / Issue Details <span className="text-[#f4b82b]" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your appliance brand, model, observable symptoms, or questions..."
                      aria-required="true"
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full rounded-lg border bg-[#061a3a] px-4 py-3 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 ${errors.message
                        ? "border-red-500 focus:ring-red-400"
                        : "border-[#314a6c] focus:border-[#eeb52a] focus:ring-[#eeb52a]/30"
                        }`}
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#f7c23c] to-[#eaaa1e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#071a39] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f0b52a]/25 sm:w-auto"
                    >
                      <span>Submit via WhatsApp</span>
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                    <p className="mt-3 text-xs text-white/70">
                      Submitting prepares a prefilled WhatsApp message with your enquiry details. You then press Send in WhatsApp to dispatch.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CURATED CONTACT LOGISTICS FAQS ================= */}
      <section className="border-t border-[#314a6c]/40 bg-[#071d40] px-6 py-12 sm:px-10 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-[850px]">
          <div className="mb-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[2px] text-[#f4b82b]">
              Enquiry Logistics
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-[#314a6c] bg-[#0a2145]/70 transition duration-200 hover:border-[#eeb52a]/50"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between p-5 text-left transition"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#314a6c] text-[#f4b82b] transition-transform duration-300 ${isOpen ? "rotate-180 border-[#eeb52a]" : ""
                        }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#314a6c]/60 px-5 pb-5 pt-3 text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Minimalist Contact Help Note instead of duplicate 1100px CTA */}
          <div className="mt-10 rounded-xl border border-[#314a6c]/50 bg-[#061a3a]/80 p-5 text-center text-xs text-white/70">
            Need urgent assistance or have immediate questions? Call our direct support line at{" "}
            <a href="tel:8870657575" className="font-semibold text-[#f4b82b] hover:underline">
              918870657575
            </a>{" "}
            or message us on WhatsApp.
          </div>
        </div>
      </section>
    </div>
  );
}
