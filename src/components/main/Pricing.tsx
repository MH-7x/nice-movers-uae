import React from "react";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="mt-36 b-text-bg grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div className="md:pl-20 md:py-16 pt-16 md:px-0 px-3">
        <h2 className="text-3xl font-bold b-white">Our Pricing Snapshot</h2>
        <div className="text-[#cdcdcd] mt-5 flex flex-col gap-2">
          <p>
            For transparency, here are some example rates (final price may vary
            based on location and services):
          </p>
          <p>
            A studio apartment move (with packing) starts from about AED 550;
          </p>
          <p>
            A 1-bedroom move is around AED 600 (no packing) or AED 800 (with
            packing).
          </p>
          <p>
            Larger homes are AED 1,200–2,000 (single-story villas) and AED
            2,000–3,000 (double-story), up to AED 3,000–4,500 for three-story
            villas.
          </p>
          <p>
            {" "}
            For an exact quote tailored to your move, use our free online quote
            form or contact us – there are no hidden fees.
          </p>
        </div>
        <div className="mt-5 flex gap-x-3">
          <Link
            href={"/contact-us"}
            title="Get A Free Moving Quote"
            className={buttonVariants({ className: "b-red-bg" })}
          >
            Get A Quote
          </Link>
          <Link
            title="About Nice Movers"
            href={"/about-us"}
            className={buttonVariants({ variant: "secondary" })}
          >
            About Us
          </Link>
        </div>
      </div>
      <div className="bg-red-300 min-h-80 relative">
        <Image
          src={"/nice-movers-trucks-vans.png"}
          alt="Nice Movers trucks and Vans"
          fill
          sizes="(min-width:768px) 50vw, 100vw"
          className="absolute object-center object-cover"
        />
      </div>
    </section>
  );
};

export default Pricing;
