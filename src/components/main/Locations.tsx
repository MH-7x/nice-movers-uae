import Image from "next/image";

const Locations = () => {
  return (
    <section
      id="service-locations"
      className="mt-36 h-96 b-red-bg md:px-0 px-3"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10">
        <div className="md:pl-20 md:-mt-20 pt-10">
          <h2 className="md:text-3xl text-2xl b-white font-bold">
            Coverage & Locations In United Arab Emairtes
          </h2>
          <div className="mt-4 text-[#d3d3d3] text-sm">
            <p>
              Nice Movers serves all of the UAE. We have branches and teams in
              Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, Al Ain
              and beyond.{" "}
            </p>
            <p>
              Our local offices and experts mean you get the same personalized
              service coast-to-coast.
            </p>
            <p>
              As noted by industry leaders, we cover the entire region –
              literally “anywhere in Dubai, Abu Dhabi, Sharjah… or anywhere in
              between”
            </p>
          </div>
        </div>
        <div className="md:h-96 h-80 bg-white rounded-xl md:ml-20 relative overflow-hidden md:mt-20">
          <Image
            src={"/movers-in-uae-2.png"}
            alt="moving trucks of Nice Movers UAE"
            fill
            className="object-bottom object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
