import ServiceHero from "@/components/main/ServiceHero";
import imagSrc from "../../../../public/office-movers-hero-landscape.jpg";
import ServiceContent from "@/components/main/ServiceContent";
import {
  ClockArrowDownIcon,
  FileSignature,
  FileTextIcon,
  UserCheck2Icon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SerWhyChooseUs from "@/components/main/SerWhyChooseUs";
import { Button } from "@/components/ui/button";
import Process from "@/components/main/Process";
import { FAQs } from "@/components/main/FAQs";
import CTA from "@/components/main/CTA";
import ContactSection from "@/components/main/ContactSection";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateServiceSchema } from "@/lib/ServiceSchemaGen";
import { APP } from "@/lib/App";
import { OfficeMoversRawFaqs } from "../../../../List";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import { type Metadata } from "next";
import Link from "next/link";
const content = [
  {
    title: "Detailed Pre-Move Planning & Project Management",
    desc: (
      <>
        <p>
          A successful move starts with a awless plan. One of our senior move
          coordinators will conduct a thorough on-site survey to understand your
          specic requirements.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                We then create a customized moving plan and timeline,
                coordinating with your building management to ensure all
                logistics are handled professionally.
              </p>
              <p>
                These are the hallmarks of our professional oce relocation
                services.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Professional Packing, Labeling, and Unpacking",
    desc: (
      <>
        <p>
          Our highly trained crew uses a systematic approach to ensure every
          item is handled with care.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                We use high-quality packing materials—from sturdy boxes for les
                to specialized wrapping for delicate items.
              </p>
              <p>
                Each box is clearly labeled by department and contents, making
                the unpacking and setup process at your new location organized
                and efficient
              </p>
              <p>
                As expert office movers and packers, we save you time and
                eliminate confusion.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Specialized IT & Server Relocation",
    desc: (
      <>
        <p>
          Your technology is the backbone of your business. Our specialized IT
          movers are trained to safely decommission, pack, transport, and
          recommission your entire tech infrastructure.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                We use anti-static bubble wrap and custom crating for servers,
                computers, printers, and network equipment to minimize risk and
                get you back online fast.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Office Furniture Disassembly and Reassembly",
    desc: (
      <>
        <p>
          Our skilled team dismantles and reassembles office furniture, cubicles
          and shelving.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                From conference tables to desks and cabinets, we ensure your
                office furniture movers handle each piece safely
              </p>
              <p>
                This specialized service prevents damage to both furniture and
                office infrastructure.
              </p>
              <p>
                As professional oce furniture movers, we ensure everything is
                set up correctly in your new space, ready for your team.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Secure Transportation & Modern Fleet",
    desc: (
      <>
        <p>
          Your assets are safe with us. We operate a eet of clean, modern, and
          fully-enclosed moving trucks.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                This ensures your equipment, furniture, and documents are
                protected from the elements and securely transported to their
                destination.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
  {
    title: "Flexible Short & Long-Term Storage Solutions",
    desc: (
      <>
        <p>
          If you have a gap between moving out and moving in, or simply need to
          decluer, we can help.
        </p>

        <Accordion type="single" collapsible className="w-full pb-0">
          <AccordionItem value="apartment-moving-detials">
            <AccordionTrigger>See all details..</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 ">
              <p>
                We offer exible and secure oce moving and storage Dubai
                solutions in our clean, climate-controlled facilities. Your
                assets will be kept safe until you are ready for them.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </>
    ),
  },
];

export const metadata: Metadata = MetadataTemplate({
  data: {
    meta: {
      title:
        "Affordable Office Movers in Dubai | Best Office Relocation Services",
      desc: "Seamless office relocation in Dubai. Nice Movers oers professional oce movers and packers, specializing in IT moving & minimizing business disruption. Get your free, no-obligation quote today!",
    },
    path: "/office-movers-in-dubai",
    image: {
      path: "/office-movers-in-dubai.jpg",
      alt: "Office Movers in Dubai",
    },
  },
});
const JsonLd = generateServiceSchema({
  serviceName: "Office Movers in Dubai",
  serviceDescription:
    "Seamless office relocation in Dubai. Nice Movers oers professional oce movers and packers, specializing in IT moving & minimizing business disruption. Get your free, no-obligation quote today!",
  serviceUrl: APP.url + "/house-shifting-services",
  priceRange: "1,000 AED - 13,000 AED",
  imageUrls: [APP.url + "/office-movers-in-dubai.jpg"],
});

const faqJsonLd = generateFAQSchema(OfficeMoversRawFaqs);

const OfficeMoversPage = () => {
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
          title="Office Movers in Dubai - Affordable Prices"
          desc="As one of the best office movers in Dubai, Nice Movers offers end-to-end corporate moving
                solutions tailored to your needs. Get a free quote for your office relocation today."
          btnText="Call Now: Office Movers"
          image={{
            src: imagSrc,
            alt: "A team of professional office movers from Nice Movers conducting an organized office relocation in Dubai.",
          }}
        />
        <ServiceContent
          title="Best Office Relocation Services in Dubai, UAE"
          desc={
            <>
              <p>
                Planning an oce move requires a team of professional oce movers
                in Dubai you can trust.
              </p>
              <p>
                Our professional office movers in Dubai bring years of
                experience packing, transporting, and reinstalling office assets
                — from delicate IT equipment to bulky furniture — so you can
                focus on your core business
              </p>
              <p>
                We emphasize trust, efficiency and value, guaranteeing seamless
                relocations that minimize downtime.
              </p>
              <p>
                Whether you’re moving locally within Dubai or setting up a new
                branch, our team is here to manage every detail.
              </p>
            </>
          }
          img={{
            src: "/office-movers-in-dubai.jpg",
            alt: "A team of professional office movers from Nice Movers conducting an organized office relocation in Dubai.",
          }}
        />
        <section
          id="our-experties"
          className="mt-36 md:w-5xl mx-auto grid md:grid-cols-3 gap-10 grid-cols-1 md:px-0 px-3"
        >
          <div className="flex items-center justify-center flex-col gap-y-3">
            <UserCheck2Icon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Dedicated Move Coordinator
            </h3>
            <p className="b-text text-sm text-center">
              A single point of contact from start to nish.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <FileTextIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Fully Insured & Licensed
            </h3>
            <p className="b-text text-sm text-center">
              Complete peace of mind for your valuable assets.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <ClockArrowDownIcon
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Minimized Business Downtime
            </h3>
            <p className="b-text text-sm text-center">
              Flexible scheduling, including weekends and aer-hours.
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-y-3">
            <FileSignature
              strokeWidth={1.5}
              width={40}
              height={40}
              className="text-[#c00000] "
            />
            <h3 className="md:text-xl text-center b-text">
              Free On-site Survey & Quote
            </h3>
            <p className="b-text text-sm text-center">
              Transparent, no-obligation planning and pricing.
            </p>
          </div>
        </section>
        <ContactSection
          title="Contact Now - Best Office Movers and Packers in Dubai"
          desc={
            <>
              If you&apos;re looking for the best office movers in Dubai, get in
              touch with us today. <br />
              Our team of experienced professionals is here to assist you with
              your relocation needs.
            </>
          }
        />
        <section
          id="villa-movers-prices"
          className="max-w-4xl md:px-0 px-3 mx-auto mt-36"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            Choose Best Office Moving Company
          </h2>
          <div className="mt-8 md:text-lg b-text flex flex-col gap-y-2">
            <p className="">
              Nice Movers serves companies of all sizes, providing comprehensive
              office movers and packers in Dubai services.
            </p>
            <p className="">
              We begin with a free consultation and onsite survey to assess your
              space and timeline.
            </p>
            <p className="">
              Our detailed moving plan and transparent quote cover all aspects
              of your relocation — including packing, loading, transport, and
              setup. During the move, our trained specialists handle each item
              with care.
            </p>
            <p className="">
              We use high-quality packing materials and follow strict procedures
              so that your desks, computers, files and sensitive documents
              arrive safely
            </p>
            <p className="">
              we operate “with no compromise in value and professionalism,”
              providing expert management and resources to meet your move
              expectations
            </p>
          </div>
        </section>

        <section
          id="office-moving-services"
          className="md:w-11/12 w-full mt-36 mx-auto md:px-0 px-3"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold text-center">
            Our Comprehensive Office Relocation{" "}
            <br className="hidden md:block" /> Services in Dubai
          </h2>
          <p className=" b-text mt-3 max-w-3xl mx-auto text-center">
            We offer a complete suite of services designed to handle every
            aspect of your move. Our goal is to provide a true end-to-end
            solution, making your transition as smooth as possible.
          </p>
          <div className="mt-20 md:w-11/12 gap-20 mx-auto grid md:grid-cols-2 grid-cols-1">
            {content.map((box, index) => (
              <div key={index}>
                <h3 className="text-xl b-text font-bold">{box.title}</h3>
                <div className="mt-3 text-sm b-tex">{box.desc}</div>
                <div className="border-b-2 w-full mt-5 border-[#c00000]"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-36 md:w-11/12 mx-auto md:px-0 px-3">
          <h2 className="b-red md:text-4xl text-2xl font-bold">
            Why Choose Us <br /> Trusted Partner in Business Relocation
          </h2>
          <SerWhyChooseUs
            content={[
              {
                title: "Trusted, Experienced Team",
                desc: (
                  <>
                    <p>
                      Nice Movers’ staff are highly trained professionals. Our
                      movers understand the complexities of office relocations
                      and follow proven processes to avoid delays or damage
                    </p>
                    <p>
                      We are fully licensed and insured, so your business assets
                      are protected — industry experts recommend always
                      verifying a mover’s license and insurance before hiring
                    </p>
                  </>
                ),
              },
              {
                title: "Minimized Downtime",
                desc: (
                  <>
                    <p>
                      We know that time is money in business. Our planning and
                      execution focus on reducing downtime.
                    </p>
                    <p>
                      According to Crown Workspace, a full-scale office move
                      should minimize costs and downtime while keeping essential
                      services running
                    </p>
                    <p>
                      Likewise, 800 Truck highlights our commitment to “minimize
                      business disruption” for a quick return to work
                    </p>
                  </>
                ),
              },
              {
                title: "Customized Corporate Moving Solutions",
                desc: (
                  <>
                    <p>
                      Every company is unique. We tailor our services to your
                      schedule and requirements.
                    </p>
                    <p>
                      Whether you need a weekend move, staged relocation, or
                      after-hours support, we adapt accordingly. Our flexible
                      approach ensures a customized business relocation strategy
                      that fits your needs
                    </p>
                  </>
                ),
              },
              {
                title: "Secure and Confidential",
                desc: (
                  <>
                    <p>
                      Confidentiality is key during an office move. We treat
                      client information and valuable equipment with strict
                      security protocols
                    </p>
                    <p>
                      As Allied Moving Services notes, protecting client data
                      and communicating clearly with employees are essential
                      parts of a stress-free move
                    </p>
                  </>
                ),
              },
              {
                title: "Competitive, Transparent Pricing",
                desc: (
                  <>
                    <p>
                      We offer competitive office moving rates and provide
                      detailed quotes upfront.
                    </p>
                    <p>
                      For example, industry data shows one moving truckload in
                      Dubai typically costs around AED 1,000–1,500
                    </p>
                    <p>
                      Your actual cost depends on the size of your office and
                      services required. At Nice Movers, you’ll receive a
                      transparent quote with no hidden fees, so you can plan
                      your budget with confidence.
                    </p>
                  </>
                ),
              },
              {
                title: "Customer Satisfaction",
                desc: (
                  <>
                    <p>
                      Our commitment to service quality has earned us a
                      reputation as a top rated office movers in Dubai.
                    </p>
                    <p>
                      We maintain a 5-star satisfaction standard, reflected in
                      client testimonials. When you hire Nice Movers, you get a
                      partner who cares as much about your business as you do.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </section>
        <section
          id="services-areas"
          className="max-w-4xl mx-auto md:px-0 px-3 mt-36"
        >
          <h2 className="md:text-4xl text-2xl b-red font-bold">
            We Serve All Major Business Hubs in Dubai
          </h2>
          <div className="mt-8 md:text-lg text-sm b-text flex flex-col gap-y-2">
            <p>
              Our deep local knowledge extends across the city. Whether your oce
              is relocating to, from, or within any of Dubai&apos;s bustling
              commercial districts, we have you covered. We regularly serve
              clients in:
            </p>

            <ul className="border-t border-[#c00000] pt-5">
              <li>
                <b>&rarr; Dubai Silicon Oasis (DSO): </b>
              </li>
              <li>
                <b>&rarr; Business Bay: </b>
              </li>
              <li>
                <b>&rarr; Jumeirah area: </b> (incl. Palm Jumeirah, Jumeirah
                Lakes Towers)
              </li>
              <li>
                <b>&rarr; Dubai Media City & Internet City </b>
              </li>
              <li>
                <b>&rarr; DIFC </b> (Dubai International Financial Centre)
              </li>
              <li>
                <b>&rarr; Downtown Dubai </b>
              </li>
              <li>
                <b>&rarr; Deira and Bur Dubai </b>
              </li>
            </ul>
          </div>

          <Button callBtn className="mt-8 b-red-bg" size={"lg"}>
            Call Office Movers
          </Button>
        </section>
        <Process
          title={<>Our Simple 4-Step Oce Moving Process</>}
          cus={[
            {
              title: "Step 1: Free Consultation & On-Site Survey",
              desc: "Contact us to schedule a free, no-obligation consultation. Our move coordinator will visit your oce to assess the volume of items, discuss your timeline, and understand any special requirements. We can also provide initial online estimates for oce movers in Dubai for preliminary planning",
            },
            {
              title: "Step 2: Receive Your Customized Moving Plan & Quote",
              desc: "You’ll receive a detailed proposal outlining the entire moving strategy, including the schedule, services included, and a transparent, xed-price quote.",
            },
            {
              title: "Step 3: Flawless Execution by Professional Movers",
              desc: "On moving day, our uniformed, professional team will arrive on time with all the necessary equipment and materials. They will execute the plan eciently, handling every item with precision and care under the supervision of your dedicated coordinator.",
            },
            {
              title: "Step 4: Post-Move Setup & Support",
              desc: "Our job isn’t done when the last box is unloaded. We assist with unpacking, reassembling furniture, and placing items according to your oor plan. We'll also remove all used packing materials, leaving your new oce clean and ready for business.",
            },
          ]}
        />
        <section id="house-shifting-price" className="md:px-0 px-3 mt-36">
          <h2 className="text-center max-w-2xl font-bold mb-5 mx-auto  md:text-4xl text-2xl b-red">
            Cost Of Office Movers In Dubai
          </h2>
          <p className="max-w-4xl md:text-base text-sm mx-auto text-center b-text">
            We offer competitive rates based on the office size, inventory,
            distance between locations, and technical requirements. Here’s a
            pricing overview:
          </p>
          <div className="overflow-x-auto md:p-4 mt-5">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
              <table className="min-w-full table-auto text-sm sm:text-base">
                <thead className="b-red-bg b-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Office Size</th>
                    <th className="px-6 py-4 text-left">Cost Range (AED)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">Small Office (5–10 staff)</td>
                    <td className="px-6 py-4">AED 1,800 – AED 2,800</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="px-6 py-4">Medium Office (10–25 staff)</td>
                    <td className="px-6 py-4">AED 2,800 – AED 4,500</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">Large Office (25–50 staff)</td>
                    <td className="px-6 py-4">AED 4,500 – AED 7,500</td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition">
                    <td className="px-6 py-4">Enterprise Move (50+ staff)</td>
                    <td className="px-6 py-4">AED 7,500 – AED 13,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="max-w-4xl mt-5  mx-auto text-center b-text">
            But, remember that the final cost depends on different factors like
            <span className="underline underline-offset-4"> volume</span>,
            <span className="underline underline-offset-4"> distance</span> and
            the services you need. Here,there is no need to worry, just contact
            us and get all levels of moving and Packing Services at affordable
            pricing.
          </p>
        </section>
        <FAQs
          faqs={[
            {
              question:
                "What services are included in your office movers and packers package?",
              answer: (
                <>
                  <p>
                    We provide a full range of services: free on-site survey and
                    planning, packing and unpacking, furniture
                    disassembly/reassembly, IT equipment handling, document
                    security, loading/unloading, and post-move cleanup.
                  </p>
                  <p>
                    Our professional office movers in Dubai handle every task,
                    from stacking files to cabling networks. If you need special
                    services (like storage or furniture assembly), we can
                    include those too.
                  </p>
                </>
              ),
            },
            {
              question:
                "How do I minimize business disruption during the move?",
              answer: (
                <>
                  <p>
                    Early planning is key. We coordinate with you to schedule
                    moves during off-peak hours or weekends if possible.
                  </p>
                  <p>
                    We prepare a detailed checklist and keep your staff informed
                    at each stage. By having our team pack efficiently and
                    reassemble quickly, you’ll have minimal downtime. Our focus
                    is on a “quick return to normal” operations.
                  </p>
                </>
              ),
            },
            {
              question: "What is the cost of office movers in Dubai?",
              answer: (
                <>
                  <p>
                    Pricing depends on several factors: office size, distance
                    between locations, number of movers/trucks needed, and any
                    extra services.
                  </p>
                  <p>
                    For context, industry estimates show one moving truckload
                    costs around AED 1,000–1,500. We’ll provide you with a
                    competitive quote customized to your move. Our pricing is
                    transparent, with no hidden charges.
                  </p>
                </>
              ),
            },
            {
              question: "What type of office items and equipment we move",
              answer: (
                <>
                  <p>
                    Our office relocation experts in the UAE are trained to
                    safely handle a wide range of commercial assets:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Executive desks, ergonomic chairs, and partition panels
                    </li>
                    <li>Boardroom tables, AV equipment, whiteboards</li>
                    <li>Reception counters, guest seating, display units</li>
                    <li>Laptops, desktops, monitors, and cables</li>
                    <li>Networking gear: routers, switches, modems</li>
                    <li>Printers, copiers, shredders, telecom systems</li>
                    <li>Server racks, storage units, and sensitive hardware</li>
                    <li>
                      Secure handling of confidential files and office records
                    </li>
                    <li>
                      Kitchen items: fridges, kettles, coffee machines, water
                      coolers
                    </li>
                  </ul>
                </>
              ),
            },
            {
              question: "What type of businesses we relocate across the UAE",
              answer: (
                <>
                  <p>
                    We serve a wide range of companies and industries throughout
                    the Emirates, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>
                      Startups and SMEs in Ajman,{" "}
                      <Link href={"/movers-and-packers-sharjah"}> Sharjah</Link>{" "}
                      , and Ras Al Khaimah
                    </li>
                    <li>
                      Corporate headquarters in Dubai, Abu Dhabi, and Al Ain
                    </li>
                    <li>
                      Legal firms, finance offices, marketing agencies, and IT
                      firms
                    </li>
                    <li>Government entities and education providers</li>
                    <li>Co-working spaces, accelerators, and tech hubs</li>
                    <li>
                      Businesses undergoing expansion, consolidation, or
                      renovation
                    </li>
                  </ul>
                  <p className="mt-3">
                    We are trusted office movers in UAE offering tailored
                    relocation plans for every type of business setup.
                  </p>
                </>
              ),
            },
            {
              question: "Are Nice Movers licensed and insured?",
              answer: (
                <>
                  <p>
                    Yes. We are a fully licensed moving company in Dubai, and we
                    carry comprehensive insurance for your peace of mind.
                  </p>
                  <p>
                    As experts advise, always verify the mover’s license and
                    insurance before hiring. With Nice Movers, your valuable
                    office items are protected under approved regulations
                    throughout the move.
                  </p>
                </>
              ),
            },
            {
              question: "How do I hire office movers in Dubai?",
              answer: (
                <>
                  <p>
                    It’s easy: simply contact Nice Movers via phone or our
                    website’s contact form. Tell us about your move (office
                    size, location, date).
                  </p>
                  <p>
                    We’ll arrange a free survey and then provide a detailed
                    moving plan and quote. Once you approve, we’ll lock in your
                    move date. You can book our office moving service in Dubai
                    directly through our site or by calling our office.
                  </p>
                </>
              ),
            },
            {
              question:
                "What makes corporate moving different from a regular move?",
              answer: (
                <>
                  <p>
                    Corporate moving (also called business relocation) involves
                    extra coordination. There are many employees to inform,
                    sensitive equipment and documents to protect, and potential
                    regulatory steps.
                  </p>
                  <p>
                    That’s why we offer specialized corporate moving solutions.
                    Our commercial relocation experts handle large scale moves –
                    even entire company headquarters – with project management
                    and logistical support.
                  </p>
                </>
              ),
            },
            {
              question: "How dose long it takes to move an office in dubai",
              answer: (
                <>
                  <p>
                    The office relocation process can take from a few weeks up
                    to a few months, depending on the size of the office.
                  </p>
                  <p>
                    Meticulous planning is important to ensure that the
                    company’s time is not wasted and the employees’ productivity
                    remains unaffected during the moving process.
                  </p>
                  <p>
                    If you hire office movers and packers in Dubai for your
                    office move, the process will be streamlined and the move
                    will not take a lot of time.
                  </p>
                </>
              ),
            },
          ]}
        />
        <CTA
          title={
            <>
              Contact The Best <br /> Office Movers in Dubai
            </>
          }
          desc={
            <>
              <p className="text-[#d6d6d6] max-w-2xl mt-3">
                Take the stress out of your upcoming oce relocation. Let the
                experts at Nice Movers handle the heavy liing so you can focus
                on your business.
              </p>
              <p className="text-[#d6d6d6] max-w-2xl mt-3">
                Fill out the form below or call us directly for a free,
                no-obligation quote from the best oce movers and packers in
                Dubai.
              </p>
            </>
          }
        />
      </main>
    </>
  );
};

export default OfficeMoversPage;
