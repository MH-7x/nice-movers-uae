import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  AlarmCheckIcon,
  Hammer,
  ListTodoIcon,
  Medal,
  Phone,
  ShieldCheckIcon,
  Star,
  Timer,
  UsersRoundIcon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import imageSrc from "../../../../public/professional-movers-in-ajman-nice-movers-uae.jpg";
import Process from "@/components/main/Process";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers in Ajman | Trusted Moving Company | Nice Movers UAE",
      desc: "Looking for professional movers in Ajman? Nice Movers UAE is ISO 9001:2015 certified, offering house shifting, villa & office relocation at affordable prices. Call now for a free quote.",
    },
    image: {
      path: "/professional-movers-in-ajman-nice-movers-uae.jpg",
      alt: "Nice Movers and Packers in Dubai",
    },
    path: "/movers-in-ajman",
  },
});

const faqs = [
  {
    question: "How much do movers in Ajman charge?",
    answer:
      "Pricing depends on the size of your move, distance, and required services. A standard 1-bedroom apartment shift in Ajman typically starts from AED 400–600. Villas and offices are priced after a survey. Contact us for an exact quote.",
  },
  {
    question: "How do I book movers and packers in Ajman?",
    answer:
      "Call or WhatsApp +971 563560017. We confirm availability, send you a written quote, and schedule your move. Booking takes less than five minutes.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes. We bring carton boxes, bubble wrap, stretch film, and furniture blankets on every job. You don't need to source anything.",
  },
  {
    question: "Can you move from Ajman to other Emirates?",
    answer:
      "Absolutely. We handle inter-emirate moves regularly — Ajman to Dubai, Ajman to Sharjah, Ajman to Abu Dhabi, and more, all in one booking.",
  },
  {
    question: "Do you offer same-day movers in Ajman?",
    answer:
      "Yes, subject to availability. Call us in the morning and we can usually mobilize a team the same day for smaller moves.",
  },
  {
    question: "Is my furniture insured during the move?",
    answer:
      "We offer optional insurance coverage for your belongings. Ask our team for details when you book.",
  },
  {
    question:
      "What makes Nice Movers different from other moving companies in Ajman?",
    answer:
      "ISO 9001:2015 certification, transparent pricing, trained crew, and a clear post-move quality check. Most moving companies in Ajman don't offer all four.",
  },
  {
    question: "Do you dismantle and reassemble furniture?",
    answer:
      "Yes. Our team disassembles beds, wardrobes, shelving units, and modular furniture, then reassembles everything at your new location.",
  },
];

