import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const keyTypes = [
  {
    title: "Automotive Keys",
    description: "Car door unlocking, key replacement, and remote/transponder key programming for all vehicle brands.",
    href: "/services/car-key-programming",
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z" />,
  },
  {
    title: "Residential Keys",
    description: "House and apartment door unlocking, plus lock replacement for stronger home security.",
    href: "/services/house-door-unlocking",
    icon: <path d="M3 12l9-9 9 9 M5 10v10h14V10 M14 20v-6h-4v6" />,
  },
  {
    title: "Commercial Lock Services",
    description: "Lock replacement and ongoing maintenance and repair for offices and businesses.",
    href: "/services/lock-replacement",
    icon: <path d="M6 11V7a6 6 0 0 1 12 0v4 M5 11h14v10H5z" />,
  },
  {
    title: "Safe & Padlock Keys",
    description: "Safe box unlocking plus precise padlock key cutting and replacement.",
    href: "/services/safe-box-unlocking",
    icon: <path d="M4 4h16v16H4z M12 12m-4 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />,
  },
  {
    title: "Duplicate Keys",
    description: "Fast duplication of spare keys for your home, office, or car so you always have a backup.",
    href: "/services/duplicate-key-cutting",
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2Z M20 3l-2 2 M17 6l1 1" />,
  },
];

const BrandsShowcase = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Keymaking & Locksmith Services for Every Purpose"
          paragraph="Whatever the lock or key, we cover it. Here's how our services break down by purpose."
          center
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {keyTypes.map((type, i) => (
            <Link
              key={type.title}
              href={type.href}
              style={{ animationDelay: `${i * 100}ms` }}
              className="group flex flex-col items-center gap-4 rounded-2xl bg-dark p-6 text-center ring-1 ring-stroke-dark transition-all duration-300 hover:-translate-y-2 hover:ring-primary hover:shadow-[0_12px_40px_rgba(52,235,229,0.15)] animate-[fadeInUp_0.5s_ease_both]"
            >
              <span className="flex h-16 w-16 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30 transition-colors duration-300 group-hover:bg-primary/20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
                  {type.icon}
                </svg>
              </span>
              <span className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-primary">
                {type.title}
              </span>
              <span className="text-sm text-body-color-dark">{type.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase;
