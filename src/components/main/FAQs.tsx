import { ChevronDownIcon } from "lucide-react";
import { ReactNode } from "react";

interface FAQProps {
  question: string;
  answer: string | ReactNode;
}

const HEADINGS = {
  en: "Frequently Asked Questions",
  ar: "الأسئلة الشائعة",
} as const;

// Native <details>/<summary> keeps every answer in the server-rendered HTML
// (crawlable), while looking like the previous Radix accordion.
export function FAQs({
  faqs,
  locale = "en",
}: {
  faqs: FAQProps[];
  locale?: "en" | "ar";
}) {
  return (
    <section id="faqs" className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3">
      <h2 className="text-center b-red md:text-4xl text-2xl">
        {HEADINGS[locale]}
      </h2>
      <div className="max-w-3xl mx-auto mt-10">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="group w-full border-b [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-md py-4 text-left md:text-lg text-base font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50 rtl:text-right">
              <span>{faq.question}</span>
              <ChevronDownIcon
                aria-hidden="true"
                className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="flex flex-col gap-2 pt-0 pb-2 text-sm">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
