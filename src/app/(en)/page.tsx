import Content from "@/components/Content";
import JsonLd from "@/components/JsonLd";
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

import { schemaData, websiteSchema } from "../../../List";
import { type Metadata } from "next";

import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Link from "next/link";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Packers and Movers in UAE | Nice Movers – Free Quote",
      desc: "Nice Movers is a licensed moving company in the UAE, moving homes, offices and single furniture items since 2015. Fixed, affordable prices – free quote.",
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
      "Yes. We are a licensed moving company and offer moving insurance for your belongings, so you have protection and clear accountability if anything goes wrong.",
  },
  {
    question: "Do you offer same-day or urgent service?",
    answer:
      "Yes. Nice Movers offers emergency and same‑day moving options, and we can often send a crew within a few hours for last‑minute moves. Just call to check availability.",
  },
  {
    question: "Can I get packing materials and help with packing?",
    answer:
      "Of course. We supply high‑quality packing materials—boxes, bubble wrap, blankets—and our full‑service crew can pack and unpack everything for you. Our teams use premium materials to safeguard your items.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. We give you a fixed quote up front with no hidden charges. Your quote includes our standard services and packing materials, so you know the cost before moving day.",
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
      "Your move coordinator keeps you updated by phone or WhatsApp throughout the move, from loading to delivery, so you always know where your belongings are.",
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

export default function Home() {
  return (
    <>
      <JsonLd id="organization-schema-json-ld" data={schemaData} />
      <JsonLd id="website-schema-json-ld" data={websiteSchema} />
      <JsonLd id="faqs-schema" data={generateFAQSchema(faqs)} />

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
          title="Coverage & Locations In United Arab Emirates"
          desc={
            <>
              <p>
                Nice Movers serves all of the UAE. From our base in Sharjah, we
                serve{" "}
                <Link href={"/movers-and-packers-in-dubai"}>Dubai</Link>, Abu
                Dhabi, <Link href={"/movers-and-packers-sharjah"}>Sharjah</Link>
                , <Link href={"/movers-in-ajman"}>Ajman</Link>, Fujairah,{" "}
                <Link href={"/movers-in-ras-al-khaimah"}>Ras Al Khaimah</Link>,
                Al Ain and beyond.
              </p>
              <p>
                Wherever you are moving, you get the same crew standards,
                packing materials and fixed-price quote.
              </p>
              <p>
                Whether it is a short move across town or a move from one
                emirate to another, our team plans the route and handles
                everything in between.
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
