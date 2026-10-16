import ContactSection from "@/components/main/ContactSection";
import { FAQs } from "@/components/main/FAQs";
import Locations from "@/components/main/Locations";
import Process from "@/components/main/Process";
import ServiceContent from "@/components/main/ServiceContent";
import ServiceHero from "@/components/main/ServiceHero";
import { reviews } from "@/components/main/testimonials";
import ReviewCard from "@/components/ReviewCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  AlarmCheckIcon,
  CalendarClockIcon,
  CheckCircle,
  CheckIcon,
  Hammer,
  Medal,
  ShieldCheckIcon,
  Truck,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { ServicesLocations } from "../../../../../List";
import Prices from "@/components/main/Prices";
import CTA from "@/components/main/CTA";
import imgSrc from "../../../../../public/house-shifting-services.png";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import JsonLd from "@/components/JsonLd";
import RelatedLinks from "@/components/main/RelatedLinks";
import { breadcrumbFor, generateServiceSchema } from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema, type PlainFAQ } from "@/lib/GenerateFaqSchema";
import { type Metadata } from "next";
import { type ReactNode } from "react";

type PageFAQ = PlainFAQ & { link?: { href: string; text: string } };

/**
 * Single source for the visible FAQs and the FAQPage schema.
 * Each "\n" starts a new paragraph; lines starting with "- " are list items.
 */
const houseShiftingFaqs: PageFAQ[] = [
  {
    question: "How to book house shifting services?",
    answer:
      "To book our house shifting service anywhere in the UAE, tap the Call or WhatsApp button at the bottom of the website and tell us everything about your move.\nYou can also fill out the quote form on this page or visit our contact us page. We will receive your details and contact you as soon as possible.",
  },
  {
    question: "How much does a house moving service cost in the UAE?",
    answer:
      "The cost of a house shifting service depends on factors like the volume of your belongings, the distance and the services you need.\nWe have listed the estimated price ranges that house shifting usually costs on this page.",
    link: { href: "#house-shifting-price", text: "See our house shifting prices" },
  },
  {
    question: "Why should you hire Movers and Packers?",
    answer:
      "Whether it’s an apartment move or an office transfer, the process is often stressful and full of challenges.\nOur service gives you the convenience you need by taking care of all the dismantling, packing, moving and reassembling.\nPacking is one of the most difficult yet necessary parts of the process. We use bubble wrap and strong boxes, so you can be confident that your belongings are in good hands.",
  },
  {
    question: "Why are we the UAE’s professional house shifting company?",
    answer:
      "- Safe and secure moving and packing services\n- Free site survey\n- Only covered trucks are used for transportation\n- Moving insurance available\n- A dedicated move coordinator\n- A choice between partial and full loading services\n- 24/7 customer support\n- Fast, on-time service",
  },
  {
    question: "Do you reassemble the furniture after the moving service?",
    answer:
      "Absolutely! Our movers will disassemble your furniture as needed to facilitate the move, and upon arrival at your new location, they will reassemble it to its original configuration.\nOur expert movers and packers take great care in packing your furniture to keep it safe throughout the entire move.",
  },
  {
    question: "How long does it take to finish the house shifting service?",
    answer:
      "The duration of a house shifting service varies with the amount of furniture and belongings, the distance between the old and new locations, and whether additional services like packing and unpacking are required.\nAs a general guideline, here are estimated timeframes for different types of moves:\n- Studio: typically takes 6-8 hours.\n- 1 Bedroom: usually requires 8-10 hours.\n- 2 Bedroom: typically takes around 10-12 hours.\n- 3 Bedroom: a 3-bedroom move can often span 2 days.\n- 4 Bedroom: a 4-bedroom move may also take 2 days.\n- 5 Bedroom: larger 5-bedroom moves can extend to 3 days.\nThese timeframes are approximate and depend on the specific circumstances of each move. Contact our team for a more accurate estimate based on your needs.",
  },
  {
    question: "Do I need to buy packaging materials myself?",
    answer:
      "When you book the Nice Movers house shifting service, you don’t need to buy packaging materials yourself.\nOur team comes prepared with all the required packaging materials as part of the moving service, so you have everything needed for a smooth and safe move. All you need to do is contact us and we will do the rest!",
  },
  {
    question: "Where do you provide house shifting services in UAE?",
    answer: `We serve all major areas of Dubai and the rest of the UAE, including moves from one emirate to another. Here are some of the areas we serve:\n${ServicesLocations.filter((loc) => /^[ -~]+$/.test(loc.title)).map(
      (loc) => `- ${loc.title}`
    ).join("\n")}`,
  },
];

