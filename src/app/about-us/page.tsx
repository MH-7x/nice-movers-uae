import CTA from "@/components/main/CTA";
import { Button } from "@/components/ui/button";
import { APP } from "@/lib/App";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle } from "lucide-react";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

const content = [
  {
    title: "All-in-One Moving Solutions",
    desc: "From house shifting and furniture moving to packing/unpacking, dismantling, and installation, we handle everything so you don't have to lift a finger.",
  },
  {
    title: "Safe & Insured Moves",
    desc: "We prioritize the safety of your belongings with professional packing materials, licensed crew members, and optional insurance.",
  },
  {
    title: "Affordable Pricing",
    desc: "Our competitive and transparent pricing ensures quality service without hidden fees.",
  },
  {
    title: "Same-Day & Emergency Moves",
    desc: "Need to move urgently? Our team is ready to assist with same-day moving services across the UAE.",
  },
  {
    title: "Online booking made easy",
    desc: "Schedule a move when it works for you — as early as today. Find the perfect move for you with just one enquiry.",
  },
  {
    title: "Experienced Professionals",
    desc: "Our skilled movers are trained in proper handling techniques to ensure no damage during transit or installation",
  },
];

const aboutUsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: APP.name,
  url: APP.url, // Change to your actual domain
  logo: `${APP.url}/Picture1.png`, // Update with actual logo URL
  description:
    "Nice Movers is a trusted moving and packing company in the UAE, offering professional villa moving, house shifting, storage solutions, and packing services in Dubai, Sharjah, Ajman, and all across the Emirates.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "2 Moatab Bin Auf St - Bu Shaghara - Hay Al Qasimiah - Sharjah",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "00000",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: APP.phone, // Your phone number
    contactType: "Customer Service",
    areaServed: "AE",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [
    "https://www.facebook.com/NiceMoversUAE",
    "https://www.instagram.com/NiceMoversUAE",
    "https://www.linkedin.com/company/nicemoversuae", // update with actual URLs or remove if not available
  ],
  founder: {
    "@type": "Person",
    name: "Mashal Horara", // Replace with actual founder if different
  },
  foundingDate: "2010-01-01", // Adjust accordingly
  foundingLocation: {
    "@type": "Place",
    name: "Dubai, UAE",
  },
};

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "About Us  | Nice Movers in UAE",
      desc: "Nice Movers is ISO verifed and professional moving company that provide a wide range of moving and packing services in overall UAE at affordable prices. Call to us or get free quote today.",
    },
    image: {
      path: "/Transportation.jpg",
      alt: "Nice Movers Truck in UAE",
    },
    path: "/about-us",
  },
});
const AboutUsPage = () => {
  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutUsJsonLd) }}
        strategy="beforeInteractive"
      />

      <main className="z-20 mt-32">
        <section className="grid md:grid-cols-2 grid-cols-1 lg:px-20 items-center gap-10 py-12 md:px-0 px-3">
          <div>
            <h1 className="text-3xl uppercase font-bold b-text mb-4">
              About Nice Movers <br />
              <span className="b-red">Movers And Packers In UAE</span>
            </h1>
            <p className="text-gray-600 mb-2">
              Since our establishment, Nice Movers has been committed to
              providing reliable, efficient, and professional moving and packing
              services throughout the UAE.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in being one of the leading movers and packers in
              the UAE, delivering seamless relocation solutions for residential,
              commercial, and specialty moving needs.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Verified Moving Company in UAE
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>We’re ISO 9001:2015 certified.</li>
              <li>Cover all regions in UAE</li>
            </ul>

            <Button size={"lg"} className="mt-5 b-red-bg">
              Book Appoiment!
            </Button>
          </div>
          <div className="md:h-[480px] h-[400px]  grid grid-cols-2 place-content-center grid-rows-2 gap-3">
            <div className="row-span-2 relative overflow-hidden rounded-2xl">
              <Image
                src={"/Moving-in-Action.jpg"}
                alt="one movers and lady packer busy at packing goods"
                fill
                className="absolute object-cover object-left"
              />
            </div>
            <div className="row-span-1 relative overflow-hidden rounded-2xl">
              <Image
                src={"/Team-at-Work.jpg"}
                alt="nice movers team at work in uae"
                fill
                className="absolute object-cover object-center"
              />
            </div>
            <div className="row-span-1 relative rounded-2xl">
              <Image
                src={"/verified.svg"}
                alt="Nice Movers Verified Badge"
                fill
                className="absolute object-contain object-center"
              />
            </div>
          </div>
        </section>

        <section
          className="b-red-bg w-full grid md:grid-cols-2 md:gap-20 gap-10 mt-36 items-center"
          id="about-our-company-section"
        >
          <div
            id="image"
            className="relative md:h-[500px] h-[400px] bg-red-200"
          >
            <Image
              alt="Three Nice Movers Team Members"
              src={"/Employee-Portraits.jpg"}
              fill
              loading="lazy"
              className="absolute object-center object-cover
            "
            />
          </div>
          <div
            id="content"
            className="md:pr-20 md:text-lg b-white pt-10 md:pb-0 pb-10 px-3"
          >
            <p className="mb-2">
              With years of hands-on experience and a dedicated team of trained
              professionals, we’ve helped thousands of customers move homes,
              offices, and furniture with complete peace of mind.
            </p>
            <p className="mb-2">
              Whether you&apos;re relocating within Dubai, Sharjah, Ajman, Al
              Ain, Ras Al Khaimah, Fujairah, or anywhere across the UAE, we are
              just one call away.
            </p>

            <Link href={"/"} title="Get A Free Moving Quote">
              <Button className="mt-5" variant={"secondary"}>
                Get A Quote
              </Button>
            </Link>
          </div>
        </section>
        <section
          id="our-moving-services"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="text-4xl b-red font-bold text-center">
            Why Choose Nice Movers?
          </h2>
          <p className=" b-text mt-3 max-w-2xl mx-auto text-center">
            There is lot of moving and packing companies in UAE but when its
            comes to choosing the best, you have to look and study the company
            in details. Here are some reasons why you should choose us!
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-3 grid-cols-1">
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
          id="our-mission"
          className="md:w-11/12 mx-auto mt-36 md:p-20 py-10 px-3 w-full b-red-bg rounded-2xl"
        >
          <h2 className="md:text-3xl text-2xl max-w-lg b-white">
            Our Mission - To Be Trusted Moving Company in UAE
          </h2>
          <div className="mt-5 b-white max-w-xl">
            <p>
              At Nice Movers, our mission is simple — to provide stress-free
              moving experiences with professionalism, care, and reliability.
            </p>
            <p>
              We strive to make every move smooth and hassle-free by focusing on
              customer satisfaction and service excellence.
            </p>
          </div>
        </section>
        <section
          className="b-red-bg w-full grid md:grid-cols-2 md:gap-20 gap-10 mt-36 items-center"
          id="house-shifting-process"
        >
          <div id="content" className="md:pl-20 md:text-lg b-white pt-10 px-3">
            <p className="underline underline-offset-1 text-sm">
              Services Locations
            </p>
            <h2 className="md:text-3xl text-2xl font-bold b-white">
              Our Branches in United Arab Emairtes
            </h2>
            <p className="mb-2 mt-3 text-sm">
              Nice Movers has multiple branches across the UAE, we will provide
              best moving and packing services anywhere in UAE:
            </p>
            <ol className="mt-3 text-sm grid grid-cols-2 gap-2">
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Dubai</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Sharjah</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Abu Dhabi</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Ajman</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Ras Al Khaimah</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Fujairah</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Al Ain</span>
              </li>
              <li className="flex items-center gap-x-2">
                <CheckCircle /> <span>Business Bay</span>
              </li>
            </ol>
          </div>
          <div
            id="image"
            className="relative md:h-[500px] h-[400px] bg-red-200"
          >
            <Image
              alt="packing items"
              src={"/Packing-Materials-and-Tools.jpg"}
              fill
              loading="lazy"
              className="absolute object-center object-cover"
            />
          </div>
        </section>
        <CTA
          title={
            <>
              Lets Make Your Next <br /> Move A Nice One!
            </>
          }
          desc={
            <>
              <p className="text-[#d6d6d6] max-w-2xl mt-3">
                If you&apos;re searching for trusted movers and packers near
                you, look no further than Nice Movers UAE. We are now a verified
                moving company that offers moving services at affordable rates.
              </p>
              <p className="text-[#d6d6d6] max-w-2xl mt-3">
                Visit our{" "}
                <Link href={"/house-shifting-services"}>
                  House Shifting Services
                </Link>{" "}
                page to learn more about what we offer.
              </p>
            </>
          }
        />
      </main>
    </>
  );
};

export default AboutUsPage;
