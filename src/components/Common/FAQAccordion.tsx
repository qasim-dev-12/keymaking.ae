"use client";
import { useState } from "react";

const FAQAccordion = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[800px] space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={faq.q}
          style={{ animationDelay: `${index * 80}ms` }}
          className="rounded-lg bg-white shadow-one animate-[fadeInUp_0.5s_ease_both] dark:bg-dark dark:shadow-three"
        >
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-black dark:text-white"
          >
            {faq.q}
            <span className="ml-4 flex h-6 w-6 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center text-primary">
              {open === index ? "−" : "+"}
            </span>
          </button>
          {open === index && (
            <p className="px-6 pb-4 text-base text-body-color">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
