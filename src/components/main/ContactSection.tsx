import { Stars, Timer } from "lucide-react";
import QuoteForm from "./QuoteForm";
import { ReactNode } from "react";

const ContactSection = ({
  title,
  desc,
  dm = false,
}: {
  title: string;
  desc: string | ReactNode;
  dm?: boolean;
}) => {
  return (
    <section
      id="quote-section"
      className={`${
        dm ? "md:mt-36 mt-20" : "mt-36"
      }  w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-20 items-center`}
    >
      <div>
        <QuoteForm />
      </div>

      {/* Right Info Panel */}
      <div>
        <h2 className="b-red md:text-4xl text-2xl font-bold">{title}</h2>
        <p className="b-text md:text-lg md:mt-5 mt-3">{desc}</p>
        <div className="w-full grid md:grid-cols-2 gap-10 mt-8 px-8">
          <div className="flex flex-col items-center justify-center gap-3">
            <Timer size={40} className="text-[#c00000]" />
            <h3 className="md:text-xl text-lg text-center">
              Quick Response Within <br />5 Minutes
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <Stars size={40} className="text-[#c00000]" />
            <h3 className="md:text-xl text-lg text-center">
              800+ Customers Reviews <br /> from UAE
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
