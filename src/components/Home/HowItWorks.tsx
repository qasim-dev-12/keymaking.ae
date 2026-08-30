import SectionTitle from "../Common/SectionTitle";

const icons = [
  <path key="call" d="M9 3h6v3H9V3zm1 4h4v9h-4V7zm2 10.5a1 1 0 100 2 1 1 0 000-2z" />,
  <path key="pin" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  <path key="wrench" d="M21 3l-4 4 2 2 4-4a5 5 0 01-6 6L6 22l-2-2 11-11a5 5 0 016-6z" />,
  <path key="car" d="M5 17a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0zM3 16l1.5-6c.3-1.2 1.4-2 2.6-2h9.8c1.2 0 2.3.8 2.6 2L21 16v3H3v-3z" />,
];

const steps = [
  { title: "Call or Book Online", text: "Tell us your location and what you need — car, home, office, or safe." },
  { title: "Drop Your Location", text: "Share your live location, nearest locksmith is dispatched." },
  { title: "Diagnose & Resolve", text: "We assess the lock or key first, then unlock, cut, or replace as needed." },
  { title: "Job Done", text: "You're secure again, with a receipt and any warranty details." },
];

const HowItWorks = () => {
  return (
    <section id="how-we-work" className="bg-gray-light dark:bg-bg-color-dark py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Back to Security in 4 Steps"
          paragraph="Getting locked-out or key issues resolved in Dubai has never been this simple."
          center
        />
        <div className="-mx-4 flex flex-wrap-reverse items-center gap-y-10">
          <div className="w-full px-4 lg:w-2/5">
            <div className="overflow-hidden rounded-2xl shadow-one ring-1 ring-black/5 dark:ring-stroke-dark">
              <img
                src="/images/keymaking/brass-key-milling.jpeg"
                alt="Precision milling of a brass car key"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{ animationDelay: `${i * 120}ms` }}
                className="flex items-start gap-4 py-4 animate-[fadeInUp_0.5s_ease_both]"
              >
                <span
                  style={{ animationDelay: `${i * 250}ms` }}
                  className="flex h-12 w-12 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{icons[i]}</svg>
                </span>
                <div className="flex-1 text-left">
                  <h3 className="mb-1 text-base font-bold text-black dark:text-white">{s.title}</h3>
                  <p className="text-sm text-body-color dark:text-body-color-dark">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
