import Image from "next/image";
import { ReactNode } from "react";

const Locations = ({
  title,
  desc,
  img,
  id,
}: {
  title: string;
  desc: ReactNode;
  img: { src: string; alt: string };
  id: string;
}) => {
  return (
    <section id={id} className="mt-36 h-96 b-red-bg md:px-0 px-3">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10">
        <div className="md:pl-20 md:-mt-20 pt-10">
          <h2 className="md:text-3xl text-2xl b-white font-bold">{title}</h2>
          <div className="mt-4 text-[#eaeaea] text-sm">{desc}</div>
        </div>
        <div className="md:h-96 h-80 bg-white rounded-xl md:ml-20 relative overflow-hidden md:mt-20">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-bottom object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
