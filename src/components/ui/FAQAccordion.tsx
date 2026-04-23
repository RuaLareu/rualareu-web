"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { ServiceFAQ } from "@/types/service";

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-primary/20">
      {faqs.map((faq, index) => (
        <div key={index} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between gap-4 text-left group"
            aria-expanded={openIndex === index}
          >
            <span className="text-text font-medium text-sm md:text-base leading-snug group-hover:text-primary transition-colors">
              {faq.question}
            </span>
            <span className="flex-shrink-0 mt-0.5 text-accent">
              {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed pr-8">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
