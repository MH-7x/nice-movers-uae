import { Button } from "@/components/ui/button";
import imageSrc from "../../../../public/dubai/nice-movers-and-packers-in-dubai.jpg";
import {
  AlarmCheckIcon,
  Archive,
  ArrowRight,
  Building2,
  Check,
  CheckCircle,
  Gem,
  Hammer,
  Home,
  ListTodoIcon,
  Medal,
  Phone,
  ShieldCheckIcon,
  Star,
  Timer,
  UsersRoundIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import ContactSection from "@/components/main/ContactSection";
import ServiceContent from "@/components/main/ServiceContent";
import Testimoials from "@/components/main/testimonials";
import { FAQs } from "@/components/main/FAQs";
import Process from "@/components/main/Process";
import CTA from "@/components/main/CTA";
import {
  breadcrumbSchema,
  generateServiceSchema,
} from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";

type Feature = {
  title: string;
  desc: string;
};

const faqs = [
  {
    question: "How much do movers and packers in Dubai cost?",
    answer:
      "Pricing depends on move size, distance, and services. Our cheap movers and packers in Dubai start at competitive rates with no hidden fees. Get a free quote within 5 minutes—call +971 563560017.",
  },
  {
    question: "Are your movers and packers in Dubai licensed?",
    answer:
      "Yes! We hold all required UAE Ministry of Economy licenses and full insurance coverage. Check our certifications on request.",
  },
  {
    question: "Do you offer villa movers and packers in Dubai?",
    answer:
      "Absolutely. Our villa movers in Dubai team specializes in residential moves—apartments, townhouses, villas, and furnished properties.",
  },
  {
    question: "Can you move office equipment and furniture?",
    answer:
      "Yes. Our office movers in Dubai handle corporate relocations, IT equipment, bulk furniture, and sensitive items with professional precision.",
  },
  {
    question: "What areas in Dubai do you cover?",
    answer:
      "We cover all of Dubai (Downtown, Marina, JBR, Deira, Bur Dubai, Palm, etc.) and nationwide across the UAE.",
  },
  {
    question: "Do you offer same-day or emergency moving services?",
    answer:
      "Yes! Our movers and packers operate 7 days a week with same-day and overnight options available.",
  },
  {
    question: "Is your moving insurance comprehensive?",
    answer:
      "Yes. All moves include full all-risk insurance. Coverage is transparent and included in the final quote.",
  },
  {
    question: "Can you provide packing materials and handle fragile items?",
    answer:
      "Yes. We provide premium packing materials and specialize in careful handling of fragile items, art, antiques, and valuables.",
  },
  {
    question: "How do I get a quote for house shifting in Dubai?",
    answer:
      "Call +971 563560017, WhatsApp for instant details, or use our online form for a free quote within 5 minutes.",
  },
];

type Service = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: Feature[];
  idealFor?: string[];
  cta?: string;
  img: string;
};

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers in Dubai | Affordable & Fast | Nice Movers",
      desc: "Professional movers and packers in Dubai with 15+ years experience. Licensed, insured, and ISO certified. Affordable residential, office, and villa moving services. Book now!",
    },
    image: {
      path: "/dubai/nice-movers-and-packers-in-dubai.jpg",
      alt: "Nice Movers and Packers in Dubai",
    },
    path: "/movers-and-packers-in-dubai",
  },
});

