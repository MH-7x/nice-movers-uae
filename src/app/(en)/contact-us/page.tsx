import ContactSection from "@/components/main/ContactSection";
import React from "react";
import Link from "next/link";
import { ServicesLocations } from "../../../../List";
import { Button } from "@/components/ui/button";
import Locations from "@/components/main/Locations";
import {
  AlarmCheckIcon,
  CalendarClockIcon,
  Hammer,
  Medal,
  ShieldCheckIcon,
  Truck,
} from "lucide-react";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { type Metadata } from "next";

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Contact Us | Free Moving Quotes",
      desc: "Contact Nice Movers in Sharjah for a free moving quote. Call +971 56 356 0017, WhatsApp or email us. Open Mon–Sat 8am–8pm, Sun 10am–6pm.",
    },
    image: {
      path: "/contact-us.jpg",
      alt: "Get A Free Moving Quote From Nice Movers",
    },
    path: "/contact-us",
  },
});

const ADDRESS =
  "2 Moatab Bin Auf St, Bu Shaghara, Hay Al Qasimiah, Sharjah, UAE";
const MAP_SRC =
  "https://www.google.com/maps?q=2%20Moatab%20Bin%20Auf%20St%2C%20Bu%20Shaghara%2C%20Sharjah%2C%20UAE&output=embed";

const ContactUsPage = () => {
  return (
    <main className="z-20 mt-32">
      <ContactSection
        h1
        title="Get A Free Moving Quote in Minutes - Nice Movers"
        desc="Ready to move? Get Your Free Moving Quote today and enjoy seamless relocation with peace of mind across the UAE!"
      />
      <section className="px-3 py-16 mt-32 md:px-10 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold b-red mb-4 max-w-lg">
            We Provide Moving Services All Over the UAE
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            From our base in Sharjah, our crews handle home, villa and office
            moves across Dubai, Sharjah, Ajman, Ras Al Khaimah and the rest of
            the UAE. Pick your area below, or call us for a free quote.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-200 pt-8">
            {ServicesLocations.map((office, index) => (
              <div
                key={index}
                className={`space-y-1 pl-4 border-l border-gray-200`}
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {office.title}
                </h3>
                <p className=" text-gray-500 text-sm line-clamp-2">
                  {office.desc}
                </p>
                <Button
                  variant={"link"}
                  size={"sm"}
                  callBtn
                  title={`Call To ${office.title}`}
                  className="b-red"
                >
                  Call Now!
                </Button>
                {office.link !== "/" && (
                  <Link
                    href={office.link}
                    title={`Services ${office.title}`}
                    className="inline-flex h-8 items-center px-3 text-sm font-medium b-text underline-offset-4 hover:underline"
                  >
                    View Services
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Locations
        id="benefits-of-hiring-us"
        title="Benefits Of Hiring Us For Moving Services In UAE"
        desc={
          <>
            <p>
              The main benefit of hiring Nice Movers is that we take care of
              the safety and security of your goods throughout the move.
            </p>
            <p>
              With our professionals, your items are in safe hands, packed to
              reduce the risk of breakage, spills and scratches.
            </p>
            <p>
              Hiring a professional packers and movers company like us can save
              you time and reduce stress, allowing you to focus on other aspects
              of your move.
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
          <h3 className="md:text-xl text-center b-text">Fast, Always On Time</h3>
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
        id="contact-details"
        className="text-gray-600 body-font relative mt-16"
      >
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-y-8">
          <div className="lg:w-2/3 md:w-1/2 w-full min-h-[400px] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0 }}
              title="Nice Movers location in Sharjah"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={MAP_SRC}
            ></iframe>
          </div>
          <address className="lg:w-1/3 md:w-1/2 w-full not-italic flex flex-col gap-y-5 md:ml-auto md:py-8">
            <h2 className="text-2xl font-bold b-red">Contact Nice Movers</h2>
            <div>
              <h3 className="font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h3>
              <p className="mt-1">{ADDRESS}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 tracking-widest text-xs">
                PHONE
              </h3>
              <a
                href="tel:+971563560017"
                className="b-red leading-relaxed hover:underline"
              >
                +971 56 356 0017
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 tracking-widest text-xs">
                WHATSAPP
              </h3>
              <a
                href="https://wa.me/971563560017"
                className="b-red leading-relaxed hover:underline"
              >
                Chat with us on WhatsApp
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h3>
              <a
                href="mailto:nicemovers.com@gmail.com"
                className="b-red leading-relaxed hover:underline"
              >
                nicemovers.com@gmail.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 tracking-widest text-xs">
                OPENING HOURS
              </h3>
              <p className="mt-1">Monday – Saturday: 08:00 – 20:00</p>
              <p>Sunday: 10:00 – 18:00</p>
            </div>
          </address>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