const JsonLd = generateServiceSchema({
  serviceName: "Movers and Packers in Ajman",
  serviceDescription:
    "Trusted movers and packers in ajman. Nice Movers offers secure house, villa & office relocation, insured crews, same- day service & free on- site quotes.",
  serviceUrl: APP.url + "/movers-in-ajman",
  priceRange: "499 AED - 5000 AED",
  imageUrls: [APP.url + "/professional-movers-in-ajman-nice-movers-uae.jpg"],
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
                Movers in Ajman –
                <Link href={"/"} className="b-red underline underline-offset-2">
                  {" "}
                  ISO Certified & Affordable Moving Company
                </Link>
              </h1>
              <p className="mt-5 b-text md:text-base/5 text-sm">
                Need reliable movers in Ajman? Nice Movers UAE is a licensed,
                ISO 9001:2015 certified moving company with a dedicated branch
                in Ajman. We handle house shifting, villa relocation, office
                moves, and furniture moving — all at transparent, affordable
                rates.
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
        <section
          id="our-moving-experties"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-3xl b-red font-bold text-center">
            Why Choose Nice Movers <br /> Your Trusted Moving Company in Ajman
          </h2>
          <p className="md:text-lg b-text mt-6 max-w-5xl mx-auto text-center">
            A lot of people search for the cheapest option when planning a move
            in Ajman. That's fair. But cheap and unreliable are not the same
            thing — and with your furniture, valuables, and sometimes your whole
            home on the line, the difference matters.
          </p>
          <p className="md:text-lg b-text mt-2 max-w-5xl mx-auto text-center">
            Nice Movers is not the loudest name in the market. We've grown
            through referrals, repeat customers, and a track record of showing
            up on time with the right equipment. Here's what sets us apart:
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
        <section
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
          id="nice-movers-services"
        >
          <h2 className="md:text-4xl text-2xl font-bold text-center b-red max-w-2xl mx-auto">
            {" "}
            Movers and Packers in Ajman — Complete Relocation Services
          </h2>
          <p className="md:text-lg b-text mt-6 max-w-3xl mx-auto text-center">
            Whether you're moving a studio apartment or a full-floor commercial
            office, our team in Ajman handles every part of the process. You
            don't need to coordinate separate vendors for packing, transport,
            and installation — we cover it all under one booking.
          </p>
          <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {servicesList.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                id={service.title.split(" ").join("-")}
              >
                <div className="md:h-96 h-80 rounded-2xl overflow-hidden relative">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    className="absolute object-cover object-center"
                  />
                  <div className="b-red-grd z-10 absolute top-0 left-0 w-full h-full p-5 flex flex-col items-start justify-end">
                    <h3 className="text-xl b-red font-bold ">
                      {service.title}
                    </h3>
                    <p className="text-sm b-text mt-2 ">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section
          id="services-areas"
          className="max-w-4xl mx-auto md:px-0 px-3 mt-36"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Areas We Cover in Ajman
          </h2>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>Our team operates across the entire Ajman emirate, including:</p>

            <ul className="border-t border-[#c00000] pt-5">
              <ul>
                <li>
                  &rarr; Movers in Ajman City Centre and surrounding
                  neighbourhoods
                </li>
                <li>&rarr; Movers in Al Nuaimiya Ajman (1, 2, 3)</li>
                <li>&rarr; Movers in Al Rashidiya Ajman </li>
                <li>&rarr; Movers in Al Rumailah Ajman </li>
                <li>&rarr; Movers in Al Hamidiya Ajman </li>
                <li>&rarr; Movers in Ajman Industrial Area</li>
                <li>&rarr; Movers in Al Jurf Ajman</li>
                <li>&rarr; Movers in Al Tallah Ajman</li>
                <li>&rarr; Movers in Al Mwaihat Ajman</li>
                <li>&rarr; Movers in Emirates City and Ajman One towers</li>
              </ul>
            </ul>
          </div>
          <p className="mt-8 md:text-base text-sm b-text">
            We also handle moves from Ajman to Dubai, Sharjah, Abu Dhabi, RAK,
            and all other UAE emirates in a single booking.
          </p>
          <Button callBtn className="mt-8 b-red-bg" size={"lg"}>
            Call Ajman Movers
          </Button>
        </section>
        <div className="-mt-20">
          <Process
            title={<>How Our Moving Process Works in Ajman</>}
            cus={[
              {
                title: "Step 1 — Free Quote",
                desc: "Contact us by phone or WhatsApp. Tell us your move size, location, and preferred date. We give you a clear price — no estimate creep.",
              },
              {
                title: "Step 2 — Pre-Move Survey (for larger moves)",
                desc: "For villas and offices, our supervisor visits in advance. This avoids surprises on the day, especially for oversized items or access-restricted buildings.",
              },
              {
                title: "Step 3 — Packing Day",
                desc: "Our crew arrives on time with all packing materials. Every item is labelled and packed by category.",
              },
              {
                title: "Step 4 — Loading & Transport",
                desc: "We use covered, padded trucks designed for furniture transport. Your belongings are secured — not stacked — inside the vehicle.",
              },
              {
                title: "Step 5 — Unloading & Setup",
                desc: "At your new address, we unload, place furniture in the rooms you specify, and reassemble anything that was dismantled.",
              },
              {
                title: "Step 6 — Final Check",
                desc: "Before we leave, you walk through with our supervisor to confirm everything is where it should be and nothing was damaged.",
              },
            ]}
          />
        </div>
        <Testimoials />
        <section className=" py-16 sm:py-24 font-sans text-[#404040]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              {/* LEFT COLUMN: Pricing & Services */}
              <div className=" flex flex-col space-y-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-light text-gray-900 tracking-tight mb-4">
                    Affordable Movers in Ajman <br />
                    <span className="font-bold text-[#c00000]">
                      Transparent Pricing
                    </span>
                  </h2>
                  <p className=" opacity-90 max-w-5xl">
                    One of the biggest concerns when hiring packers and movers
                    in Ajman is cost — and we understand that. Our pricing
                    depends on three factors: the volume of your belongings, the
                    distance of the move, and any additional services like
                    storage or installation.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Included Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4">
                      What's included
                    </h3>
                    <ul className="space-y-3">
                      {INCLUDED_SERVICES.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <Check
                            className="text-[#c00000] shrink-0 mt-0.5"
                            size={18}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    <h3 className="font-semibold text-gray-900 text-lg mb-4">
                      Optional add-ons
                    </h3>
                    <ul className="space-y-3">
                      {OPTIONAL_SERVICES.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <Plus
                            className="text-gray-400 shrink-0 mt-0.5"
                            size={18}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-[#c00000] rounded-2xl p-8 text-white flex flex-col xl:flex-row items-center justify-between gap-6 shadow-lg shadow-red-900/10">
                  <div className="text-center xl:text-left">
                    <p className="font-medium text-lg">No hidden fees.</p>
                    <p className="text-white/80 text-sm mt-1">
                      What you approve is what appears on the invoice.
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 w-full xl:w-auto">
                    <a
                      href="tel:+971563560017"
                      className="flex-1 xl:flex-none flex items-center justify-center gap-2 bg-white text-[#c00000] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
                    >
                      <Phone size={16} /> Call
                    </a>
                    <a
                      href="https://wa.me/971563560017"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 xl:flex-none flex items-center justify-center gap-2 bg-[#a30000] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#8a0000] transition-colors border border-[#a30000]"
                    >
                      <MessageCircle size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Trust Signals */}
              <div className="mt-20">
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-gray-200/40 border border-gray-50 h-full">
                  <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 border-b border-gray-100 pb-6">
                    Trusted Movers in Ajman —{" "}
                    <span className="font-semibold">Why Choose Us</span>
                  </h2>

                  <div className="space-y-8 grid md:grid-cols-2 grid-cols-1 gap-5">
                    {TRUST_SIGNALS.map((signal, i) => {
                      const Icon = signal.icon;
                      return (
                        <div key={i} className="flex items-start gap-5 group">
                          <div className="bg-red-50 p-3.5 rounded-2xl text-[#c00000] shrink-0 group-hover:bg-[#c00000] group-hover:text-white transition-colors duration-300">
                            <Icon size={24} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {signal.title}
                            </h4>
                            <p className="text-[15px] leading-relaxed opacity-85">
                              {signal.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="-mt-28">
          <FAQs faqs={faqs} />
        </div>
        <CTA title="Ready to Move? Contact Nice Movers in Ajman" />
      </main>
    </>
  );
};

export default page;

const content = [
  {
    title: "ISO 9001:2015 Certified ",
    desc: "one of the few moving companies in Ajman that holds formal quality certification",
  },
  {
    title: "Licensed & Insured Crew ",
    desc: "every team member is trained, vetted, and covered by full insurance for your peace of mind",
  },
  {
    title: "Transparent Pricing",
    desc: "you get a written quote before we start; the number doesn't change",
  },
  {
    title: "Same-Day Moving Available ",
    desc: "urgent relocation? We can mobilize the same day across Ajman",
  },
  {
    title: "Professional Packing Materials",
    desc: " carton boxes, bubble wrap, stretch film, and furniture blankets used on every job",
  },
  {
    title: "Coverage Across All UAE Emirates",
    desc: " we move you within Ajman or to any other emirate without extra hassle",
  },
];

export const servicesList = [
  {
    title: "House Shifting in Ajman",
    desc: "Our most requested service. We pack every room systematically, dismantle furniture where needed, load with care, and reassemble everything at your new address. Apartments, villas, townhouses — we've done them all across Ajman's neighbourhoods.",
    src: "/House-Movers.jpg",
    alt: "Nice Movers house relocation for families.",
    link: "/house-shifting-services",
  },
  {
    title: "Villa Movers in Ajman",
    desc: "Large moves need a bigger crew, more trucks, and a clear plan. Villa relocations in Ajman involve heavy furniture, fragile décor, and often tight staircases or elevator constraints. Our supervisors conduct a pre-move survey to make sure nothing gets left to chance.",
    src: "/Villa-Movers.jpg",
    alt: "Nice Movers expert villa relocation services.",
    link: "/villa-movers-in-dubai",
  },
  {
    title: "Office Relocation in Ajman",
    desc: "Downtime costs money. Our office movers in Ajman work with your schedule — including evenings and weekends — to move desks, servers, filing cabinets, and equipment without disrupting your business operations.",
    src: "/Office-Moving.jpg",
    alt: "Nice Movers efficient office moving solutions.",
    link: "/office-movers-in-dubai",
  },

  {
    title: "Furniture Movers in Ajman",
    desc: "Moving a single sofa or a full bedroom set? Our furniture moving service in Ajman is available as a standalone booking. We dismantle, wrap, transport, and reinstall — all in one trip.",
    src: "/local-moving.jpg",
    alt: "Nice Movers fast local moving services.",
    link: "/",
  },

  {
    title: "Packing and Unpacking Services",
    desc: "Packing takes longer than most people expect. Our packers and movers in Ajman bring all the materials and handle the entire process, room by room. We label every box so unpacking at the other end is straightforward.",
    src: "/Cheap-Moving.jpg",
    alt: "Nice Movers low-cost moving solutions.",
    link: "/",
  },

  {
    title: "Storage Services",
    desc: "Between moves or during a renovation? We offer secure short- and long-term storage for household items and business inventory. Your belongings stay in a climate-appropriate, monitored facility until you're ready.",
    src: "/Storage-Services.jpg",
    alt: "Nice Movers secure storage facilities.",
    link: "/",
  },
];

import {
  Check,
  Plus,
  MessageCircle,
  Award,
  ShieldCheck,
  Users,
  Truck,
  CalendarDays,
} from "lucide-react";
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

// --- DATA: Separating content from UI keeps the code clean and maintainable ---

const INCLUDED_SERVICES = [
  "Labour (loading and unloading crew)",
  "Transportation (covered truck appropriate to job size)",
  "Basic packing materials",
];

const OPTIONAL_SERVICES = [
  "Full packing and unpacking service",
  "Furniture dismantling and reassembly",
  "Storage (short or long term)",
  "AC removal and reinstallation",
  "Handyman and installation services",
];

const TRUST_SIGNALS = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description:
      "Nice Movers holds ISO certification for quality management — a standard most moving companies in the UAE do not meet. It means our processes are independently verified, not just self-proclaimed.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed UAE Moving Company",
    description:
      "We operate under a valid UAE trade license. You're protected legally when you hire us.",
  },
  {
    icon: Users,
    title: "Experienced, Trained Crew",
    description:
      "Our movers aren't casual labor. They are trained in lifting techniques, furniture handling, and fragile-item packing. Every team lead has completed professional relocation training.",
  },
  {
    icon: Truck,
    title: "Thousands of Moves Completed",
    description:
      "Since 2015, Nice Movers has handled thousands of relocations across all seven UAE emirates. Ajman customers have trusted us with everything from studio apartments to large commercial offices.",
  },
  {
    icon: CalendarDays,
    title: "Available 7 Days a Week",
    description:
      "Moves don't always land on a weekday. We operate every day, including public holidays, to work around your schedule.",
  },
];
