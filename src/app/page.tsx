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
      "Look for licensed companies with positive reviews and industry experience. Verify their trade license includes relocation services and ask for references. Multiple quotes help compare services effectively.:contentReference[oaicite:1]{index=1}",
  },
  {
    question: "What should I prepare before the move?",
    answer:
      "Declutter beforehand, inform your building management to secure moving permission or elevator access, and label fragile items. A proper survey and inventory ensure accurate quotes.:contentReference[oaicite:2]{index=2}",
  },
  {
    question: "Do you handle fragile, oversized or office relocations?",
    answer:
      "Yes. Our crews are trained to pack fragile and oversized items, disassemble/reassemble furniture, and conduct commercial office moves with minimized downtime.:contentReference[oaicite:3]{index=3}",
  },
  {
    question: "Can I track my belongings during the move?",
    answer:
      "Yes. Some UAE moving companies offer GPS or app-based tracking so you can monitor your shipment in real time.:contentReference[oaicite:4]{index=4}",
  },
  {
    question: "How far in advance should I book movers?",
    answer:
      "Book at least 1–2 weeks in advance, especially during peak seasons and weekends. Last-minute bookings may incur higher fees or limited availability.:contentReference[oaicite:5]{index=5}",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, online transfers, and major credit cards. Payment is collected at the final destination—please confirm acceptable methods before moving day.:contentReference[oaicite:6]{index=6}",
  },
];

export default function Home() {
  return (
    <main className="z-20 mt-32">
      <HeroSection />
      <Content />
      <ContactSection />
      <WhyChooseUs />
      <CoreServices />
      <Locations />
      <Process />
      <Testimoials />
      <Pricing />
      <FAQs faqs={faqs} />
      <CTA />
    </main>
  );
}
