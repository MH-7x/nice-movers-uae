import ContactSection from "@/components/main/ContactSection";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  AlarmCheckIcon,
  CheckCircle,
  Hammer,
  ListTodoIcon,
  MapPin,
  Medal,
  Phone,
  ShieldCheckIcon,
  Star,
  Timer,
  UsersRoundIcon,
} from "lucide-react";
import { Metadata } from "next";
import imageSrc from "../../../../public/nice-movers-ras-al-khaimah-professional-moving-company.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ras Al Khaimah | ISO-Certified Moving Company in RAK",
      desc: "Trusted movers in Ras Al Khaimah — ISO 9001:2015 certified. House, villa & office moves with professional packing. Free quote — call +971 563560017.",
    },
    image: {
      path: "/nice-movers-ras-al-khaimah-professional-moving-company.jpg",
      alt: "Nice Movers UAE team carrying furniture outside a luxury villa in Ras Al Khaimah with a branded moving truck in the background",
    },
    path: "/movers-in-ras-al-khaimah",
  },
});

const faqs = [
  {
    question: "How much do movers in Ras Al Khaimah charge?",
    answer:
      "Costs depend on the size of your move, distance, and services required. A small apartment move within RAK typically starts from AED 350. Villa moves start from around AED 1,200. Contact Nice Movers for a free, itemised quote.",
  },
  {
    question: "Are you able to move on the same day?",
    answer:
      "Yes. Nice Movers offers same-day moves in Ras Al Khaimah, subject to crew availability. Call before noon for the best chance of a same-day booking.",
  },
  {
    question: "Do you move from Ras Al Khaimah to Dubai or other emirates?",
    answer:
      "Yes — inter-emirate moves are a standard service. We regularly handle RAK to Dubai, RAK to Sharjah, RAK to Abu Dhabi, and all other emirate-to-emirate routes. No extra paperwork required from you.",
  },
  {
    question: "What is included in your packing service?",
    answer:
      "Our packing service covers all materials — bubble wrap, stretch film, packing paper, double-wall cartons — plus disassembly and reassembly of furniture. You don't need to supply anything.",
  },
  {
    question: "Is Nice Movers a licensed moving company in RAK?",
    answer:
      "Yes. Nice Movers is a licensed, ISO 9001:2015 certified moving company operating across the UAE, including Ras Al Khaimah.",
  },
  {
    question: "How do I get a quote from Nice Movers in Ras Al Khaimah?",
    answer:
      "Call or WhatsApp us at +971 563560017, or fill in the contact form on our website. We'll get back to you within the hour.",
  },
  {
    question: "Can you handle fragile or high-value items?",
    answer:
      "Yes. We use specialist wrapping for antiques, artworks, large mirrors, chandeliers, and electronics. For particularly high-value items, optional insurance coverage is available.",
  },
];

const JsonLd = generateServiceSchema({
  serviceName: "Movers in Ras Al Khaimah",
  serviceDescription:
    "Trusted movers and packers in ras al khaimah. Nice Movers offers secure house, villa & office relocation, insured crews, same- day service & free on- site quotes.",
  serviceUrl: APP.url + "/movers-in-ras-al-khaimah",
  priceRange: "499 AED - 5000 AED",
  imageUrls: [
    APP.url + "/nice-movers-ras-al-khaimah-professional-moving-company.jpg",
  ],
});

const faqJsonLd = generateFAQSchema(faqs);

const page = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JsonLd }}
        strategy="beforeInteractive"
      />

      <Script
        id="faqs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <main className="md:mt-[120px] max-w-[1400px] mx-auto">
        <section id="hero-section" className="relative md:h-[550px] h-[580px]">
          <Image
            src={imageSrc}
            placeholder="blur"
            fill
            loading="eager"
            alt="Nice Movers UAE team carrying furniture outside a luxury villa in 
