import Image from "next/image";
import imageSrc from "../../../../../public/sharjah/sharjah-movers-hero-banner.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ListTodoIcon, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Metadata } from "next";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import ContactSection from "@/components/main/ContactSection";
import ServicesLong from "@/components/main/ServicesLong";
import Process from "@/components/main/Process";
import Locations from "@/components/main/Locations";
import { reviews } from "@/components/main/testimonials";
import ReviewCard from "@/components/ReviewCard";
import { FAQs } from "@/components/main/FAQs";
import { breadcrumbFor, generateServiceSchema } from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { sharjahPageFaqs } from "../../../../../List";
import CTA from "@/components/main/CTA";
import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/main/RelatedLinks";

const faqs = [
  {
    question: "How much does moving with Nice Movers cost?",
    answer: (
      <>
        <p>
          Our{" "}
          <Link href={"/movers-and-packers-sharjah"}>
            {" "}
            local moves in Sharjah
          </Link>{" "}
          start around AED 499. The exact price depends on the size of your home
          or office and the services needed. We provide a detailed quote upfront
          (including packing materials, labor, and transport) so there are no
          hidden fees.
        </p>
      </>
    ),
  },
  {
    question: "Are you licensed and insured?",
    answer: (
      <>
        <p>
          Yes. Nice Movers is fully licensed in the UAE (MOE-approved) and every
          move is fully insured. We are ISO 9001:2015 certified, which means we follow strict international safety and quality standards
          throughout the moving process.
        </p>
      </>
    ),
  },
  {
    question: "Do you pack fragile items?",
    answer: (
      <>
        <p>
          Absolutely. We specialize in packing and moving delicate items like
          glassware, artwork, antiques, and electronics. Our team uses premium
          packing materials and techniques to protect your valuables during
          transit.
        </p>
      </>
    ),
  },
  {
    question: "Which areas of Sharjah do you serve?",
    answer: (
      <>
        <p>
          We cover all areas of Sharjah and nearby regions, including Al Nahda,
          Sharjah Industrial Area, Al Majaz, and much more. Our local experts
          know the city routes and regulations, ensuring a smooth move no matter
          where in Sharjah you are located.
        </p>
      </>
    ),
  },
  {
    question: "How do I schedule my move?",
    answer: (
      <>
        <p>
          You can call or WhatsApp us at +971563560017 to request a free
          quote. We&#39;ll arrange a convenient time for an
          on-site survey, plan your move, and lock in a date. You can also{" "}
          <Link href={"/contact-us"}>contact us online</Link> for a quick
          booking.
        </p>
      </>
    ),
  },
  {
    question: "How quickly can you move me?",
    answer: (
      <>
        <p>
          Our scheduling is very flexible. For last-minute needs, ask about our
          same-day service. Otherwise, we recommend booking a few days ahead.
          Our teams are ready 7 days a week, including weekends and nights.
        </p>
      </>
    ),
  },
  {
    question: "How do I get a quote?",
    answer: (
      <>
        <p>
          <Link href={"tel:+971563560017"}>Give us a call</Link> or{" "}
          <Link href={"https://wa.me/971563560017?text=I%20Need%20Movers"}>
            WhatsApp us
          </Link>{" "}
          at +971563560017. We&#39;ll set up a free on-site survey and provide an
          accurate, no-obligation quote.
        </p>
        <p>
          For reliable service, count on Nice Movers — one of the most
          recommended movers and packers Sharjah locals trust. We bring
          nationwide standards right to Sharjah&#39;s doorstep, so you get
          top-quality moving help close to home.
        </p>
      </>
    ),
  },
];

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Movers and Packers Sharjah — Nice Movers UAE | Free Quote",
      desc: "Trusted movers and packers in Sharjah. Nice Movers offers secure house, villa & office relocation, insured crews, same-day service & free on-site quotes.",
    },
    image: {
      path: "/sharjah/moving-truck-sharjah-3.jpg",
      alt: "Nice Movers branded moving truck in a Sharjah residential area",
    },
    path: "/movers-and-packers-sharjah",
  },
});

