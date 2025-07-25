import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Free Online Estimates & Quotes",
    desc: (
      <>
        {" "}
        <p className="text-sm text-gray-600 mb-1">
          Begin your villa moving process in dubai with a clear financial
          picture.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Our system is designed to provideonline estimates villa movers in
          dubai, giving you a quick, accurate, and transparent quote with no
          hidden fees.
        </p>
      </>
    ),
    img: "/online-estimates-for-villa-moving.jpg",
    alt: "Villa Online Estimates & Quotes",
  },
  {
    title: "Packing & Unpacking",
    desc: (
      <>
        <p className="text-sm text-gray-600 mb-1">
          As expert villa packers and movers in dubai, our team uses premium,
          eco-friendly packing materials to protect your possessions.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          We pay special attention to fragile-item care, ensuring everything
          from delicate glassware to valuable artwork is securely packed and
          transported.
        </p>
      </>
    ),
    img: "/packing-unpacking.jpg",
    alt: "Professional villa movers in Dubai packing fragile items with eco-friendly materials",
  },
  {
    title: "Furniture Disassembly & Reassembly",
    desc: (
      <>
        <p className="text-sm text-gray-600 mb-1">
          We dismantle large furniture (wardrobes, beds, tables) before moving
          and reassemble it at your new home.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          This ensures safe transport and a perfect fit in tight stairwells or
          doorways. After arriving, our team puts everything back together
          according to your plan.
        </p>
      </>
    ),
    img: "/furniture-disassembly.jpg",
    alt: "Movers in Dubai disassembling and reassembling furniture with care and precision",
  },
  {
    title: "Secure Transport",
    desc: (
      <>
        <p className="text-sm text-gray-600 mb-1">
          Nice Movers uses modern, well-maintained trucks and vans to move your
          belongings.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Our drivers plan the best routes to navigate Dubai traffic, so your
          items are in good hands from pickup to delivery.
        </p>
      </>
    ),
    img: "/secure-transport.jpg",
    alt: "Branded moving truck in Dubai ensuring safe and reliable transport of belongings",
  },
  {
    title: "Short & Long-Term Storage Solutions",
    desc: (
      <>
        <p className="text-sm text-gray-600 mb-1">
          If you require storage before, during, or after your move, we provide
          secure, climate-controlled short and long-term storage solutions to
          keep your items safe.
        </p>
        <p className="text-sm text-gray-600 mb-2">
          So waiting for what, call to our experts and make you next villa
          moving in dubai with Nice Movers!
        </p>
      </>
    ),
    img: "/storage-solutions.jpg",
    alt: "Climate-controlled storage facility in Dubai for short and long-term moving needs",
  },
];

const SubService = () => {
  return (
    <section className="bg-[#c00000] text-white mt-36 py-10 px-3 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm text-[#202020] font-medium mb-2">
              Our Services
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Our Villa Movers & Packers <br />
              <span className="text-white">Services In Dubai</span>
            </h2>
            <p className="max-w-3xl mt-5 b-white">
              We offer a comprehensive suite of services to cover every aspect
              of your villa move.
            </p>
          </div>
          <Link
            href="#"
            className="mt-4 md:mt-0 text-sm font-semibold text-white hover:underline"
          >
            EXPLORE SERVICES
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="b-white-bg b-text rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={service.img}
                  alt={service.alt}
                  fill
                  className="object-cover object-center absolute"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                {service.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubService;
