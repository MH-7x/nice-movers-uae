import { SelectItem } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send, Stars, Timer } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="quote-section"
      className="mt-36 w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-20 items-center"
    >
      <div>
        <form
          id="quote-form"
          className="max-w-[550px] bg-white md:p-10 p-6 rounded-xl"
        >
          <Select name="moving-type">
            <SelectTrigger className="w-full p-6 ">
              <SelectValue placeholder="What you are moving?" />
            </SelectTrigger>
            <SelectContent className="md:p-5 p-2 max-w-screen">
              <SelectItem
                className="p-2 border-b "
                value="ITEMS — furniture, electronics, antique, box etc"
              >
                ITEMS — furniture, electronics, antique, box etc
              </SelectItem>
              <SelectItem
                className="p-2 border-b "
                value="MOVE — home moving, office moving, villa etc"
              >
                MOVE — home moving, office moving, villa etc
              </SelectItem>
              <SelectItem
                className="p-2 border-b "
                value="PIANO — grand piano, upright piano, digital piano etc."
              >
                PIANO — grand piano, upright piano, digital piano etc.
              </SelectItem>
              <SelectItem
                className="p-2 border-b "
                value="OTHERS  — construction material etc."
              >
                OTHERS — construction material etc.
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="w-full grid grid-cols-2 gap-x-5 mt-5">
            <Select name="moving-from">
              <SelectTrigger className="w-full p-6 ">
                <SelectValue placeholder="Moving from" />
              </SelectTrigger>
              <SelectContent className="p-5">
                <SelectItem className="p-2 border-b " value="Dubai">
                  Dubai
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Sharjah">
                  Sharjah
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Abu Dhabi">
                  Abu Dhabi
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Ajman">
                  Ajman
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Al Ain">
                  Al Ain
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Ras Al Khaimah">
                  Ras Al Khaimah
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Fujariah">
                  Fujariah
                </SelectItem>
              </SelectContent>
            </Select>
            <Select name="moving-to">
              <SelectTrigger className="w-full p-6 ">
                <SelectValue placeholder="Moving to" />
              </SelectTrigger>
              <SelectContent className="p-5">
                <SelectItem className="p-2 border-b " value="Dubai">
                  Dubai
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Sharjah">
                  Sharjah
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Abu Dhabi">
                  Abu Dhabi
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Ajman">
                  Ajman
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Al Ain">
                  Al Ain
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Ras Al Khaimah">
                  Ras Al Khaimah
                </SelectItem>
                <SelectItem className="p-2 border-b " value="Fujariah">
                  Fujariah
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input placeholder="Your name" name="name" className="mt-5 p-6" />
          <Input
            placeholder="Phone no."
            name="number"
            type="number"
            className="mt-5 p-6"
          />
          <Textarea
            placeholder="More details about you moving.."
            name="message"
            className="mt-5 p-5 min-h-32"
          ></Textarea>
          <Button
            size={"lg"}
            className="b-red-bg mt-5 md:w-[300px] w-full mx-auto"
          >
            Send Now <Send />
          </Button>
        </form>
      </div>
      <div>
        <h2 className="b-red md:text-4xl text-2xl font-bold">
          Book Now — Packers And Movers in UAE — Low Rates
        </h2>
        <p className="b-text md:text-lg md:mt-5 mt-3">
          All Covered. No Hassle. Low-cost movers and packers expert service —
          book now! Door-to-Door Delivery. Same Day Mover Services. Fixed
          Prices.
        </p>
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