Ras Al Khaimah with a branded moving truck in the background"
            className="absolute object-cover object-center"
          />
          <div
            className="absolute md:pl-20 top-0 left-0 w-full h-full bg-black/50 flex md:items-center items-end justify-start"
            id="content"
          >
            <div className="bg-white/90 md:w-[550px] md:p-10 py-7 px-5 md:text-start text-center rounded-2xl">
              <h1 className="font-bold md:text-3xl text-2xl">
                Movers in Ras Al Khaimah –
                <Link href={"/"} className="b-red underline underline-offset-2">
                  {" "}
                  Reliable, ISO-Certified & Affordable
                </Link>
              </h1>
              <p className="mt-5 b-text md:text-base/5 text-sm">
                Looking for dependable movers in Ras Al Khaimah? Nice Movers UAE
                is an ISO 9001:2015 certified moving company with a local team
                ready to handle your home, villa, apartment, or office
                relocation across RAK.
              </p>
              <div className="flex gap-x-3 mt-5 w-full md:justify-start justify-center">
                <Button callBtn className="b-red-bg">
                  <Phone /> Call Now
                </Button>
                <Button quoteBtn className="b-red underline" variant={"link"}>
                  <ListTodoIcon /> Get A Quote
                </Button>
              </div>
              <div className="mt-8 flex items-center md:justify-end justify-between md:gap-x-5">
                <p className="flex items-center text-sm gap-x-1 b-text">
                  <Star width={18} height={18} className="text-amber-500" /> 5
                  Star Reviews
                </p>
                <Image
                  width={80}
                  height={80}
                  alt="Google Reviews Badge"
                  className="object-contain"
                  src={"/google-review-badge.png"}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-4xl md:px-0 px-3 mx-auto mt-20 md:text-xl text-base flex flex-col gap-y-2 b-text">
          <p>
            We cover every major neighbourhood in the emirate — from Al Hamra
            Village to Mina Al Arab — and offer same-day availability when you
            need to move on short notice.
          </p>
        </section>
        <section
          id="our-experties"
          className="mt-20 md:w-5xl mx-auto grid md:grid-cols-3 md:gap-10 gap-5 grid-cols-2 md:px-0 px-3"
        >
          <div className="flex items-center justify-center flex-col gap-y-3">
            <Timer
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Free Quote in 5 Minutes
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <Medal
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              15+ Years Expertise
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <ShieldCheckIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Licensed & Insured
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <AlarmCheckIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Fast, Alway On-Time
            </h3>
          </div>

          <div className="flex items-center justify-center flex-col gap-y-3">
            <UsersRoundIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              800+ Happy Reviews
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <Hammer
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Installations & Handyman
            </h3>
          </div>
        </section>
        <ContactSection
          dm
          title="Book Now — Movers in Ras Al Khaimah — Low Rates"
          desc={
            <>
              To book our movers and packers in ras al khaimah or anywhere in
              the UAE with us, kindly fill out the general inquiry form
              provided. <br />
              Subsequently, our booking manager will promptly reach out to you
              to as certain the specific requisites about your relocation.
            </>
          }
        />
        <section
          id="our-moving-expertise"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-3xl b-red font-bold text-center">
            Why Nice Movers Is the Right
            <br />
            Moving Company in Ras Al Khaimah
          </h2>
          <p className="md:text-lg b-text mt-6 max-w-5xl mx-auto text-center">
            Most moving companies in RAK look similar on paper. Here is what
            actually sets Nice Movers apart:
          </p>

          <div className="mt-20 md:w-11/12 gap-10 mx-auto grid md:grid-cols-3 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl b-text">{box.title}</h3>
                <p className="mt-3 text-sm b-text">{box.desc}</p>
                <div className="border-b-2 w-full mt-5 border-[#c00000]"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-20 " id="our-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#c00000] font-semibold tracking-wider uppercase text-sm mb-3 block">
                Expert Relocation
              </span>
              <h2 className="text-3xl md:text-4xl  font-bold text-[#c00000] mb-6 leading-tight">
                Our Moving Services in
                <br /> Ras Al Khaimah
              </h2>
              <p className="text-lg text-[#404040]/80 leading-relaxed">
                We provide a full range of movers and packers in Ras Al Khaimah
                services — residential and commercial. Choose what fits your
                situation.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]  flex flex-col group border border-gray-100"
                >
                  {/* Image Container with subtle zoom on hover */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover "
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#404040] mb-4 group-hover:text-[#c00000] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#404040]/70 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Optional Features List */}
                    {service.features && (
                      <ul className="space-y-3 mb-6 flex-grow">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2
                              className="w-5 h-5 text-[#c00000] mr-3 flex-shrink-0 mt-0.5"
                              strokeWidth={2}
                            />
                            <span className="text-sm text-[#404040]/80 leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Optional Footer Text (For items without bullet lists but extra paragraphs) */}
                    {!service.features && service.footerText && (
                      <p className="text-[#404040]/70 text-sm leading-relaxed mb-6 flex-grow">
                        {service.footerText}
                      </p>
                    )}

                    {/* Bottom push-down for layout consistency & Call to Action */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <a
                        href="tel:971563560017"
                        className="inline-flex items-center text-[#c00000] font-medium text-sm hover:text-[#404040] transition-colors duration-200"
                      >
                        Call for a Quote
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pt-10  ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#c00000] font-semibold tracking-wider uppercase text-sm mb-3 block">
                Service Network
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#404040] mb-6">
                Areas We Cover in Ras Al Khaimah
              </h2>
              <p className="text-lg text-[#404040]/80 leading-relaxed">
                Our packers and movers operate across the entire emirate. Below
                are the main residential and commercial zones we serve:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areasData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-gray-100 hover:border-[#c00000]/30 hover:shadow-[0_4px_20px_-4px_rgba(192,0,0,0.05)] transition-all duration-300 group"
                >
                  <div className="flex items-start">
                    <MapPin
                      className="w-5 h-5 text-[#c00000] mt-0.5 mr-3 flex-shrink-0"
                      strokeWidth={2}
                    />
                    <div>
                      <h4 className="font-semibold text-[#404040] mb-1">
                        Movers in {item.area}
                      </h4>
                      <p className="text-sm text-[#404040]/70 leading-relaxed">
                        {item.notes}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-12 text-center p-8 bg-[#fbfbfb] rounded-2xl border border-gray-100 max-w-4xl mx-auto">
              <p className="text-[#404040] text-lg">
                <span className="font-semibold text-[#c00000]">
                  Not on this list?
                </span>{" "}
                Call us — we cover all RAK areas, including remote and rural
                locations.
              </p>
            </div>
          </div>
        </section>
        <div className="-mt-28">
          <Process
            title={<>How a Move with Nice Movers Works</>}
            cus={[
              {
                title: "Step 1 — Free Quote",
                desc: "Call or WhatsApp us with your move details. We'll give you a clear price within the hour.",
              },
              {
                title: "Step 2 — Schedule Confirmation",
                desc: "Pick a date and time that works. Same-day and next-day slots are available.",
              },
              {
                title: "Step 3 — Pre-Move Survey (for larger moves)",
                desc: "Our team will assess the volume and logistics for villas or offices.",
              },
              {
                title: "Step 4 — Moving Day",
                desc: "We arrive on time with the right crew size and truck. Packing, loading, transport, unloading, and reassembly — all handled.",
              },
              {
                title: "Step 5 — Post-Move Check",
                desc: "Before we leave, you walk through the new space with us to confirm everything is in order.",
              },
            ]}
          />
        </div>
        <section
          className="b-red-bg mt-20 w-full grid md:grid-cols-2 md:gap-20 gap-10  items-center"
          id="affordable-movers-in-ras-al-khaimah"
        >
          <div id="content" className="md:pl-20 md:text-lg b-white pt-10 px-3">
            <h2 className="md:text-3xl text-2xl font-bold b-white">
              Affordable Movers and Packers in Ras Al Khaimah — Transparent
              Pricing
            </h2>
            <p className="mb-2 mt-3 text-sm">
              Pricing for moves in RAK depends on three things: the size of the
              move, the distance, and the services you need. We don&#39;t use
              vague estimates. Every quote from Nice Movers is itemised.
            </p>
            <h3 className="mt-3 font-bold">
              Typical price ranges (indicative):
            </h3>
            <ul className="mt-3 text-sm space-y-1">
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Studio / 1BHK apartment move within RAK: from AED 350–600
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>2BHK to 3BHK apartment move: from AED 600–1,000</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>Villa move (3–5 bedrooms): from AED 1,200–2,500</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Office relocation (small to medium): from AED 800–2,000+
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Inter-emirate move (RAK to Dubai): add AED 300–500 depending
                  on load
                </span>
              </li>
            </ul>

            <p className="text-sm mt-5">
              These are starting points. Your actual quote depends on your
              specific situation.
            </p>
          </div>
          <div
            id="image"
            className="relative md:h-[500px] h-[400px] bg-red-200"
          >
            <Image
              alt="1st Step of Moving: packing the items"
              src={"/Residential-Moving-UAE.jpg"}
              fill
              loading="lazy"
              className="absolute object-center object-cover"
            />
          </div>
        </section>
        <section className="max-w-4xl mx-auto md:px-0 px-3 mt-20">
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            About Nice Movers UAE — ISO Certified Since 2015
          </h2>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>
              Nice Movers is a licensed, ISO 9001:2015 certified moving company
              operating across all seven emirates of the UAE. We&#39;ve handled
              thousands of residential and commercial relocations since 2015,
              with branches in Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah,
              Abu Dhabi, and Al Ain.
            </p>

            <div className="border-t border-[#c00000] pt-5">
              <p>
                Our ISO certification is not a marketing badge. It means our
                quality management system — how we handle bookings, crew
                training, packing procedures, and damage claims — is
                independently audited and held to international standards. Very
                few movers in the UAE hold this certification.
              </p>
              <p className="mt-3 font-bold">Verified credentials:</p>
              <ul className="mt-3 space-y-1">
                <li>ISO 9001:2015 Certified</li>
                <li>Licensed moving company in UAE</li>
                <li> Fully trained and vetted crew</li>
                <li> Operating since 2015</li>
              </ul>
            </div>
          </div>

          <Button callBtn className="mt-8 b-red-bg" size={"lg"}>
            Call Sharjah Movers
          </Button>
        </section>
        <Testimoials />
        <FAQs faqs={faqs} />
        <CTA title="Ready to Move? Contact Nice Movers in Ras Al Khaimah" />
      </main>
    </>
  );
};

export default page;

import { CheckCircle2, ArrowRight } from "lucide-react";
import Process from "@/components/main/Process";
import Testimoials from "@/components/main/testimonials";
import { FAQs } from "@/components/main/FAQs";
import CTA from "@/components/main/CTA";
import {
  breadcrumbSchema,
  generateServiceSchema,
} from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";

// --- Data Structure (Keeps JSX clean) ---
const servicesData = [
  {
    id: 1,
    title: "House Shifting in Ras Al Khaimah",
    description:
      "House shifting is our most requested service in RAK, and for good reason: it requires planning, the right materials, and a team that actually cares about your belongings. We handle everything from the first box to the last shelf assembly.",
    features: [
      "Professional packing (bubble wrap, stretch film, cartons)",
      "Safe disassembly of beds, wardrobes, and large furniture",
      "Protective wrapping for TVs, mirrors, and fragile items",
      "Covered transport with load-securing straps",
      "Delivery and full reassembly at your new address",
    ],
    footerText:
      "Whether you're shifting a studio, a 2-bedroom apartment, or a 5-bedroom family home, the process is the same: we show up on time and finish the job properly.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Apartment Movers in Ras Al Khaimah",
    description:
      "Apartment moves in RAK come with their own set of logistics — narrow corridors, service lift bookings, building permit requirements. Our team handles all of it. We coordinate building access and elevator reservations in advance so there are no surprises on moving day.",
    features: [
      "Studio apartments",
      "1BHK and 2BHK units",
      "3-bedroom and larger family apartments",
      "Furnished and semi-furnished units",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Villa Movers in Ras Al Khaimah",
    description:
      "Villa moves are larger and more complex. There is more furniture, more outdoor equipment, and often more fragile items that need individual attention. Our villa moving service uses dedicated trucks sized for full-villa loads, and we assign senior crew members to every villa job.",
    footerText:
      "We regularly move from and to communities like Al Hamra Village, Mina Al Arab, Al Dhait, and Khuzam. Our crew knows the access rules and gate procedures for gated communities in RAK — no last-minute delays.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Office & Commercial Relocation",
    description:
      "Office moves need to happen fast. Every hour of downtime costs money, and a poorly managed relocation can set a business back by days. Our office movers in Ras Al Khaimah team specialises in minimising disruption.",
    features: [
      "IT equipment packed and labelled by our team",
      "Office furniture, cubicles, meeting room setups",
      "File cabinets, document boxes with numbered labelling",
      "After-hours and weekend moves to avoid downtime",
      "RAK Free Zone office relocations",
    ],
    footerText:
      "We've worked with businesses in RAK's main commercial zones and understand the access requirements of free zone facilities.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Furniture Moving in Ras Al Khaimah",
    description:
      "Need to move a few items — not a full home? Our furniture moving service in RAK handles single-room jobs, furniture deliveries, or individual pieces like sofas, dining sets, and wardrobes. No minimum-load requirement.",
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Inter-Emirate Moves",
    description:
      "Plenty of RAK residents are relocating to other emirates for work or lifestyle reasons. We handle inter-emirate moves as part of our standard service — no extra paperwork on your end. RAK to Dubai typically takes one day. RAK to Abu Dhabi is easily managed in a single trip.",
    image:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const content = [
  {
    title: "ISO 9001:2015 Certified",
    desc: "We are one of the few ISO-verified movers in the UAE. That certification means our processes are audited, documented, and held to a measurable standard.",
  },
  {
    title: "Full UAE network",
    desc: "If you're relocating from RAK to Dubai, Sharjah, Abu Dhabi, or anywhere else in the UAE, we handle inter-emirate moves without the usual complications.",
  },

  {
    title: "No hidden charges",
    desc: "Our quotes are itemised. What we quote is what you pay.",
  },
  {
    title: "Same-day moves available",
    desc: "Need to move today? Call before noon and we'll make it happen.",
  },
  {
    title: "Trained, vetted crew",
    desc: "Every team member goes through proper handling training before touching a single item.",
  },
  {
    title: "WhatsApp-first communication",
    desc: "Get updates, confirmations, and real-time tracking via WhatsApp throughout your move.",
  },
];

const areasData = [
  {
    area: "Al Hamra Village",
    notes: "Familiar with community access rules and villa layouts",
  },
  {
    area: "Mina Al Arab",
    notes: "Waterfront property specialists — careful with sea-facing units",
  },
  {
    area: "Al Marjan Island",
    notes: "High-rise and resort apartment experience",
  },
  {
    area: "Al Nakheel",
    notes: "Central RAK residential — fast response times",
  },
  {
    area: "Al Dhait",
    notes: "Popular villa community — large-team jobs handled",
  },
  { area: "Dafan Al Nakheel", notes: "Coastal zone coverage" },
  { area: "Khuzam", notes: "Established residential area, frequent moves" },
  { area: "Al Rams", notes: "Northern RAK coverage" },
  { area: "Al Jazeera", notes: "Island and coastal access" },
  { area: "Al Qusaidat", notes: "Industrial and residential mixed zone" },
  { area: "Al Kharran", notes: "Large villa properties handled" },
  { area: "Al Mairid", notes: "Traditional homes and coastal apartments" },
];
