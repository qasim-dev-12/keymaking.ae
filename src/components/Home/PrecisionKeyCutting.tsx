const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const points = [
  "Precision laser cutting for an exact fit",
  "Duplicate keys for home, office, and car",
  "Padlock key cutting and replacement",
  "Multiple copies cut in a single visit",
];

const PrecisionKeyCutting = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center gap-y-10">
          <div className="w-full px-4 lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-one ring-1 ring-black/5 dark:ring-stroke-dark">
              <img
                src="/images/keymaking/laser-key-cutting.jpeg"
                alt="Precision laser key cutting machine"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Precision Key Cutting
            </span>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
              Precision Key Cutting Technology
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              Our workshop uses precision laser cutting to make sure every
              duplicate or padlock key fits and turns exactly right, the
              first time.
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
        </div>
      </div>
    </section>
  );
};

export default PrecisionKeyCutting;
