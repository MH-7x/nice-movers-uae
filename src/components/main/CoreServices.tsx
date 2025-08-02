import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const servicesList = [
  {
    title: "House Shifting",
    desc: "Nice Movers offers fast and affordable house moving services across the UAE, ensuring a safe and stress-free relocation for families and individuals.",
    src: "/House-Movers.jpg",
    alt: "Nice Movers house relocation for families.",
    link: "/house-shifting-services",
  },
  {
    title: "Villa Movers",
    desc: "Expert in villa relocation, Nice Movers safely handles luxury moves in Dubai, Sharjah, and Abu Dhabi with care and precision.",
    src: "/Villa-Movers.jpg",
    alt: "Nice Movers expert villa relocation services.",
    link: "/villa-movers-in-dubai",
  },
  {
    title: "Office Moving",
    desc: "Nice Movers provides smooth and efficient office moving services, minimizing downtime while relocating your office furniture and equipment.",
    src: "/Office-Moving.jpg",
    alt: "Nice Movers efficient office moving solutions.",
    link: "/office-movers-in-dubai",
  },
  {
    title: "Storage Services",
    desc: "Secure and flexible storage solutions for furniture, equipment, and bulky items—ideal for short or long-term needs.",
    src: "/Storage-Services.jpg",
    alt: "Nice Movers secure storage facilities.",
    link: "/",
  },
  {
    title: "Furniture Moving",
    desc: "Reliable and safe furniture moving services across the UAE, ensuring your belongings are handled with care and precision.",
    src: "/Storage-Services.jpg",
    alt: "Nice Movers safe furniture storage.",
    link: "/",
  },
  {
    title: "Local Moving",
    desc: "Fast and budget-friendly local moving services within your city—perfect for apartments, villas, or small offices.",
    src: "/local-moving.jpg",
    alt: "Nice Movers fast local moving services.",
    link: "/",
  },
  {
    title: "Transportation",
    desc: "Trusted transportation services for furniture and goods across the UAE with timely delivery and secure handling.",
    src: "/Transportation.jpg",
    alt: "Nice Movers reliable transportation services.",
    link: "/",
  },
  {
    title: "Cheap Moving",
    desc: "Reliable and low-cost moving solutions for students, studio apartments, and small-scale relocations across the UAE.",
    src: "/Cheap-Moving.jpg",
    alt: "Nice Movers low-cost moving solutions.",
    link: "/",
  },
  {
    title: "Apartment Relocation",
    desc: "Smooth and stress-free apartment moving services with packing, transport, and delivery handled by trained professionals.",
    src: "/Apartment-Relocation.jpg",
    alt: "Nice Movers stress-free apartment moving.",
    link: "/",
  },
  {
    title: "Equipment Movers",
    desc: "Specialized in equipment moving, Nice Movers ensures safe transport and setup of machinery and valuable assets.",
    src: "/Equipment-Movers.jpg",
    alt: "Nice Movers specialized equipment moving.",
    link: "/",
  },
  {
    title: "Installation & Handyman Services",
    desc: "We offer expert installation and handyman solutions, including doors, stairs, glass work, and partitions across the UAE.",
    src: "/Installation-and-Handyman-Services.jpg",
    alt: "Nice Movers expert handyman services.",
    link: "/",
  },
];

