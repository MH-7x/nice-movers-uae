import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Content = () => {
  return (
    <section
      className="b-red-bg w-full grid md:grid-cols-2 md:gap-20 gap-10 mt-36 items-center"
      id="about-our-company-section"
    >
      <div id="content" className="md:pl-20 md:text-lg b-white pt-10 px-3">
        <p className="mb-2">
          Our fully licensed, insured team manages every detail from premium
          packing and furniture dismantling to safe transport and reassembly –
          ensuring a truly stress-free relocation.
        </p>
        <p className="mb-2">
          We’ll treat your move with the same care and efficiency trusted
          experts promise.
        </p>
        <p className="mb-2">
          Ready to move? Get Your Free Moving Quote today and enjoy seamless
          relocation with peace of mind across the UAE!
        </p>
        <div className="flex items-center gap-x-5 mt-8">
          <Link href={"/"} title="About Nice Movers">
            <Button className="b-text-bg">About Company</Button>
          </Link>
          <Link href={"/"} title="Get A Free Moving Quote">
            <Button variant={"secondary"}>Get A Quote</Button>
          </Link>
        </div>
      </div>
      <div id="image" className="relative md:h-[500px] h-[400px] bg-red-200">
        <Image
          alt="Licensed and Certified Moving Company"
          src={"/licensed-certified-badge.jpg"}
          fill
          loading="lazy"
          className="absolute object-center object-cover"
        />
      </div>
    </section>
  );
};

export default Content;