const content = [
  {
    title: "Local Moving Experts",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          As Sharjah movers and packers, our team knows every neighborhood— from
          Al Majaz to Al Nahda.
        </p>
        <p className="mt-1 text-sm b-text">
          We navigate narrow staircases, tight parking, and local regulations
          efficiently.
        </p>
      </>
    ),
  },
  {
    title: "Licensed & Insured",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          We hold all UAE moving licenses (MoE) and include full insurance with
          every job, giving you peace of mind. You can trust us for your move in
          Sharjah or anywhere in the UAE.
        </p>
      </>
    ),
  },
  {
    title: "Professional & Trusted",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          Backed by years of experience since 2015, our crews are rigorously
          trained and equipped.
        </p>
        <p className="mt-1 text-sm b-text">
          Customers say we are “consistently professional… punctual… great
          communication.
        </p>
      </>
    ),
  },
  {
    title: "All-in-One Service",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          We handle it all: packing, disassembling, transport, unloading and
          unpacking. Special items (pianos, art, safes) get the extra attention
          they need.
        </p>
      </>
    ),
  },
  {
    title: "Flexible Scheduling",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          Need a last-minute move? We offer same-day moving options and work 7
          days a week, even nights and holidays
        </p>
      </>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          We provide clear quotes upfront. Our rates start from AED 499, fully
          inclusive of fuel and materials, so there are no surprises.
        </p>
      </>
    ),
  },
  {
    title: "Sharjah Coverage",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          We serve every neighborhood in Sharjah. Our Sharjah branch covers Al
          Nahda, Industrial Area, Al Majaz and more.
        </p>
      </>
    ),
  },
];

const WHATSAPP_SHARJAH =
  "https://wa.me/971563560017?text=I%20need%20movers%20in%20Sharjah";

const sharjahAreas = [
  "Al Nahda",
  "Al Majaz",
  "Al Taawun",
  "Al Khan",
  "Al Qasimia",
  "Muwaileh",
  "University City",
  "Aljada",
  "Al Mamzar border",
  "Industrial Areas",
];

const serviceJsonLd = generateServiceSchema({
  serviceName: "Movers and Packers in Sharjah",
  serviceDescription:
    "Trusted movers and packers in Sharjah. Nice Movers offers secure house, villa & office relocation, insured crews, same-day service & free on-site quotes.",
  serviceUrl: APP.url + "/movers-and-packers-sharjah",
  priceRange: "499 AED - 5000 AED",
  imageUrls: [APP.url + "/sharjah/moving-truck-sharjah-3.jpg"],
  areaServed: [
    "Sharjah",
    "Al Nahda",
    "Al Majaz",
    "Al Taawun",
    "Al Khan",
    "Al Qasimia",
    "Muwaileh",
    "University City",
    "Aljada",
    "Sharjah Industrial Area",
  ],
});

const faqJsonLd = generateFAQSchema(sharjahPageFaqs);

