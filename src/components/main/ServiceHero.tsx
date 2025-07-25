import Image, { StaticImageData } from "next/image";
import React from "react";

import { Button } from "../ui/button";
const ServiceHero = ({
  title,
  desc,
  image,
  btnText,
}: {
  title: string;
  desc: string;
  image: { alt: string; src: StaticImageData };
  btnText: string;
}) => {
  return (
    <section
      className="w-full relative md:h-[550px] h-[400px]"
      id="hero-section"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        placeholder="blur"
        loading="eager"
        className="absolute object-cover object-center"
        quality={90}
      />
      <div className="absolute top-0 left-0 w-full h-full md:bg-[#0000006c] md:mt-0 mt-80 flex items-end justify-end">
        <div className="md:w-[550px] w-full h-[430px]  flex flex-col justify-center relative md:p-10 py-10 px-3 bg-white">
          <div className="w-full h-5 b-red-bg absolute top-10 -left-10"></div>
          <h1 className="font-bold md:text-4xl text-2xl md:mt-5">{title}</h1>
          <p className="b-text mt-5">{desc}</p>
          <Button callBtn className="mt-5 b-red-bg">
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
