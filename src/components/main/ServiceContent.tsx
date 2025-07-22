import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ServiceContent = () => {
  return (
    <section className="w-full md:mt-36 mt-80 grid md:grid-cols-2 grid-cols-1 md:h-[500px] h-auto b-red-bg items-center">
      <div className="md:px-20 px-3 md:py-0 py-16 h-auto">
        <h2 className="md:text-3xl text-xl b-white font-bold">
          Best home movers and packers in Dubai for house shifting services
        </h2>
        <div className="mt-5 flex flex-col gap-y-1 md:text-base text-sm b-white">
          <p>
            As one of top-rated moving company in Dubai with 15 years of
            expertise, Nice Movers has completed a thousands of moves with care.
          </p>
          <p>
            We provide moving services like: home moving and packing, apartment
            packing and moving, single item packing and moving and villa packing
            and moving.
          </p>
          <p>
            Our relocation services are design to make you moving easy in UAE.
          </p>
        </div>
        <div className="mt-5 flex gap-x-3">
          <Button
            className="bg-transparent text-[#e7e6e6] hover:text-[#c00000]"
            variant={"outline"}
          >
            Get A Quote
          </Button>
          <Button className="b-white" variant={"link"}>
            About Us
          </Button>
        </div>
      </div>
      <div className="bg-white w-full md:h-[500px] flex items-center">
        <div className="relative h-[400px] md:w-11/12 w-full md:-ml-10">
          <Image
            src={"/house-shifting-service-process.png"}
            alt="nice movers team packing home items in boxes"
            fill
            className="absolute object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;
