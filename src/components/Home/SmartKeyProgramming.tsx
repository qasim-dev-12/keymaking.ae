const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const points = [
  "Remote and keyless entry programming",
  "Transponder chip key coding",
  "Smart key battery replacement and diagnostics",
  "Spare smart key programming on-site",
];

const SmartKeyProgramming = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap-reverse items-center gap-y-10">
          <div className="w-full px-4 lg:w-1/2">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Smart Key Programming
            </span>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
              Modern Smart Keys, Programmed On-Site
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Today's vehicles rely on smart keys and keyless entry systems.
              Our technicians bring the diagnostic equipment needed to
              program, sync, or troubleshoot smart keys right at your
              location.
            </p>
            <div className="space-y-3">
              {points.map((point, i) => (
                <div
                  key={point}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className="flex items-center gap-3 animate-[fadeInUp_0.5s_ease_both]"
                >
                  <span className="flex h-7 w-7 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
                    <CheckIcon />
                  </span>
                  <p className="text-sm font-medium text-body-color dark:text-body-color-dark">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-one ring-1 ring-black/5 dark:ring-stroke-dark">
              <img
                src="/images/keymaking/smart-car-key.jpeg"
                alt="Smart car key programming"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartKeyProgramming;