export default function SharjahPage() {
  return (
    <>
      <JsonLd id="service-schema" data={serviceJsonLd} />
      <JsonLd id="faqs-schema" data={faqJsonLd} />
      <JsonLd
        id="breadcrumb-schema"
        data={breadcrumbFor(
          "Movers and Packers in Sharjah",
          "/movers-and-packers-sharjah"
        )}
      />

      <main className="md:mt-[120px] max-w-[1400px] mx-auto">
        <section id="hero-section" className="relative md:h-[550px] h-[580px]">
          <Image
            src={imageSrc}
            placeholder="blur"
            fill
            priority
            sizes="100vw"
            alt="Professional movers in Sharjah loading a branded moving truck with skyline in background"
            className="absolute object-cover object-center"
          />
          <div
            className="absolute md:pl-20 top-0 left-0 w-full h-full bg-black/50 flex md:items-center items-end justify-start"
            id="content"
          >
            <div className="bg-white/90 md:w-[550px] md:p-10 py-7 px-5 md:text-start text-center rounded-2xl">
              <h1 className="font-bold md:text-3xl text-2xl">
                Movers and Packers in Sharjah{" "}
                <span className="b-red underline underline-offset-2">
                  {" "}
                  Trusted Local Moving Company
                </span>
              </h1>
              <p className="mt-5 b-text md:text-base/5 text-sm">
                As leading movers and packers Sharjah, Nice Movers UAE provides
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
        <section className="max-w-4xl md:px-0 px-3 mx-auto mt-20 md:text-xl text-base flex flex-col gap-y-2 b-text">
          <p>
            Whether you&#39;re moving a house, apartment, or large villa, our
            experienced team handles every detail—from premium packing to safe
            transport—with care and precision.
          </p>
          <p>
            We understand Sharjah&#39;s unique moving challenges (from traffic
            to parking), so we plan each move carefully to make it smooth and
            stress-free.
          </p>
          <p>
            Nice Movers is fully licensed and insured, with ISO 9001:2015
            certification. Our trained crew treats your possessions as if they
            were our own, ensuring the greatest care.
          </p>
        </section>
        <ContactSection
          title="Book Now — Movers and Packers in Sharjah"
          desc={
            <>
              We believe in transparent pricing: local moves start from just AED
              499, with no hidden fees. <br /> Ready to move? Fill out the quote
              form, or Call Now: +971 56 356 0017 or WhatsApp Us for a
              free quote today!
            </>
          }
        />

        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold text-center">
            Why Choose Nice Movers in Sharjah?
          </h2>
          <p className="md:text-lg b-text mt-3 max-w-2xl mx-auto text-center">
            Choosing Nice Movers means placing your trust in a fully licensed,
            insured, and professionally vetted team.
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-3 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl font-medium b-text">{box.title}</h3>
                {box.desc}
                <div className="border-b-2 w-full mt-5 border-[#c00000]"></div>
              </div>
            ))}
          </div>
        </section>
        <ServicesLong />
        <section
          id="areas-we-serve-in-sharjah"
          className="max-w-4xl mx-auto md:px-0 px-3 mt-20"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Areas We Serve in Sharjah
          </h2>
          <ul className="mt-8 grid md:grid-cols-3 grid-cols-2 gap-3 border-t border-[#c00000] pt-5 md:text-lg text-sm b-text">
            {sharjahAreas.map((area) => (
              <li key={area} className="flex items-center gap-x-2">
                <MapPin className="text-[#c00000] shrink-0" size={18} />
                Movers in {area}
              </li>
            ))}
          </ul>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>
              Most residential towers in Sharjah ask for a move-in or move-out
              approval from building management, and many require a
              service-lift booking. We plan your moving date around both, so
              the crew is not kept waiting at the entrance.
            </p>
            <p>
              Moves between Sharjah and Dubai depend heavily on rush-hour
              traffic, so we usually load early in the morning or outside peak
              hours. Older low-rise buildings in areas such as Al Qasimia can
              have limited parking or small lifts, which we check before giving
              you a quote.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button callBtn className="b-red-bg" size={"lg"}>
              <Phone /> Call Sharjah Movers
            </Button>
            <Link
              href={WHATSAPP_SHARJAH}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Nice Movers in Sharjah"
            >
              <Button variant={"outline"} size={"lg"} className="b-red">
                <MessageCircle /> WhatsApp Sharjah Movers
              </Button>
            </Link>
          </div>
        </section>
        <Process
          title="Our Simple 4-Step Moving Process"
          cus={[
            {
              title: "Free Quote & Survey",
              desc: " Contact us to schedule a free on-site survey. We assess your needs and provide a detailed quote",
            },
            {
              title: "Planning & Packing",
              desc: "After you approve the plan, our professionals arrive on time with high-quality packing supplies. They carefully pack and load your items",
            },
            {
              title: "Safe Transport",
              desc: "We transport your belongings using modern, fully-equipped moving trucks. Our drivers follow the best routes through Sharjah to ensure timely delivery.",
            },
            {
              title: "Unloading & Setup",
              desc: "We unload and place your items where you want them. Furniture is reassembled, boxes unpacked, and a final walkthrough ensures you're 100% satisfied.",
            },
          ]}
        />
        <Locations
          title="Transparent Pricing from AED 499"
          desc={
            <>
              <p>
                At Nice Movers, we believe in clear, honest pricing. Our basic
                moving services start from AED 499 for Sharjah moves.
              </p>
              <p>
                This base rate covers local relocations; the final cost depends
                on the size of your move and any extra services.
              </p>
              <p>
                We always provide a detailed, fixed quote upfront, covering
                labor, fuel, and materials, so you never face hidden charges.
              </p>
            </>
          }
          id="Our-pricing"
          img={{
            src: "/sharjah/moving-truck-sharjah-3.jpg",
            alt: "Nice Movers branded moving truck parked in a Sharjah residential area",
          }}
        />
        <section className="max-w-4xl mx-auto md:px-0 px-3 md:mt-56 mt-96">
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Licensed, Insured & Safety Standards
          </h2>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>
              Your safety and security are paramount. Nice Movers is fully
              licensed by the UAE authorities (MoE) and every job comes with
              full insurance.
            </p>

            <div className="border-t border-[#c00000] pt-5">
              <p>
                Our ISO 9001:2015 certification means our quality management
                processes are independently audited, and we follow them on every
                job.
              </p>
              <p>
                All moving crews are trained in proper handling techniques and
                our fleet is regularly maintained for safe operation.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button callBtn className="b-red-bg" size={"lg"}>
              Call Sharjah Movers
            </Button>
            <Link
              href={WHATSAPP_SHARJAH}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Nice Movers in Sharjah"
            >
              <Button variant={"outline"} size={"lg"} className="b-red">
                <MessageCircle /> WhatsApp Us
              </Button>
            </Link>
          </div>
        </section>
        <section className="mt-36 min-h-96 b-red-bg md:px-0 px-3 md:pb-0 pb-10">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10">
            <div className="md:h-96 md:order-1 order-2 h-80 bg-white rounded-xl md:mr-20 relative overflow-hidden md:mt-20">
              <Image
                src={"/sharjah/happy-customer-movers-sharjah.jpg"}
                alt="Happy customer shaking hands with a professional mover in Sharjah"
                fill
                sizes="(min-width:768px) 50vw, 100vw"
                className="object-center object-cover"
              />
            </div>
            <div className="md:pr-20 md:-mt-20 pt-10 md:order-2 order-1">
              <h2 className="md:text-3xl text-2xl b-white font-bold">
                Customer Testimonials
              </h2>
              <div className="mt-4 text-[#d3d3d3] ">
                <p>
                  Our customers say it best. Nice Movers has over 800+ reviews
                  across the UAE and maintains a 5-star satisfaction standard
                </p>
                <p>
                  These reviews reflect our commitment to excellence and trust.
                  We also display top industry badges and certifications to
                  assure you of our quality.
                </p>
              </div>
              <Link href={"/contact-us"} title="Get A Free Moving Quote">
                <Button variant={"secondary"} className="mt-5">
                  Contact Us
                </Button>
              </Link>
              <Link href={"#testimonials"} title="Customer reviews">
                <Button variant={"link"} className="mt-5 b-white">
                  View All Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="md:mt-36 mt-20 md:w-11/12 w-full mx-auto md:px-0 px-3 flex justify-center items-center"
        >
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                rating={review.rating}
                name={review.reviewerName}
                review={review.reviewText}
                price={review.price} // Random price for demo
                moveType={review.moveType}
                from={review.from}
                to={review.to}
              />
            ))}
          </div>
        </section>
        <RelatedLinks current="/movers-and-packers-sharjah" />
        <FAQs faqs={faqs} />
        <CTA />
        <section className="max-w-4xl md:px-0 px-3 mx-auto md:mt-20 mt-80 md:text-xl text-base flex flex-col gap-y-2 b-text">
          <p>
            For the best Sharjah moving experience, trust Nice Movers as the top
            movers and packers Sharjah locals rely on.
          </p>
          <p>
            We lead the pack among movers and packers Sharjah area-wide, and are
            proud to be known as reliable movers and packers Sharjah-wide.
            Choose Nice Movers – your hassle-free move starts here!
          </p>
        </section>
      </main>
    </>
  );
}
