import Link from "next/link";

const emirates = [
  { title: "Movers and Packers in Dubai", link: "/movers-and-packers-in-dubai" },
  { title: "Movers and Packers in Sharjah", link: "/movers-and-packers-sharjah" },
  { title: "Movers in Ajman", link: "/movers-in-ajman" },
  { title: "Movers in Ras Al Khaimah", link: "/movers-in-ras-al-khaimah" },
];

const services = [
  { title: "House Shifting Services", link: "/house-shifting-services" },
  { title: "Villa Movers in Dubai", link: "/villa-movers-in-dubai" },
  { title: "Office Movers in Dubai", link: "/office-movers-in-dubai" },
];

/** Contextual links between emirate and service pages. `current` is the page's own path (excluded). */
const RelatedLinks = ({ current }: { current: string }) => {
  const otherEmirates = emirates.filter((e) => e.link !== current);
  const otherServices = services.filter((s) => s.link !== current);
  return (
    <section
      id="related-links"
      className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 grid md:grid-cols-2 grid-cols-1 gap-10"
    >
      <div>
        <h2 className="md:text-2xl text-xl font-bold b-red">
          We Also Move You Across the UAE
        </h2>
        <ul className="mt-4 space-y-2 b-text">
          {otherEmirates.map((e) => (
            <li key={e.link}>
              <Link href={e.link} className="underline underline-offset-4 hover:text-[#c00000]">
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="md:text-2xl text-xl font-bold b-red">Related Moving Services</h2>
        <ul className="mt-4 space-y-2 b-text">
          {otherServices.map((s) => (
            <li key={s.link}>
              <Link href={s.link} className="underline underline-offset-4 hover:text-[#c00000]">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedLinks;
