import { navigateTo } from "../utils/navigation";

export default function NotFound() {
  return (
    <div className="bg-[#061a3a] text-white">
      <section className="relative flex min-h-[65vh] items-center justify-center px-6 pt-[140px] pb-20 sm:px-10 lg:px-12">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4b82b]/5 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[680px] rounded-2xl border border-[#314a6c] bg-[#0a2145]/70 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12">
          <span className="inline-block rounded-full border border-[#f4b82b]/30 bg-[#f4b82b]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[2px] text-[#f4b82b]">
            404 ERROR
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Page Not Found
          </h1>

          <div className="mx-auto my-5 h-[3px] w-[62px] bg-[#f4b82b]" />

          <p className="mx-auto max-w-md text-sm leading-6 text-white/75 sm:text-base">
            The page you are looking for does not exist or may have been moved. Please return to our home page or explore our home appliance services.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="inline-flex w-full items-center justify-center rounded-md bg-[#f4b82b] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-[#061a3a] transition hover:bg-[#ffc94a] sm:w-auto"
            >
              Back to Home
            </a>

            <a
              href="/services"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/services");
              }}
              className="inline-flex w-full items-center justify-center rounded-md border border-[#eeb52a] px-7 py-3.5 text-sm font-semibold text-[#f4b82b] transition hover:bg-[#eeb52a] hover:text-[#061a3a] sm:w-auto"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
