const CheckIcon = () => (
  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const brands = [
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Porsche",
  "Toyota",
  "Land Rover",
  "Nissan",
  "Lexus",
];

const CarKeyBrands = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center gap-y-10">
          <div className="w-full px-4 lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-one ring-1 ring-black/5 dark:ring-stroke-dark">
              <img
                src="/images/keymaking/car-keys-brands.jpeg"
                alt="Car keys for BMW, Mercedes, Audi, and Porsche"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Car Key Brands
            </span>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
              Car Key Replacement & Programming for Every Brand
            </h2>
            <p className="mb-6 text-base leading-relaxed text-body-color">
              From everyday sedans to luxury vehicles, our locksmiths cut and
              program keys for a wide range of car brands, right at your
              location in Dubai.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center gap-2 rounded-xl bg-gray-light px-3 py-2 text-sm font-medium text-body-color dark:bg-bg-color-dark"
                >
                  <CheckIcon />
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarKeyBrands;
