import ServiceHero from "@/components/main/ServiceHero";
import imagSrc from "../../../../public/villa-movers-in-dubai.jpg";
import ContactSection from "@/components/main/ContactSection";
import SubService from "@/components/main/SubService";
import { Button } from "@/components/ui/button";
import Process from "@/components/main/Process";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/components/main/testimonials";
import Locations from "@/components/main/Locations";
import { FAQs } from "@/components/main/FAQs";
import Link from "next/link";
import CTA from "@/components/main/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateServiceSchema } from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { VillaMovingRawFaqs } from "../../../../List";
import Script from "next/script";
import { type Metadata } from "next";

const content = [
  {
    title: "Professional & Experienced",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          Selecting the right mover is critical, and our team brings the
          expertise and equipment needed for villa relocations
        </p>
        <p className="mt-1 text-sm b-text">
          We’re fully trained to handle delicate and bulky items alike.
        </p>
      </>
    ),
  },
  {
    title: "Affordable, Transparent Pricing",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          We offer competitive, budget-friendly rates and no hidden fees.
        </p>
        <p className="mt-1 text-sm b-text">
          Free online estimates for villa moving help you plan in advance , and
          our pricing has earned praise. So lets make a phone call to us.
        </p>
      </>
    ),
  },
  {
    title: "All-in-One Service",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          As a full-service moving company, we not only move your furniture but
          also pack it.
        </p>
        <p className="mt-1 text-sm b-text">
          Our villa movers and packers in Dubai cover packing, loading,
          transport, and storage so you don’t lift a finger.
        </p>
      </>
    ),
  },
  {
    title: "Top-Rated Reviews",
    desc: (
      <>
        <p className="mt-3 text-sm b-text">
          Customers rate us highly for service and value.
        </p>
        <p className="mt-1 text-sm b-text">
          Our track record of 5-star feedback shows we’re among the top-rated
          villa movers in Dubai.
        </p>
      </>
    ),
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return MetadataTemplate({
    data: {
      meta: {
        title: "Villa Movers in Dubai | Nice Movers – Free Online Estimates",
        desc: "Looking for top-rated villa movers in Dubai? Nice Movers offers cheap, professional villa movers in Dubai with free online estimates, transparent pricing, and 24/7 support.",
      },
      image: {
        path: "/villa-movers-in-dubai.jpg",
        alt: "Villa Movers in Dubai",
      },
      path: "/villa-movers-in-dubai",
    },
  });
}

const JsonLd = generateServiceSchema({
  serviceName: "Villa Movers in Dubai",
  serviceDescription:
    "Looking for top-rated villa movers in Dubai? Nice Movers offers cheap, professional villa movers in Dubai with free online estimates, transparent pricing, and 24/7 support.",
  serviceUrl: APP.url + "/villa-movers-in-dubai",
  priceRange: "1200 AED - 5000 AED",
  imageUrls: [APP.url + "/villa-movers-in-dubai.jpg"],
});

const faqJsonLd = generateFAQSchema(VillaMovingRawFaqs);

