import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import services from "@/data/services";

const defaultIcon = <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z" />;

const iconBySlug: Record<string, React.ReactNode> = {
  "car-door-unlocking": <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M15 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z M3 16l1.5-6c.3-1.2 1.4-2 2.6-2h9.8c1.2 0 2.3.8 2.6 2L21 16v3H3v-3z" />,
  "apartment-door-unlocking": <path d="M4 21V6l8-3 8 3v15 M9 21v-6h6v6 M9 9h.01 M15 9h.01 M9 13h.01 M15 13h.01" />,
  "lock-replacement": <path d="M6 11V7a6 6 0 0 1 12 0v4 M5 11h14v10H5z" />,
  "safe-box-unlocking": <path d="M4 4h16v16H4z M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0 M12 8v0 M12 16v0 M8 12h0 M16 12h0" />,
  "car-key-replacement": <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z" />,
  "car-key-programming": <path d="M9 3h6v3H9V3zm1 4h4v9h-4V7zm2 10.5a1 1 0 100 2 1 1 0 000-2z" />,
  "house-door-unlocking": <path d="M3 12l9-9 9 9 M5 10v10h14V10 M14 20v-6h-4v6" />,
  "padlock-key-cutting-replacement": <path d="M6 11V8a6 6 0 0 1 6-6 M6 11V7a6 6 0 0 1 6-4 M5 11h14v10H5z M12 15v3" />,
  "duplicate-key-cutting": <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z M20 3l-2 2 M17 6l1 1" />,
  "maintaining-repairing-locks": <path d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" fill="currentColor" stroke="none" />,
};

const ServicesGrid = () => {
  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Professional Locksmith Services for Homes, Businesses & Vehicles"
          paragraph="Fast, reliable key making and locksmith services across Dubai. Our mobile technicians are equipped for every common lock and key emergency."
          center
        />
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-4">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              style={{ animationDelay: `${i * 80}ms` }}
              className="group block rounded-2xl bg-white p-4 shadow-one ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:ring-primary hover:shadow-[0_8px_30px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both] dark:bg-dark dark:shadow-three dark:ring-stroke-dark sm:p-6"
            >
              <span
                style={{ animationDelay: `${i * 200}ms` }}
                className="mb-4 flex h-10 w-10 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20 sm:h-12 sm:w-12"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary sm:h-6 sm:w-6">
                  {iconBySlug[service.slug] ?? defaultIcon}
                </svg>
              </span>
              <h3 className="mb-2 text-base font-bold text-black dark:text-white sm:mb-3 sm:text-lg">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-body-color">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14 M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
