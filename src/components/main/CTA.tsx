import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="md:max-w-11/12 w-full mx-auto mt-36 md:rounded-3xl overflow-hidden relative h-[500px]">
      <Image
        src={"/nice-movers-team-work.png"}
        alt="nice movers team on work"
        fill
        className="absolute object-cover object-center"
      />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-start justify-center bg-gradient-to-r from-[#c00000ef] md:via-[#c00000c9] via-[#c00000b8] md:to-[#c0000030] to-[#c00000b8] md:pl-20 md:px-0 px-3">
        <h2 className="md:text-4xl text-2xl font-bold b-white text-shadow-2xs">
          Ready To Move <br /> With Nice Movers!
        </h2>
        <p className="text-[#cdcdcd] max-w-2xl mt-3">
          Book Your Move Today! Contact Nice Movers now to reserve your slot.
          Call us at +971‑XXX‑XXXX or start a live chat with our relocation
          experts.
        </p>
        <p className="text-[#cdcdcd] max-w-2xl mt-1">
          With Nice Movers, you’re choosing an insured, licensed team that’s
          trusted across the UAE – let us make your next move smooth, safe and
          hassle-free!
        </p>
        <div className="mt-5 flex gap-x-3">
          <Link title="Get A Free Moving Quote" href={"/"}>
            <Button variant={"secondary"}>Get A Quote</Button>
          </Link>
          <Button callBtn className="b-white" variant={"link"}>
            Call : +971563560017
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
