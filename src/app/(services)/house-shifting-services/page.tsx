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
import { HouseShiftingRawFaqs, ServicesLocations } from "../../../../List";
import Prices from "@/components/main/Prices";
import CTA from "@/components/main/CTA";
import imgSrc from "../../../../public/house-shifting-services.png";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import Script from "next/script";
import { generateServiceSchema } from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";

const FAQsItems = [
  {
    question: "How to book house shifting services?",
    answer: (
      <>
        <p>
          {" "}
          To book our house shifting service in Dubai, click on Call or WhatsApp
          button that in bottom in website and tell us eveything about your
          move.
        </p>
        <p>
          Other way to book our service is to fill out the quote form in website
          or visit to contact us page, we will recive your details and contact
          you as soon as possiable!
        </p>
      </>
    ),
  },
  {
    question: "How much a house moving service cost in dubai?",
    answer: (
      <>
        <p>
          {" "}
          the cost moving and packing for house shifting service is different
          factors like volume, distance and the services you need.
        </p>
        <p>
          {" "}
          But we estimated price ranges that are usually cost for house shifting
          service.{" "}
          <Link className="inline-block" href={"#house-shifting-price"}>
            click here to see{" "}
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Why should you hire Movers and Packers?",
    answer: (
      <>
        <p>
          {" "}
          Whether it’s an apartment move or an office transfer, the process is
          frequently taxing and fraught with difficulties.
        </p>
        <p>
          We guarantee that our service will provide you with the convenience
          you need by taking care of all of your dismantlings, packing, moving,
          and reassembling needs.
        </p>
        <p>
          Packing is one of the most difficult yet necessary phases of the
          process. We utilize bubble wrap and robust boxes, so you can be
          confident that your treasures are in good hands.
        </p>
      </>
    ),
  },
  {
    question: "Why We are the UAE’s Professional House Shifting Company?",
    answer: (
      <>
        <ul>
          <li>- Moving and Packing Services that are Safe and Secure</li>
          <li>- You should not charge for the site survey.</li>
          <li>- Only covered cars are used for transportation.</li>
          <li>- Completely Insured</li>
          <li>- Appoint a coordinator.</li>
          <li>
            - The ability to choose between partial and full loading services.
          </li>
          <li>- 24/7 Customer Support</li>
          <li>- Guaranteed the quickest services</li>
        </ul>
      </>
    ),
  },
  {
    question: "Do you reassemble the furniture after the moving service?",
    answer: (
      <>
        <p>
          Absolutely! Our movers will disassemble your furniture as needed to
          facilitate the move, and upon arrival at your new location, they will
          reassemble it to its original configuration.
        </p>
        <p>
          Our expert movers and packers take great care in packing your
          furniture meticulously to ensure their safety throughout the entire
          move.
        </p>
      </>
    ),
  },
  {
    question: "How long does it take to finish the house shifting service?",
    answer: (
      <>
        <p>
          The duration of a house shifting service can vary depending on several
          factors, including the amount of furniture and belongings, the
          distance between the old and new locations, and whether additional
          services like packing and unpacking are required.
        </p>
        <p>
          However, as a general guideline, here are estimated timeframes for
          different types of moves:
        </p>
        <ul>
          <li>Studio: Typically takes 6-8 hours.</li>
          <li>1 Bedroom: Usually requires 8-10 hours.</li>
          <li>2 Bedroom: Typically takes around 10-12 hours.</li>
          <li>3 Bedroom: A 3-bedroom move can often span 2 days.</li>
          <li>4 Bedroom: Similarly, a 4-bedroom move may take 2 days.</li>
          <li>
            5 Bedroom: For larger 5-bedroom moves, it can extend to 3 days.
          </li>
        </ul>
        <p>
          These timeframes are approximate and can vary based on the specific
          circumstances of each move. It&apos;s advisable to get in touch with
          our experts to get a more accurate estimate based on your unique needs
          and requirements.
        </p>
      </>
    ),
  },
  {
    question: "Do I need to buy packaging materials myself?",
    answer: (
      <>
        <p>
          By booking The Nice Movers house shifting service, you don&apos;t need
          to buy packaging materials yourself.
        </p>
        <p>
          Our experts will come prepared with all the required packaging
          materials as part of their moving service, ensuring that you have the
          necessary supplies for a smooth and safe move. All you need to do is
          contact us and we will do the rest!
        </p>
      </>
    ),
  },
  {
    question: "Where do you provide house shifting services in UAE",
    answer: (
      <>
        <p>
          We cover all major areas in Dubai, the UAE, and have options for
          seamless relocations across anywhere in UAE. Here are some areas we
          have branches:
        </p>
        <ul>
          {ServicesLocations &&
            ServicesLocations.map((loc) => (
              <li key={loc.title}>{loc.title}</li>
            ))}
        </ul>
      </>
    ),
  },
];

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
          <AccordionItem value="apartment-moving-detials">
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
                For studio apartments, Nice Movers offer moving and packing
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
          We have experties in moving and packing services in UAE for villas of
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
          <AccordionItem value="villa-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                For 2-bedroom villas, Nice Movers offers professional moving and
                packing services that ensure that all items are properly packed,
                loaded, and transported to the new location.
              </p>
              <p>
                For 3, 4, and 5-bedroom villas, Nice Movers pffoer comprehensive
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
export async function generateMetadata() {
  MetadataTemplate({
    data: {
      meta: {
        title: "House Shifting Services in Dubai | Book At Low Prices",
        desc: "Nice Movers is a top rated and best home movers and packers in UAE. We provide affordable house shifting services. Call us or request a quote today!",
      },
      image: {
        path: "/house-shifting.png",
        alt: "Houose Shifting Services By Nice Movers",
      },
      path: "/house-shifting-services",
    },
  });
}

const JsonLd = generateServiceSchema({
  serviceName: "House Shifting Services in Dubai",
  serviceDescription:
    "Nice Movers is a top rated and best home movers and packers in UAE. We provide affordable house shifting services. Call us or request a quote today!",
  serviceUrl: APP.url + "/house-shifting-services",
  priceRange: "650 AED - 4350 AED",
  imageUrls: [APP.url + "/house-shifting.png"],
});

const faqJsonLd = generateFAQSchema(HouseShiftingRawFaqs);

const HouseShiftingPage = () => {
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
      <main className="z-20 md:mt-[124px] mt-[69px] max-w-[1400px] mx-auto bg-white">
        <ServiceHero
          title="Affordable House Shifting Services in Dubai, UAE"
          desc=" Nice Movers is a leading moving and packing company for house
              shifting services in overall UAE. We offer affordable rates from
              other moving companies in UAE."
          btnText="Call Now: Home Movers"
          image={{ alt: "House Shifting Services in Dubai", src: imgSrc }}
        />
        <ServiceContent />
        <ContactSection
          dm
          title="Book Now — House Shifting Services in Dubai — Low Rates"
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
                Main benefit of hiring Nice Movers during your shifting process
                is that we guarantees the safety and security of your goods
              </p>
              <p>
                With our professionals, you can be sure that your items are in
                safe hands with risking of breaking, spilling, etc.
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
          id="our-experties"
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
              Trained Relocations Experts
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
              15+ Years Moving Experties
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
              Fast, Alway On-Time
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
              Multiple Sizes Trucks
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
            Our professional home relocation services includes
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-2 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl b-text font-bold">{box.title}</h3>
                <div className="mt-3 text-sm b-tex">{box.desc}</div>

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
              Steps Included in Our House Shifting Service in Dubai
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
                Our trained and professional have completed thousands of moves,
                ensuring that your goods are in safe hands throughout the entire
                process.
              </p>
              <p>
                Here are some of our UAE&apos;s clients reviews about their
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
                price={review.price} // Random price for demo
                moveType={review.moveType}
                from={review.from}
                to={review.to}
              />
            ))}
          </div>
        </section>

        <CTA />

        <FAQs faqs={FAQsItems} />
      </main>
    </>
  );
};

export default HouseShiftingPage;
