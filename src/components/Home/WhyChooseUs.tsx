import SectionTitle from "../Common/SectionTitle";

const items = [
  {
    title: "24/7 Availability",
    paragraph:
      "Locked out or need a key fast? Our locksmiths are on call around the clock, every day of the year.",
    icon: <path d="M12 8v4l3 3 M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    title: "Certified Technicians",
    paragraph:
      "Improve security with high-quality lock installation or replacement carried out by trained, certified locksmiths.",
    icon: <path d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" fill="currentColor" stroke="none" />,
  },
  {
    title: "Honest Pricing",
    paragraph:
      "No call-out fee. The price you see is the price you pay, with no hidden charges.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Fast Response",
    paragraph:
      "From Al Quoz to Palm Jumeirah, our mobile locksmiths reach you quickly, wherever you are in Dubai.",
    icon: <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="Why Choose Us" paragraph="" center />
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group rounded-2xl bg-white p-4 shadow-one ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-primary hover:shadow-[0_8px_30px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both] dark:bg-dark dark:shadow-three dark:ring-stroke-dark sm:p-6"
            >
              <span
                style={{ animationDelay: `${i * 250}ms` }}
                className="mb-4 flex h-10 w-10 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20 sm:h-12 sm:w-12"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary sm:h-6 sm:w-6">
                  {item.icon}
                </svg>
              </span>
              <h3 className="mb-2 text-base font-bold text-black dark:text-white sm:mb-3 sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-body-color sm:text-base">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
