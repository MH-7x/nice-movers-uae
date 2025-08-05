import Content from "@/components/Content";
import ContactSection from "@/components/main/ContactSection";
import { CoreServices } from "@/components/main/CoreServices";
import CTA from "@/components/main/CTA";
import { FAQs } from "@/components/main/FAQs";
import HeroSection from "@/components/main/HeroSection";
import Locations from "@/components/main/Locations";
import Pricing from "@/components/main/Pricing";
import Process from "@/components/main/Process";
import Testimoials from "@/components/main/testimonials";
import WhyChooseUs from "@/components/main/WhyChooseUs";

import Script from "next/script";
import { schemaData } from "../../List";
import { type Metadata } from "next";

import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Best Packers and Movers in UAE | Book Now - Low Prices",
      desc: "Nice Movers is top rated moving company in UAE with over 15+ years of experties in moving with UAE. We offer affordable moving services for homes, offices and single furnitures.",
    },
    image: {
      path: "/nice-movers-transport-trucks.jpg",
      alt: "Nice Movers Company Trucks",
    },
    path: "",
  },
});

const faqs = [
  {
    question: "Is my move insured?",
    answer:
      "Absolutely. We provide full moving insurance and work only with licensed movers. Experts recommend choosing licensed companies that offer insurance for your belongings to ensure safety and accountability.",
  },
  {
    question: "Do you offer same-day or urgent service?",
    answer:
      "Yes. Nice Movers offers emergency and same‑day moving options. Many UAE movers advertise they can dispatch within a few hours for last‑minute moves. Just call to check availability.",
  },
  {
    question: "Can I get packing materials and help with packing?",
    answer:
      "Of course. We supply high‑quality packing materials—boxes, bubble wrap, blankets—and our full‑service crew can pack and unpack everything for you. Our teams use premium materials to safeguard your items.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. We believe in transparent pricing. Like reputable UAE movers, we offer fixed quotes with no hidden charges. You’ll know the cost up front and our quotes include standard services and materials.",
  },
  {
    question: "How can I choose reliable movers in the UAE?",
    answer:
      "Look for licensed companies with positive reviews and industry experience. Verify their trade license includes relocation services and ask for references. Multiple quotes help compare services effectively.",
  },
  {
    question: "What should I prepare before the move?",
    answer:
      "Declutter beforehand, inform your building management to secure moving permission or elevator access, and label fragile items. A proper survey and inventory ensure accurate quotes.",
  },
  {
    question: "Do you handle fragile, oversized or office relocations?",
    answer:
      "Yes. Our crews are trained to pack fragile and oversized items, disassemble/reassemble furniture, and conduct commercial office moves with minimized downtime.",
  },
  {
    question: "Can I track my belongings during the move?",
    answer:
      "Yes. Some UAE moving companies offer GPS or app-based tracking so you can monitor your shipment in real time.",
  },
  {
    question: "How far in advance should I book movers?",
    answer:
      "Book at least 1–2 weeks in advance, especially during peak seasons and weekends. Last-minute bookings may incur higher fees or limited availability.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, online transfers, and major credit cards. Payment is collected at the final destination—please confirm acceptable methods before moving day.",
  },
];

const FAQsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Script
        id="website-schema-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        strategy="beforeInteractive"
      />
      <Script
        id="faqs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQsSchema) }}
        strategy="beforeInteractive"
      />

      <main className="z-20 mt-32">
        <HeroSection />
        <Content />
        <ContactSection
          title="Book Now — Packers And Movers in UAE — Low Rates"
          desc="All Covered. No Hassle. Low-cost movers and packers expert service —
          book now! Door-to-Door Delivery. Same Day Mover Services. Fixed
          Prices."
        />
        <WhyChooseUs />
        <CoreServices />
        <Locations
          id="service-locations"
          title="Coverage & Locations In United Arab Emairtes"
          desc={
            <>
              <p>
                Nice Movers serves all of the UAE. We have branches and teams in
                Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, Al
                Ain and beyond.{" "}
              </p>
              <p>
                Our local offices and experts mean you get the same personalized
                service coast-to-coast.
              </p>
              <p>
                As noted by industry leaders, we cover the entire region –
                literally “anywhere in Dubai, Abu Dhabi, Sharjah… or anywhere in
                between”
              </p>
            </>
          }
          img={{
            src: "/movers-in-uae-2.png",
            alt: "moving trucks of Nice Movers UAE",
          }}
        />
        <Process />
        <Testimoials />
        <Pricing />
        <FAQs faqs={faqs} />
        <CTA />
      </main>
    </>
  );
}