const JsonLd = generateServiceSchema({
  serviceName: "Movers and Packers in Dubai",
  serviceDescription:
    "Trusted movers and packers in Dubai. Nice Movers offers secure house, villa & office relocation, insured crews, same- day service & free on- site quotes.",
  serviceUrl: APP.url + "/movers-and-packers-in-dubai",
  priceRange: "499 AED - 5000 AED",
  imageUrls: [APP.url + "/dubai/nice-movers-and-packers-in-dubai.jpg"],
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
            alt="Nice Movers and Packers in Dubai – Professional, Affordable, Trusted Since 2015"
            className="absolute object-cover object-center"
          />
          <div
            className="absolute md:pl-20 top-0 left-0 w-full h-full bg-black/50 flex md:items-center items-end justify-start"
            id="content"
          >
            <div className="bg-white/90 md:w-[550px] md:p-10 py-7 px-5 md:text-start text-center rounded-2xl">
              <h1 className="font-bold md:text-3xl text-2xl">
                Movers and Packers in Dubai –
                <Link href={"/"} className="b-red underline underline-offset-2">
                  {" "}
                  Professional, Affordable, Trusted Since 2015
                </Link>
              </h1>
              <p className="mt-5 b-text md:text-base/5 text-sm">
                As leading movers and packers Dubai, Nice Movers UAE provides
                secure, efficient relocation services for homes, villas, and
                offices.
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
          title="Book Now — Movers and Packers in Dubai — Low Rates"
          desc={
            <>
              To book our movers and packers in dubai or anywhere in the UAE
              with us, kindly fill out the general inquiry form provided. <br />
              Subsequently, our booking manager will promptly reach out to you
              to ascertain the specific requisites about your relocation.
            </>
          }
        />
        <ServiceContent
          title="Why Choose Movers and Packers in Dubai from Nice Movers?"
          desc={
            <>
              <p>
                When searching for movers and packers in Dubai, you need a
                company that combines reliability, affordability, and expertise.
                Since 2015, Nice Movers has been the trusted name for residents
                and businesses across Dubai and the entire UAE. We&apos;re not
                just another moving company in Dubai—we&apos;re your partners in
                seamless relocation.
              </p>
              <p>
                Our movers and packers Dubai team has successfully relocated
                over 800+ customers with a 4.9★ rating. Whether you&apos;re
                moving a studio apartment, luxury villa, or entire office, we
                handle every detail with professional precision and care.
              </p>
            </>
          }
        />

        <section id="why-choose-us" className="w-11/12 mt-36 mx-auto">
          <h2 className="md:text-4xl text-2xl font-bold b-red text-center ">
            What Sets Our Movers and Packers in Dubai Apart
          </h2>
          <p className="md:text-lg text-center b-text max-w-2xl mx-auto mt-3">
            Our teams will treat your possessions like they would their own,
            ensuring that the greatest care and diligence is taken.
          </p>
          <div className="md:w-11/12 w-full mt-10 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10">
            {[
              {
                title: "Licensed & Fully Insured",
                desc: "We hold all required UAE Ministry of Economy licenses for moving services in Dubai and comprehensive insurance coverage for your belongings. Every item transported is protected—giving you complete peace of mind.",
              },
              {
                title: "ISO 9001:2015 Certified & FAIM Accredited",
                desc: "Our removal company in Dubai processes meet international quality standards. We&apos;re FAIM-accredited (the moving industry&apos;s gold standard), ensuring professional handling that competitors can&apos;t match.",
              },
              {
                title: "15+ Years of Moving Expertise",
                desc: "Since 2015, we&apos;ve perfected the art of residential and commercial moving in Dubai. Our crews are rigorously trained, equipped with premium materials, and proven to deliver stress-free relocations—every single time.",
              },
              {
                title: "Nationwide Coverage – All Emirates, No Extra Charge",
                desc: "Operating branches across Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, and beyond, our movers in Dubai network ensures coverage anywhere in the UAE. Same rates whether you&apos;re moving within Dubai or across emirates.",
              },
              {
                title: "Transparent, No Hidden Fees",
                desc: "Our pricing for affordable movers and packers in Dubai is 100% inclusive: fuel, materials, labor, insurance. What you see is what you pay—no surprises, no hidden costs.",
              },
              {
                title: "5-Minute Response, 7-Days-a-Week Service",
                desc: "Need to move this weekend? Public holiday? Late night? Our cheap movers and packers in Dubai team is always ready. Emergency relocations, same-day services, and overnight transport available year-round.",
              },
            ].map((item, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl">
                <h3 className="text-xl">{item.title}</h3>
                <div className="b-text mt-3">
                  <p>{item.desc}</p>{" "}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="our-services" className=" py-24 sm:py-32 overflow-hidden ">
          <SectionHeader />

          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col gap-24 ">
            {servicesData.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>
        <section
          className="b-red-bg w-full grid md:grid-cols-2 md:gap-20 gap-10  items-center"
          id="house-shifting-process"
        >
          <div id="content" className="md:pl-20 md:text-lg b-white pt-10 px-3">
            <h2 className="md:text-3xl text-2xl font-bold b-white">
              Affordable Movers and Packers in Dubai – Competitive Pricing
            </h2>
            <p className="mb-2 mt-3 text-sm">
              We believe professional relocation shouldn&apos;t break the bank.
              That&apos;s why we offer:
            </p>
            <ul className="mt-3 text-sm space-y-1">
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>No hidden fees – transparent, all-inclusive quotes</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Competitive rates – typically 15-20% lower than competitors
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Flexible packages – partial packing, full service, or
                  labor-only options
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Seasonal discounts – special rates for off-peak moves
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Loyalty discounts – referral bonuses, repeat customer rates
                </span>
              </li>
            </ul>
            <h3 className="mt-3">How We Keep Costs Down:</h3>
            <p className="text-sm">
              We&apos;ve optimized routes, trained crews for efficiency, and
              built strong supplier relationships. These savings pass directly
              to you—affordable moving without sacrificing quality.
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
        <div className="-mt-20">
          <Process title="Our Professional Moving Process" />
        </div>
        <CoverageAreas />
        <Testimoials />

        <div className="-mt-10">
          <FAQs faqs={faqs} />
        </div>
        <CTA title="Ready to Move? Contact Nice Movers Today" />
      </main>
    </>
  );
};

export default page;

const ServiceRow = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const Icon = service.icon;

  return (
    <div
      id={service.id}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
    >
      {/* Image Column */}
      <div className="w-full lg:w-1/2">
        <div className="aspect-square  bg-white rounded-[2rem] relative overflow-hidden">
          <Image
            src={service.img}
            alt={service.title}
            fill
            className="object-center object-cover"
          />
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="md:text-3xl text-2xl mb-3 font-semibold text-[#404040] tracking-tight">
          {service.title}
        </h3>

        <p className=" text-[#404040]/80 mb-8">{service.description}</p>

        {/* Features List */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mb-5">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#c00000]/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#c00000]" strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-semibold text-[#404040] text-base">
                  {feature.title}
                </h4>
                <p className="text-[#404040]/70 text-sm leading-relaxed mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ideal For (Optional) */}
        {service.idealFor && (
          <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#404040] mb-4">
              Perfect For
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.idealFor.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#404040]/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c00000]/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA (Optional) */}
        {service.cta && (
          <div className="pt-4 mt-auto">
            <a
              href="tel:+971563560017"
              className="group inline-flex items-center gap-3 bg-white border border-[#404040]/10 hover:border-[#c00000] hover:shadow-lg hover:shadow-[#c00000]/10 text-[#404040] hover:text-[#c00000] px-6 py-4 rounded-xl font-medium transition-all duration-300"
            >
              <Phone size={18} className="text-[#c00000]" />
              <span>{service.cta}</span>
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-24 px-6">
    <span className="inline-block py-1 px-3 rounded-full bg-[#c00000]/10 text-[#c00000] text-sm font-semibold tracking-wider uppercase mb-4">
      Premium Services
    </span>
    <h2 className="md:text-4xl text-3xl font-light text-[#404040] tracking-tight mb-6">
      Our Professional <br />
      <span className="font-semibold text-[#c00000]">Moving Services</span> in
      Dubai
    </h2>
    <p className="text-lg text-[#404040]/70 leading-relaxed">
      Delivering seamless, stress-free relocations tailored to your exact needs.
      Experience the standard of excellence.
    </p>
  </div>
);

const servicesData = [
  {
    id: "residential",
    title: "Residential Moving Services",
    img: "/dubai/nice-movers-smart-packing-fragile-items-wrap.jpg",
    description:
      "Relocating your home in Dubai? Our house movers Dubai and villa movers in Dubai specialists handle every aspect with care.",
    icon: Home,
    features: [
      {
        title: "Smart Packing",
        desc: "High-quality materials, fragile item protection, and expert wrapping.",
      },
      {
        title: "Furniture Handling",
        desc: "Careful disassembly, transport, and expert reassembly.",
      },
      {
        title: "Secure Transport",
        desc: "Climate-controlled vehicles, professional loading techniques.",
      },
      {
        title: "Full Setup",
        desc: "We unload, unpack, and position furniture to your exact specifications.",
      },
    ],
    idealFor: [
      "Apartment-to-apartment moves",
      "House shifting in Dubai (villas, townhouses)",
      "Owner-occupied and furnished properties",
      "Home shifting services with storage options",
    ],
    cta: "Book Your Home Move: Call +971 563560017 or WhatsApp",
  },
  {
    id: "commercial",
    title: "Commercial & Office Moving",
    img: "/dubai/nice-movers-office-server-it-equipment-transport.jpg",
    description:
      "Moving your business? Our office movers in Dubai bring professional efficiency to corporate relocations.",
    icon: Building2,
    features: [
      {
        title: "Minimal Downtime",
        desc: "We schedule moves around your business hours for zero disruption.",
      },
      {
        title: "Sensitive Equipment",
        desc: "Servers, IT equipment, confidential files—all handled with precision.",
      },
      {
        title: "Bulk Fixtures",
        desc: "Modular systems, storage solutions, complete office setups.",
      },
      {
        title: "Post-Move Setup",
        desc: "Quick reassembly to get your team productive immediately.",
      },
    ],
    idealFor: [
      "Office relocations",
      "Retail shop moves",
      "Warehouse & logistics moves",
      "Multi-location corporate relocations",
    ],
    cta: "Business Moving Quote: +971 563560017",
  },
  {
    id: "villa",
    title: "Villa & Luxury Property Moves",
    img: "/dubai/nice-movers-luxury-white-glove-furniture-service.jpg",
    description:
      "Relocating a villa or high-value property in Dubai? Our team specializes in premium, careful service.",
    icon: Gem,
    features: [
      {
        title: "White-Glove Service",
        desc: "Premium handling for high-end furnishings and décor.",
      },
      {
        title: "Outdoor Setup",
        desc: "Plants, landscaping materials, and outdoor furniture relocation.",
      },
      {
        title: "Advanced Planning",
        desc: "Custom packing, route planning, and secure delivery.",
      },
      {
        title: "Full Coverage",
        desc: "Insurance and guarantees for valuables and luxury items.",
      },
    ],
  },
  {
    id: "storage",
    title: "Secure Storage Solutions",
    img: "/dubai/nice-movers-climate-storage-facility-secure.jpg",
    description:
      "Need temporary storage? Our comprehensive moving services include flexible, secure storage facilities.",
    icon: Archive,
    features: [
      {
        title: "Flexible Terms",
        desc: "Short-term & long-term storage options available.",
      },
      {
        title: "Climate Control",
        desc: "Temperature-regulated facilities to protect sensitive items.",
      },
      {
        title: "Maximum Security",
        desc: "Secure, fully insured warehouse space.",
      },
      {
        title: "Custom Rentals",
        desc: "Flexible rental periods by the days, weeks, or months.",
      },
    ],
  },
];

const CoverageAreas: React.FC = () => {
  const dubaiAreas = [
    "Downtown Dubai",
    "Dubai Marina",
    "Jumeirah",
    "Deira",
    "Bur Dubai",
    "Business Bay",
    "JBR",
    "Palm Jumeirah",
    "Arabian Ranches",
    "Springs",
    "Emirates Hills",
    "Meadows",
    "Lakeside",
    "Sports City",
    "DIFC",
  ];

  const uaeAreas = [
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-10 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-3 tracking-tight">
          Serving Dubai & Across the UAE
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto rounded-full opacity-80"></div>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-16">
        {}
        {/* Dubai Section */}
        <div className="bg-white md:col-span-3 col-span-1 rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-medium text-gray-800 mb-6 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
            Dubai Coverage Areas
          </h3>
          <div className="flex flex-wrap gap-2">
            {}
            {dubaiAreas.map((area, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full"
              >
                Movers in {area}
              </span>
            ))}
          </div>
        </div>

        {}
        {/* UAE Wide Section */}
        <div className="bg-white md:col-span-2 col-span-1 rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl font-medium text-gray-800 mb-6 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">
            UAE Wide
          </h3>
          <div className="flex flex-wrap gap-2">
            {}
            {uaeAreas.map((area, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded-full "
              >
                Movers in {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
