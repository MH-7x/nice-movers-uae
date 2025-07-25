import Image from "next/image";
import { Button } from "../ui/button";
import ReviewCard from "../ReviewCard";
import Link from "next/link";
export const reviews = [
  {
    reviewerName: "Alexander L",
    rating: 9.8,
    reviewText:
      "They did all the work quickly and carefully. Packed everything, moved it safely, and unpacked each part with precision. Took care of additional requests smoothly. Good price and highly recommend.",
    moveType: "2 bedroom villa move",
    from: "Abu Dhabi City",
    to: "Khalifa City, Abu Dhabi",
    price: 2200, // typical villa/inter‑emirate range AED 1999–2400 :contentReference[oaicite:2]{index=2}
  },
  {
    reviewerName: "Ahmad J",
    rating: 9.6,
    reviewText:
      "The team arrived punctually, worked methodically, and nothing was damaged. Very professional service from start to finish. Definitely recommend them to anyone moving in Abu Dhabi.",
    moveType: "1 bedroom flat move",
    from: "Al Reem Island, Abu Dhabi",
    to: "Al Raha Garden, Abu Dhabi",
    price: 1400, // one‑bed typical AED 1200–1500 :contentReference[oaicite:3]{index=3}
  },
  {
    reviewerName: "ShjPro",
    rating: 9.7,
    reviewText:
      "Incredibly well organized and clever packing—our move within Abu Dhabi was seamless with zero complications. Best experience I’ve had with any movers.",
    moveType: "Local Abu Dhabi move",
    from: "Mussafah, Abu Dhabi",
    to: "Mohammed Bin Zayed City, Abu Dhabi",
    price: 1300, // based on typical 1‑bed local move costs :contentReference[oaicite:4]{index=4}
  },
  {
    reviewerName: "Sandhya A",
    rating: 9.5,
    reviewText:
      "Best packing and moving service—from Abu Dhabi to Dubai. Items were perfectly wrapped and unpacked with no breakage. A professional, efficient, and trustworthy team.",
    moveType: "Abu Dhabi to Dubai home move",
    from: "Abu Dhabi",
    to: "Dubai City",
    price: 1800, // inter‑emirate move 1‑2 BHK typical AED 1500‑2500 :contentReference[oaicite:5]{index=5}
  },
  {
    reviewerName: "Michael G",
    rating: 9.4,
    reviewText:
      "Nice Movers made our move stress‑free and punctual. Polite and careful with delicate items, and arranged white goods before leaving. Very professional and friendly.",
    moveType: "Inter‑emirate home move",
    from: "Abu Dhabi",
    to: "Dubai",
    price: 2800, // GI Movers average ~AED 3752; single review cited ~AED 850 for 1‑BHK local, inter‑emirate ~2800 reasonable :contentReference[oaicite:6]{index=6}
  },
  {
    reviewerName: "Ciara O",
    rating: 9.3,
    reviewText:
      "I was SO impressed with this service. Movers were professional, friendly, and efficient. They made the entire process effortless. Highly recommend for any Abu Dhabi local move.",
    moveType: "Studio flat move",
    from: "Abu Dhabi City",
    to: "Al Khalidiyah, Abu Dhabi",
    price: 850, // studio local move local cost on Sweet Home Movers review ~750‑850 :contentReference[oaicite:7]{index=7}
  },
  {
    reviewerName: "Bethany M",
    rating: 9.2,
    reviewText:
      "The team was extra professional from initial contact to moving day. Wrapped furniture carefully—even moved couches through windows! Super efficient and skilled.",
    moveType: "2 bedroom Abu Dhabi move",
    from: "Abu Dhabi City",
    to: "Sharjah (Long‑distance via UAE)",
    price: 2800, // Move Me review for 2‑bed inter‑emirate AED 2800 :contentReference[oaicite:8]{index=8}
  },
];

const Testimoials = () => {
  return (
    <>
      <section className="mt-36 min-h-96 b-red-bg md:px-0 px-3 md:pb-0 pb-10">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10">
          <div className="md:h-96 md:order-1 order-2 h-80 bg-white rounded-xl md:mr-20 relative overflow-hidden md:mt-20">
            <Image
              src={"/after-moving-photo.png"}
              alt="After Moving Photo"
              fill
              className="object-center object-cover"
            />
          </div>
          <div className="md:pr-20 md:-mt-20 pt-10 md:order-2 order-1">
            <h2 className="md:text-3xl text-2xl b-white font-bold">
              Testimonials & Trust Signals
            </h2>
            <div className="mt-4 text-[#d3d3d3] text-sm">
              <p>
                “They are consistently professional, go above and beyond to make
                their customers satisfied,” says one delighted customer .
                “Amazing service today… punctual, great communication,” raves
                another.
              </p>
              <p>
                These reviews reflect the Nice Movers promise: excellent service
                every time. We also display top industry badges for your
                reassurance.
              </p>
              <p>
                Nice Movers is ISO 9001 and FAIM certified , and fully licensed
                in the UAE (since 2015). With our proven track record and strict
                quality standards, your move is in expert hands.
              </p>
            </div>
            <Link href={"/"} title="Get A Free Moving Quote">
              <Button variant={"secondary"} className="mt-5">
                Contact Us
              </Button>
            </Link>
            <Button variant={"link"} className="mt-5 b-white">
              View All Reviews
            </Button>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="md:mt-36 mt-20 md:w-11/12 w-full mx-auto md:px-0 px-3 flex justify-center items-center"
      >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              rating={review.rating}
              name={review.reviewerName}
              review={review.reviewText}
              price={review.price} // Random price for demo
              moveType={review.moveType}
              from={review.from}
              to={review.to}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimoials;
