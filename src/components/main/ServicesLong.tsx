import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "House & Apartment Moving",
    desc: "Our Sharjah movers and packers team ensures your house move is smooth and stress-free. We carefully pack your belongings with high-quality materials and protect fragile items like dishes and electronics.",
    more: (
      <>
        <p>
          From studio flats to family homes, we handle every household
          relocation with care. We also dismantle and reassemble furniture as
          needed and load everything securely for transport
        </p>
        <p>
          {" "}
          In Sharjah, our movers and packers handle every detail . For Sharjah
          home moves, Nice Movers is among the movers and packers Sharjah
          customers trust.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/house-moving-sharjah.jpg",
      alt: "Professional house movers in Sharjah carrying boxes during relocation",
    },
  },
  {
    title: "Villa & Luxury Home Relocation",
    desc: "As one of Sharjah’s trusted movers and packers for luxury villas, Nice Movers handles the unique demands of large homes",
    more: (
      <>
        <p>
          Our expert team uses heavy-duty equipment for oversized furniture and
          offers secure, climate-controlled storage if required.
        </p>
        <p>
          {" "}
          Whether you&#39;re moving within Sharjah or coming from other
          emirates, we protect your most valuable possessions with extra care.
        </p>
        <p>
          For any large villa move in Sharjah, trust our movers and packers for
          careful handling . Sharjah villas rely on movers and packers like us
          for careful handling.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/villa-moving-sharjah.jpg",
      alt: "Villa movers in Sharjah carrying luxury furniture from a modern home",
    },
  },
  {
    title: "Office and Commercial Moving",
    desc: "Time is money, so our office movers and packers in Sharjah minimize your downtime. We start with a free consultation and on- site survey to understand your requirements",
    more: (
      <>
        <p>
          Then our team efficiently packs and transports your office furniture,
          equipment, and documents. As Sharjah’s trusted office movers and
          packers, we keep your business running smoothly.
        </p>
        <p>
          {" "}
          For your office move in Sharjah, our professional movers and packers
          minimize downtime.
        </p>
        <p>
          {" "}
          For Sharjah office relocations, Nice Movers offers the best movers and
          packers Sharjah businesses rely on.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/office-relocation-sharjah.jpg",
      alt: "Office movers in Sharjah packing computers and documents for relocation",
    },
  },
  {
    title: "Furniture Moving Services",
    desc: "Moving heavy items? Our Sharjah furniture movers and packers can handle it. From bulky sofas to pianos and appliances, we have the right tools and teams to move any furniture safely",
    more: (
      <>
        <p>
          Each piece is wrapped and secured so it arrives at your new place in
          perfect condition.
        </p>
        <p>
          {" "}
          Our furniture movers and packers in Sharjah will secure all your heavy
          items.
        </p>
        <p>
          {" "}
          For Sharjah furniture moving, we are the movers and packers Sharjah
          residents prefer.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/furniture-moving-sharjah.jpg",
      alt: "Furniture movers in Sharjah carrying a sofa into a modern apartment",
    },
  },
  {
    title: "Fragile & Special Item Packing",
    desc: "Delicate items need special care. Our Sharjah movers and packers provide specialized fragile packing for glassware, art, antiques, and electronics",
    more: (
      <>
        <p>
          Using bubble wrap, custom crates and protective blankets, we ensure
          that even the most delicate possessions arrive undamaged. When you
          need careful handling of valuables, our Sharjah movers and packers
          have you covered
        </p>
        <p>
          {" "}
          When searching for movers and packers Sharjah, Nice Movers stands out
          for safe handling of fragile items.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/packing-fragile-items-sharjah.jpg",
      alt: "Mover packing fragile glassware for relocation in Sharjah",
    },
  },
  {
    title: "Full Packing and Unpacking Services",
    desc: "Hate packing? Let us do it for you. Our full-service teams will pack everything—boxes, furniture, kitchenware—with professional materials.",
    more: (
      <>
        <p>
          Once we reach your new home, we’ll unpack and set everything up per
          your instructions.
        </p>
        <p>
          {" "}
          For peace of mind, our Sharjah movers and packers can pack and unpack
          everything for you. For packing services, Nice Movers is a leading
          movers and packers Sharjah choice.
        </p>
      </>
    ),
    image: {
      src: "/sharjah/full-packing-unpacking-sharjah.jpg",
      alt: "Professional movers in Sharjah packing and unpacking household items with care",
    },
  },
];

const ServicesLong = () => {
  return (
    <main className="mt-32 md:w-11/12 mx-auto md:px-0 px-3">
      <h2 className="md:text-4xl text-2xl font-bold b-red text-center">
        Our Moving Services in Sharjah
      </h2>
      <p className="mt-3 max-w-xl text-lg mx-auto b-text text-center">
        We provide a wide range of moving and packing services in Sharjah for
        you specific needs.
      </p>
      <div className="mt-20 md:px-16" id="our-services-in-sharjah">
        {services.map((service, index) => (
          <div
            key={index}
            id={service.title.split(" ").join("-")}
            className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 mb-16"
          >
            <div
              className={`${
                index % 2 === 0 ? "order-1" : "md:order-2 order-1"
              }`}
            >
              <h3 className="md:text-3xl text-2xl font-medium b-red">
                {service.title}
              </h3>
              <p className="mt-5 b-text">{service.desc}</p>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer  font-medium text-gray-700">
                  <p className="font-medium b-text underline underline-offset-2 mt-3">
                    See more..
                  </p>
                </summary>
                <div className="mt-4 text-sm b-text fade-in-25">
                  {service.more}
                </div>
              </details>
              <div className="mt-5 flex gap-x-3">
                <Button className="b-red-bg">WhatsApp Us</Button>
                <Button variant={"secondary"}>Get A Quote</Button>
              </div>
            </div>
            <div
              className={`${
                index % 2 === 0
                  ? "md:order-2 order-1 md:ml-10 ml-5"
                  : "order-1 md:mr-10 mr-5"
              } md:h-[400px] h-80 relative overflow-hidden rounded-2xl `}
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                loading="lazy"
                className="absolute object-cover object-center"
              />
              <Link href={"tel:+971563560017"} title="Call To Us">
                <div className=" absolute bottom-0 left-0 md:w-52 w-40 md:h-32 h-24 bg-gradient-to-b from-white/50 to-white  rounded-2xl flex items-center justify-center flex-col gap-y-2">
                  <div className="md:w-12 w-10 md:h-12 h-10 border-2 border-[#c00000] rounded-full flex items-center justify-center">
                    <Phone
                      strokeWidth={0}
                      className="b-red fill-[#c00000]"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="font-medium text-sm b-text">
                    Make A Call To Us
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServicesLong;
