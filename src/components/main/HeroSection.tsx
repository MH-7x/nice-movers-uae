import BuildingsSvg from "../BuildingsSvg";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <>
      <section
        id="main-hero-section"
        className="max-w-3xl mx-auto text-center md:pt-20 pt-10 pb-10 md:px-0 px-3"
      >
        <h1 className="md:text-[52px] text-2xl md:leading-[1.15] font-bold b-red uppercase">
          Best Packers And Movers in UAE -{" "}
          <span className="underline underline-offset-4">Nice Movers</span>
        </h1>
        <p className="b-text md:mx-10 md:text-lg mt-3">
          Since 2015, Nice Movers has been delivering professional and
          affordable movers and packers UAE services for homes, offices, and
          villas.
        </p>
        <div className="flex items-center gap-x-5 w-full justify-center mt-5">
          <Button className={"b-red-bg"} size={"lg"}>
            CALL NOW
          </Button>
          <Button size={"lg"}>OUR SERVICES</Button>
        </div>
      </section>
      <BuildingsSvg />
    </>
  );
};

export default HeroSection;