export const CoreServices = () => {
  return (
    <>
      <section
        id="main-services"
        className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
      >
        <h2 className="md:text-4xl max-w-xl text-2xl font-bold b-red">
          Our Core Moving Services <br /> In UAE - Nice Movers
        </h2>
        <p className="b-text md:text-lg/5.5 mt-3 max-w-4xl">
          We are UAE&apos;s leading moving company with lots of experties and
          train movers. In UAE, we provide a wide range of moving services but
          here are main services we provide:
        </p>

        {/* residential moves */}
        <div className="mt-20 grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:w-11/12 w-full mx-auto">
          <div id="residential-moving">
            <h3 className="md:text-3xl font-medium text-xl b-text">
              Residential Moves
            </h3>
            <p className="b-text md:mt-5 mt-3 md:text-base text-sm">
              From studios to family homes, our home movers and packers UAE team
              handles every household relocation with care.
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              We pack your items with high-quality materials and carefully
              dismantle furniture so that everything “reaches you safely”{" "}
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              Whether it’s an apartment or villa, we take care of loading,
              transport, unloading, unpacking and even short-term storage for a
              complete, stress-free family move.
            </p>
            <div className="mt-5 flex gap-x-3">
              <Button wtBtn className="b-red-bg">
                Book: Residential Moving
              </Button>
              <Link href="/">
                <Button variant={"ghost"}>More details</Button>
              </Link>
            </div>
          </div>
          <div
            id="residential-moving-image"
            className="relative md:h-[450px] h-80 rounded-2xl overflow-hidden"
          >
            <Image
              src={"/Residential-Moving-UAE.jpg"}
              alt="two movers packing house items in front of faimly"
              fill
              className="object-cover object-center"
            />
          </div>
          {/* residential moves */}

          {/* commercial moves */}
          <div
            id="commercial-moving-image"
            className="relative md:h-[450px] h-80 rounded-2xl  overflow-hidden"
          >
            <Image
              src={"/commercial-moving-uae.jpg"}
              alt="Nice Movers Team Packing Office Equipments"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="" id="commercial-moving">
            <h3 className="md:text-3xl font-medium text-xl b-text">
              Commercial Moves
            </h3>
            <p className="b-text md:mt-5 mt-3 md:text-base text-sm">
              Our office & commercial moving services UAE support businesses of
              all sizes.
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              We relocate furniture, equipment and IT systems efficiently –
              minimal downtime is our promise. In fact, we manage corporate
              moves designed to minimise disruption to your operations.
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              Flexible scheduling (even nights/weekends) means your work keeps
              running smoothly.
            </p>
            <div className="mt-5 flex md:gap-x-3 gap-x-1">
              <Button wtBtn className="b-red-bg">
                Book: Commercial Moving
              </Button>
              <Link href="/">
                <Button variant={"ghost"}>More details</Button>
              </Link>
            </div>
          </div>
          {/* commercial moves */}

          {/* villa moves */}
          <div id="villa-and-Specialty-moving">
            <h3 className="md:text-3xl font-medium text-xl b-text">
              Villa & Specialty Moves
            </h3>
            <p className="b-text md:mt-5 mt-3 md:text-base text-sm">
              For large villas and special items (pianos, fine art, safes,
              etc.), our expert team provides end-to-end logistics.
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              We can dismantle and reassemble furniture and use heavy-duty
              equipment for big items. We also offer secure, climate-controlled
              storage solutions if needed.
            </p>
            <p className="b-text md:mt-2 mt-1 md:text-base text-sm">
              In villa relocations, our crew cares for your belongings
              carefully, whether packing, transporting, or storing , so your
              most valuable possessions are always protected.
            </p>
            <div className="mt-5 flex gap-x-3">
              <Button wtBtn className="b-red-bg">
                Book: Villa & Specialty
              </Button>
              <Link href="/">
                <Button variant={"ghost"}>More details</Button>
              </Link>
            </div>
          </div>
          <div
            id="villa-and-Specialty-moving-image"
            className="relative md:h-[450px] h-80 rounded-2xl  overflow-hidden"
          >
            <Image
              src={"/villa-and-speciality-moving-uae.jpg"}
              alt="Nice Movers UAE team packing and loading boxs to trucks"
              fill
              className="object-cover object-center"
            />
          </div>
          {/* villa moves */}
        </div>
      </section>
      <section
        className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        id="nice-movers-services"
      >
        <h2 className="md:text-4xl text-2xl font-bold text-center b-red max-w-lg mx-auto">
          {" "}
          Moving Services Offered By Nice Movers{" "}
        </h2>
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
                  <h3 className="text-xl b-red font-bold ">{service.title}</h3>
                  <p className="text-sm b-text mt-2 ">{service.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
