import ContactSection from "@/components/main/ContactSection";
import React from "react";
import { ServicesLocations } from "../../../List";
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

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Contact Us  | Free Moving Quotes",
      desc: "Nice Movers is ISO verifed and professional moving company that provide a wide range of moving and packing services in overall UAE at affordable prices. Call to us or get free quote today.",
    },
    image: {
      path: "/contact-us.jpg",
      alt: "Get A Free Moving Quote From Nice Movers",
    },
    path: "/contact-us",
  },
});

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
            We Provide moving services in all over UAE
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
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
                <Button
                  variant={"link"}
                  size={"sm"}
                  title={`Services ${office.title}`}
                  className="b-text"
                >
                  View Services
                </Button>
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
              Main benefit of hiring Nice Movers during your moving process is
              that we guarantees the safety and security of your goods
            </p>
            <p>
              With our professionals, you can be sure that your items are in
              safe hands with risking of breaking, spilling, etc.
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
          <h3 className="md:text-xl text-center b-text">Fast, Alway On-Time</h3>
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

      <form>
        <section className="text-gray-600 body-font relative mt-16">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-red-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white  b-red-bg border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
};

export default ContactUsPage;