/** Renders a plain-text FAQ answer (paragraphs + "- " list items) as HTML. */
const renderAnswer = (faq: PageFAQ) => {
  const blocks: ReactNode[] = [];
  let list: string[] = [];
  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${blocks.length}`} className="list-disc list-inside">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };
  faq.answer.split("\n").forEach((line) => {
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else {
      flushList();
      blocks.push(<p key={`p-${blocks.length}`}>{line}</p>);
    }
  });
  flushList();
  return (
    <>
      {blocks}
      {faq.link && (
        <Link className="inline-block underline" href={faq.link.href}>
          {faq.link.text}
        </Link>
      )}
    </>
  );
};

/** Plain-text answer for the FAQPage schema (same words as the visible answer). */
const schemaAnswer = (answer: string) =>
  answer
    .split("\n")
    .map((line) => line.replace(/^- /, "").trim())
    .map((line) => (/[.!?:]$/.test(line) ? line : `${line}.`))
    .join(" ");

const FAQsItems = houseShiftingFaqs.map((faq) => ({
  question: faq.question,
  answer: renderAnswer(faq),
}));

const content = [
  {
    title: "Apartment moving and packing",
    desc: (
      <>
        <p>
          We provide affordable and efficient moving and packing for apartments
          of all sizes including:
        </p>
        <ul className="mt-3">
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            1-bedroom apartments
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            2-bedroom apartments
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            3-bedroom apartments
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            4-bedroom apartments
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            4+ bedroom apartments
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            studio apartments
          </li>
        </ul>
        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-details">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                For 1 bedroom apartments, Nice Movers provides packing and
                moving that ensure that all items are properly packed, loaded,
                and transported to the new location.
              </p>
              <p>
                For 2, 3, 4, and 4+ bedroom apartments, Nice Movers offers
                comprehensive packing and moving services that include packing
                all goods, disassembling and reassembling of furniture, and
                loading, unloading, and unpacking at the new location.
              </p>
              <p>
                For studio apartments, Nice Movers offers moving and packing
                services that are tailored to the needs of customers living in
                small spaces.
              </p>
              <Button
                size={"sm"}
                variant={"link"}
                className="underline mx-auto"
                callBtn
              >
                Contact for apartment moving
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Villa moving and packing",
    desc: (
      <>
        <p>
          We have expertise in moving and packing services in the UAE for villas of
          all sizes, including:
        </p>
        <ul className="mt-3">
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            2-bedroom villas
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            3-bedroom villas
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            4-bedroom villas
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            5-bedroom villas
          </li>
        </ul>
        <p className="mt-3">
          We ensure and guarantee that your goods are safe and secure during
          transportation.
        </p>
        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="villa-moving-details">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                For 2-bedroom villas, Nice Movers offers professional moving and
                packing services that ensure that all items are properly packed,
                loaded, and transported to the new location.
              </p>
              <p>
                For 3, 4, and 5-bedroom villas, Nice Movers offers comprehensive
                packing and moving services that include packing all items,
                disassembling and reassembling furniture, and loading,
                unloading, and unpacking at the new location.
              </p>

              <Button
                size={"sm"}
                variant={"link"}
                className="underline mx-auto"
                callBtn
              >
                Contact for villa moving
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Single item moving and packing",
    desc: (
      <>
        <p>
          We offer a dedicated service for packing and moving single items, such
          as :
        </p>
        <ul className="mt-3">
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            Furniture
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            Appliances
          </li>
          <li className="flex items-center gap-x-2">
            <CheckIcon width={15} height={15} className="text-[#c00000]" />
            other heavy items
          </li>
        </ul>

        <Button
          size={"sm"}
          variant={"link"}
          className="underline mx-auto mt-3"
          callBtn
        >
          Contact for single item move
        </Button>
      </>
    ),
  },
];

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "House Shifting Services in UAE | Nice Movers",
      desc: "Affordable house shifting services across the UAE – Dubai, Sharjah, Ajman, Ras Al Khaimah and more. Packing, moving and reassembly. Get a free quote today!",
    },
    image: {
      path: "/house-shifting.png",
      alt: "House Shifting Services By Nice Movers",
    },
    path: "/house-shifting-services",
  },
});

const serviceJsonLd = generateServiceSchema({
  serviceName: "House Shifting Services in UAE",
  serviceDescription:
    "Affordable house shifting services across the UAE, including packing, moving, furniture disassembly and reassembly for apartments, villas and single items.",
  serviceUrl: APP.url + "/house-shifting-services",
  priceRange: "650 AED - 4350 AED",
  imageUrls: [APP.url + "/house-shifting.png"],
});

const faqJsonLd = generateFAQSchema(
  houseShiftingFaqs.map((faq) => ({
    question: faq.question,
    answer: schemaAnswer(faq.answer),
  }))
);

const HouseShiftingPage = () => {
  return (
    <>
      <JsonLd id="service-schema" data={serviceJsonLd} />
      <JsonLd
        id="breadcrumb-schema"
        data={breadcrumbFor("House Shifting Services", "/house-shifting-services")}
      />
      <JsonLd id="faqs-schema" data={faqJsonLd} />
      <main className="z-20 md:mt-[124px] mt-[69px] max-w-[1400px] mx-auto bg-white">
        <ServiceHero
          title="Affordable House Shifting Services in UAE"
          desc="Nice Movers is a leading moving and packing company for house
              shifting services all over the UAE, with rates that are more
              affordable than many other moving companies."
          btnText="Call Now: Home Movers"
          image={{ alt: "House Shifting Services in UAE", src: imgSrc }}
        />
        <ServiceContent
          title="Best home movers and packers for house shifting services in the UAE"
          desc={
            <>
              <p>
                Moving homes since 2015, Nice Movers has completed thousands of
                house moves across Dubai, Sharjah, Ajman, Ras Al Khaimah and
                the rest of the UAE.
              </p>
              <p>
                We provide home moving and packing, apartment packing and
                moving, single item moving and villa packing and moving.
              </p>
              <p>
                Our relocation services are designed to make your move in the
                UAE easy, from the first box to the last piece of furniture.
              </p>
            </>
          }
        />
        <ContactSection
          dm
          title="Book Now — House Shifting Services in UAE — Low Rates"
          desc={
            <>
              To book our house shifting service in Dubai or anywhere in the UAE
              with us, kindly fill out the general inquiry form provided. <br />
              Subsequently, our booking manager will promptly reach out to you
              to ascertain the specific requisites about your relocation.
            </>
          }
        />
        <Locations
          id="benefits-of-hiring-us"
          title="Advantages Of Hiring Professional Home Moving Company"
          desc={
            <>
              <p>
                The main benefit of hiring Nice Movers for your house shifting
                is that we take care of the safety and security of your goods.
              </p>
              <p>
                With our professionals, your items are in safe hands, packed to
                reduce the risk of breakage, spills and scratches.
              </p>
              <p>
                Hiring a professional packers and movers company like us can
                save you time and reduce stress, allowing you to focus on other
                aspects of your move.
              </p>
            </>
          }
          img={{
            src: "/nice-movers-transport-trucks.jpg",
            alt: "moving trucks of Nice Movers UAE",
          }}
        />
        <section
          id="our-expertise"
          className="md:mt-52 mt-[22rem] md:w-5xl mx-auto grid md:grid-cols-3 md:gap-10 gap-5 grid-cols-2 md:px-0 px-3"
        >
          <div className="flex items-center justify-center flex-col gap-y-3">
            <ShieldCheckIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Trained Relocation Experts
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
              Moving Families Since 2015
            </h3>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <CalendarClockIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Quick Booking Process
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
              Fast, Always On Time
            </h3>
          </div>

          <div className="flex items-center justify-center flex-col gap-y-3">
            <Truck
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Trucks in Multiple Sizes
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
          id="home-moving-services"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold text-center">
            Our Home Relocation <br className="md:hidden" /> Services in UAE
          </h2>
          <p className="md:text-lg b-text mt-3 max-w-2xl mx-auto text-center">
            Our professional home relocation services include
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-2 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl b-text font-bold">{box.title}</h3>
                <div className="mt-3 text-sm b-text">{box.desc}</div>

                <div className="border-b-2 w-full mt-5 border-[#c00000]"></div>
              </div>
            ))}
          </div>
        </section>
        <section
          className="b-red-bg w-full grid md:grid-cols-2 md:gap-20 gap-10 mt-36 items-center"
          id="house-shifting-process"
        >
          <div id="content" className="md:pl-20 md:text-lg b-white pt-10 px-3">
            <p className="underline underline-offset-1 text-sm">How We Work</p>
            <h2 className="md:text-3xl text-2xl font-bold b-white">
              Steps Included in Our House Shifting Service in the UAE
            </h2>
            <p className="mb-2 mt-3 text-sm">
              Nice Movers comprehensive house shifting services include the
              following steps:
            </p>
            <ol className="mt-3 text-sm">
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Packing: First, Our professional packers use high-quality
                  packaging materials to pack all your items in well-sealed
                  boxes.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Moving: Second, We transport your packed items to your new
                  location using our proper trucks.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Unpacking: Third, When we arrive at your new location, we
                  unpack your items and install them as instructed.
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle />{" "}
                <span>
                  Handyman Service: In Last We provide handyman service if
                  required to assist you with any minor installation or repair
                  tasks.
                </span>
              </li>
            </ol>
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
        <Process dm />
        <Prices />
        <Locations
          id="recently-completed-moves"
          title="Recently Completed Moves With Us"
          desc={
            <>
              <p>
                At Nice Movers, we pride ourselves on being one of the best
                packers and movers in the UAE.
              </p>
              <p>
                Our trained professionals have completed thousands of moves,
                ensuring that your goods are in safe hands throughout the entire
                process.
              </p>
              <p>
                Here are some reviews from our UAE clients about their
                moving experience with us.
              </p>
            </>
          }
          img={{
            src: "/after-house-shifting-photo.png",
            alt: "nice movers team after completing house shifting service",
          }}
        />
        <section
          id="reviews"
          className="md:mt-36 mt-20 md:w-11/12 w-full mx-auto md:px-0 px-3 flex justify-center items-center"
        >
          <div className="md:mt-0 mt-52 grid md:grid-cols-3 grid-cols-1 gap-5">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                rating={review.rating}
                name={review.reviewerName}
                review={review.reviewText}
                price={review.price}
                moveType={review.moveType}
                from={review.from}
                to={review.to}
              />
            ))}
          </div>
        </section>

        <CTA />

        <RelatedLinks current="/house-shifting-services" />

        <FAQs faqs={FAQsItems} />
      </main>
    </>
  );
};

export default HouseShiftingPage;
