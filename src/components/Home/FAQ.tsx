import SectionTitle from "../Common/SectionTitle";
import FAQAccordion from "../Common/FAQAccordion";

const faqs = [
  { q: "How fast can a locksmith reach me in Dubai?", a: "Our locksmiths typically arrive within 30-45 minutes anywhere in Dubai." },
  { q: "Can you make a car key without the original?", a: "In most cases, yes — we can cut and program a replacement key using your vehicle's details." },
  { q: "Will unlocking my door or car damage the lock?", a: "No — we use professional, non-destructive entry methods wherever possible." },
  { q: "Do you offer a warranty on lock replacements?", a: "Yes — lock replacements and key programming come with a service warranty. Ask your technician for details." },
  { q: "Is there a charge for a call-out?", a: "No call-out fee. You only pay for the service performed." },
  { q: "Do you provide emergency services during holidays?", a: "Yes — we are available 24/7, 365 days a year, including all UAE public holidays." },
  { q: "Can you open a safe without damaging it?", a: "We always attempt non-destructive methods first to preserve your safe wherever possible." },
  { q: "Do you cover apartments and offices, not just houses?", a: "Yes — we service residential, commercial, and automotive locks and keys across Dubai." },
];

const FAQ = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Common Questions About Our Locksmith Services in Dubai"
          paragraph=""
          center
        />
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
