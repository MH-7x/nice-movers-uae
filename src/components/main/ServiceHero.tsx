import Image from "next/image";
import React from "react";
import imgSrc from "../../../public/house-shifting-services.png";
import { Button } from "../ui/button";
const ServiceHero = () => {
  return (
    <section
      className="w-full relative md:h-[550px] h-[400px]"
      id="hero-section"
    >
      <Image
        src={imgSrc}
        alt="House Shifting Services in Dubai"
        fill
        placeholder="blur"
        loading="eager"
        className="absolute object-cover object-center"
        quality={90}
      />
      <div className="absolute top-0 left-0 w-full h-full md:bg-[#0000006c] md:mt-0 mt-80 flex items-end justify-end">
        <div className="md:w-[550px] w-full h-[430px]  flex flex-col justify-center relative md:p-10 py-10 px-3 bg-white">
          <div className="w-full h-5 b-red-bg absolute top-10 -left-10"></div>
          <h1 className="font-bold md:text-4xl text-2xl md:mt-5">
            Affordable House Shifting Services in Dubai, UAE
          </h1>
          <p className="b-text mt-5">
            Nice Movers is a leading moving and packing company for house
            shifting services in overall UAE. We offer affordable rates from
            other moving companies in UAE.
          </p>
          <Button callBtn className="mt-5 b-red-bg">
            Call Now: Home Movers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