const VillaMoversPage = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JsonLd }}
        strategy="beforeInteractive"
      />
      <Script
        id="faqs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        strategy="beforeInteractive"
      />
      <main className="z-20 md:mt-[124px] mt-[69px] max-w-[1400px] mx-auto bg-white">
        <ServiceHero
          title="Villa Movers in Dubai"
          desc="Nice Movers is one of the top-rated villa movers in Dubai, offering professional relocation services
         at budget-friendly rates. Contact us today to get a online estimate for your villa move."
          btnText="Call Now: Villa Movers"
          image={{
            src: imagSrc,
            alt: "villa movers in dubai",
          }}
        />
        <section className="max-w-4xl md:px-0 px-3 mx-auto md:mt-20 mt-80 md:text-xl text-base flex flex-col gap-y-2 b-text">
          <p>
            We understand moving a large home can be stressful, so our expert
            team provides fast online estimates and end-to-end support for villa
            moving in dubai.
          </p>
          <p>
            From the moment you book a free quote to unloading in your new
            villa, we handle every detail.
          </p>
          <p>
            With experienced movers, proper equipment, and affordable pricing,
            we make your Dubai villa move smooth and worry-free.
          </p>
        </section>
        <ContactSection
          title="Get online estimates for villa moving in Dubai"
          desc={
            <>
              We offer simple process to get estimate prices for villa moving in
              dubai. Fill the form and set relex in you villa, We will manage
              the rest.
              <br />
              We offer moving services for all sizes of villa like 2-bedroom
              villa, 3-bedroom villa, 4-bedroom villa, 5-bedroom villa.
            </>
          }
        />
        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold text-center">
            Why Choose Our Villa Movers in Dubai
          </h2>
          <p className="md:text-lg b-text mt-3 max-w-2xl mx-auto text-center">
            Choosing Nice Movers means placing your trust in a fully licensed,
            insured, and professionally vetted team.
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-3 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl b-text">{box.title}</h3>
                {box.desc}
                <div className="border-b-2 w-full mt-5 border-[#c00000]"></div>
              </div>
            ))}
          </div>
        </section>

        <SubService />
        <section
          id="villa-movers-prices"
          className="max-w-4xl md:px-0 px-3 mx-auto mt-36"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Villa Movers in Dubai Prices
          </h2>
          <div className="mt-8 md:text-lg b-text flex flex-col gap-y-2">
            <p className="">
              We believe in complete transparency when it comes to the cost of
              your move.
            </p>
            <p className="">
              Key factors that determine the final price include the number of
              bedrooms in your villa, the travel distance, and any add-on
              services you select, such as storage or post-move cleaning.
            </p>
            <p className="">
              A sample price range for a standard move is typically AED
              1,200–1,800 per truckload.
            </p>
            <p className="">
              For a precise and instant quote, use our villa movers in dubai
              price online estimates tools.
            </p>
            <p className="">
              Factors affecting your villa moving price include:
            </p>
            <ul className="border-t border-[#c00000] pt-5">
              <li>
                <b>Villa Size & Belongings: </b> More rooms and furniture mean
                more labor and volume. Larger villas with more items will
                naturally cost more.
              </li>
              <li>
                <b>Distance: </b> Local moves within Dubai are generally less
                expensive than long-distance moves to other emirates.
              </li>
              <li>
                <b>Extra Services: </b> Full packing, fine-art handling, or
                disassembly services add to the quote. Premium packing materials
                and additional crew raise costs.
              </li>
              <li>
                <b>Complexity: </b> Stairs, elevator access, or tight corners
                may require more time and manpower, increasing labor charges.
              </li>
            </ul>
          </div>

          <Button className="mt-8 b-red-bg" size={"lg"}>
            Get A Price Now
          </Button>
        </section>
        <Process
          title={
            <>
              How Our Villa Moving <br /> Process Works
            </>
          }
          cus={[
            {
              title: "Book & Schedule (24/7 / open now)",
              desc: "Contact us anytime to book your move. Our 24/7 availability means we're always ready to help.",
            },
            {
              title: "On-Site Survey (free, no-obligation)",
              desc: "We conduct a free, no-obligation on-site survey to accurately assess your moving requirements.",
            },
            {
              title: "Packing Day",
              desc: "Our professional packers will arrive on the scheduled day to carefully pack all your belongings.",
            },
            {
              title: "Goods Transport",
              desc: "Your items will be safely transported in our multiple sizes of  trucks to your new location.",
            },
            {
              title: "Unpacking & Setup",
              desc: "Upon arrival, we will unpack your items and help set up your new home.",
            },
            {
              title: "Post-Move Support",
              desc: "Our service doesn’t end when the last box is unpacked. We are available for any post-move support you may need.  ",
            },
          ]}
        />
        <Locations
          id="recently-completed-moves"
          title="Villa Movers in Dubai Reviews "
          desc={
            <>
              <p>
                We are proud of the positive feedback we receive. Here are a few
                snippets from our recent villa movers in dubai reviews
              </p>
              <p>
                Our trained and professional have completed thousands of moves,
                ensuring that your goods are in safe hands throughout the entire
                process.
              </p>
              <p>
                Here are some of our UAE&apos;s clients reviews about their
                moving experience with us.
              </p>
            </>
          }
          img={{
            src: "/after-house-shifting-photo.png",
            alt: "nice movers team after completing villa shifting service",
          }}
        />
        <section
          id="reviews"
          className="md:mt-36 mt-20 md:w-11/12 w-full mx-auto md:px-0 px-3 flex justify-center items-center"
        >
          <div className="md:mt-0 mt-52 grid md:grid-cols-3 grid-cols-1 gap-5">
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
        <FAQs
          faqs={[
            {
              question: "How much does it cost to move a villa in Dubai?",
              answer: (
                <>
                  <p>
                    The villa movers in dubai price depends on factors like
                    villa size, distance, and required services.
                  </p>
                  <p>One truckload can cost you between AED 1000 – AED 1500.</p>
                  <p>
                    A 3-bedroom villa move typically runs AED 4,000–5,000 .
                    Luxury or larger villas can cost more.
                  </p>
                  <p>
                    Nice Movers offers an{" "}
                    <Link href={"/contact-us"}>online estimator</Link> so you
                    can get an accurate quote for your move.
                  </p>
                </>
              ),
            },
            {
              question: "Do you offer packing materials? ",
              answer: (
                <>
                  <p>
                    Yes, we provide high-quality, eco-friendly packing materials
                    as a part of our comprehensive packing service.
                  </p>
                </>
              ),
            },
            {
              question: "How useful are villa movers and packers in Dubai?",
              answer: (
                <>
                  <p>
                    Villa movers and packers make the moving process much
                    smoother by handling everything in an organized way.
                  </p>
                  <p>
                    They label all items clearly, ensuring you face no hassle
                    when unpacking and setting up your new home.
                  </p>
                </>
              ),
            },
            {
              question: "Do you offer villa moving services in all over UAE?",
              answer: (
                <>
                  <p>
                    Although we specialize in villa relocations in Dubai and Abu
                    Dhabi, our services extend across all UAE emirates —
                    including Sharjah, Ras Al Khaimah, Fujairah, Ajman, and Umm
                    Al Quwain — providing professional villa moving solutions no
                    matter where you&apos;re located.
                  </p>
                </>
              ),
            },
            {
              question: "What type of Villa moving services are you offering?",
              answer: (
                <>
                  <p>
                    Although we specialize in villa relocations in Dubai and Abu
                    Dhabi, our services extend across all UAE emirates —
                    including Sharjah, Ras Al Khaimah, Fujairah, Ajman, and Umm
                    Al Quwain — providing professional villa moving solutions no
                    matter where you&apos;re located.
                  </p>
                </>
              ),
            },
            {
              question: "Do you serve Dubai Silicon Oasis and other areas?",
              answer: (
                <>
                  <p>
                    Yes. We cover all Dubai neighborhoods, including Dubai
                    Silicon Oasis, Palm Jumeirah, Arabian Ranches, Jumeirah,
                    Emirates Hills, and more.
                  </p>
                  <p>
                    Whether you’re moving within Silicon Oasis or to any villa
                    community, Nice Movers has you covered.
                  </p>
                </>
              ),
            },
            {
              question: "What type of Villa moving services are you offering?",
              answer: (
                <>
                  <p>
                    Our Professional Moving Services – Tailored for Every
                    Relocation Need
                  </p>
                  <h4 className="font-medium text-base">Villa Moving</h4>
                  <p>
                    We provide complete villa relocation services across the
                    UAE, handling everything from secure packing and careful
                    transportation to organized unpacking and setup — ensuring a
                    smooth and stress-free experience.
                  </p>
                  <h4 className="font-medium text-base">Luxury Villa Moving</h4>
                  <p>
                    Our team is highly experienced in handling luxury
                    relocations. We use premium packing methods to safely move
                    high-value items such as designer furniture, artwork,
                    antiques, and delicate décor.
                  </p>
                  <h4 className="font-medium text-base">Residential Moving</h4>
                  <p>
                    Whether you&apos;re shifting to a new apartment, townhouse,
                    or home, our residential moving services ensure a smooth,
                    reliable, and timely transition tailored to your unique
                    needs.
                  </p>
                </>
              ),
            },
            {
              question: "Are your services cheap and budget-friendly?",
              answer: (
                <>
                  <p>
                    We aim to be among the cheap villa movers in Dubai without
                    cutting corners.
                  </p>
                  <p>
                    By working efficiently and offering transparent quotes, we
                    keep costs low while maintaining high quality. Our
                    competitive pricing has satisfied many clients looking for
                    an affordable move
                  </p>
                </>
              ),
            },
            {
              question: "Can I read your villa movers in Dubai reviews? ",
              answer: (
                <>
                  <p>
                    Yes, you can read our customer reviews on our website and on
                    independent platforms like Google
                  </p>
                </>
              ),
            },
          ]}
        />
        <section
          id="services-areas"
          className="max-w-4xl mx-auto md:px-0 px-3 mt-36"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Dubai Service Areas
          </h2>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>
              Nice Movers operates across all Dubai communities. We specialize
              in villa moves, so our service areas include:
            </p>

            <ul className="border-t border-[#c00000] pt-5">
              <li>
                <b>&rarr; Dubai Silicon Oasis (DSO): </b> covering villa
                complexes and neighborhoods.
              </li>
              <li>
                <b>&rarr; Arabian Ranches & The Meadows: </b> well-known villa
                communities
              </li>
              <li>
                <b>&rarr; Jumeirah area: </b> (incl. Palm Jumeirah, Jumeirah
                Lakes Towers) – beachfront and inland villas
              </li>
              <li>
                <b>&rarr; Emirates Hills & The Springs: </b> high-end villa
                districts.
              </li>
              <li>
                <b>&rarr; Dubailand, Al Barsha, Al Quoz, and beyond: </b> any
                Dubai location for your villa move.
              </li>
            </ul>
          </div>

          <Button callBtn className="mt-8 b-red-bg" size={"lg"}>
            Call Villa Movers
          </Button>
        </section>
        <CTA
          title={
            <>
              Ready to Move Your Villa? <br /> Contact Nice Movers
            </>
          }
          desc={
            <>
              <p className="text-[#d6d6d6] max-w-2xl mt-3">
                Ready to schedule your move? Reach out now for personalized
                assistance.
              </p>
              <ul className="max-2-2xl mt-3 text-[#d6d6d6] list-disc pl-5">
                <li>
                  {" "}
                  <span className="font-medium">Call Now</span>: +971 563560017
                  (24/7 support)
                </li>
                <li>
                  {" "}
                  <span className="font-medium">WhatsApp</span>: +971 563560017
                  (chat with our moving expert)
                </li>
                <li>
                  {" "}
                  <span className="font-medium">Email/Contact Us</span>: Visit
                  our
                  <Link href={"/contact-us"}>website’s contact page</Link> to
                  send a message.
                </li>
                <li>
                  {" "}
                  <span className="font-medium">Get a Free Quote</span>: Fill
                  out the online form or click “Get Quote” on our site for an
                  instant estimate.
                </li>
              </ul>
            </>
          }
        />
        <h3 className="mt-20 md:px-0 px-3 text-xl font-medium max-w-3xl mx-auto b-red">
          Don’t wait – let Nice Movers make your Dubai villa relocation easy and
          affordable. Call or message us today for a free quote!
        </h3>
        <p className="mt-10 max-w-3xl md:px-0 px-3 mx-auto b-text pb-10">
          <b>Sources</b>: We’ve incorporated industry insights and customer
          feedback throughout, including data on moving costs and expert advice
          on professional moving services . Customer testimonials are drawn from
          verified reviews . All information is up-to-date as of 2025.
        </p>
      </main>
    </>
  );
};

export default VillaMoversPage;
