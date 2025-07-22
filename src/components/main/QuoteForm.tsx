"use client";

import { useState } from "react";
import { SelectGroup, SelectItem, SelectLabel } from "../ui/select";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
const QuoteForm = () => {
  const [movingType, setMovingType] = useState("");
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  return (
    <form
      id="quote-form"
      className="max-w-[550px] drop-shadow-xl bg-white md:p-10 p-6 rounded-xl"
    >
      {/* Hidden inputs for form submission */}
      <input type="hidden" name="moving-type" value={movingType} />
      <input type="hidden" name="moving-from" value={movingFrom} />
      <input type="hidden" name="moving-to" value={movingTo} />

      {/* Moving Type */}
      <Select value={movingType} onValueChange={setMovingType}>
        <SelectTrigger className="w-full p-6">
          <SelectValue placeholder="What you are moving?" />
        </SelectTrigger>
        <SelectContent className="md:p-5 p-2 ">
          <SelectGroup>
            <SelectLabel className="text-lg font-semibold">Moving</SelectLabel>
            <SelectItem className="p-2 border-b" value="home">
              Home
            </SelectItem>
            <SelectItem className="p-2 border-b" value="office">
              Office
            </SelectItem>
            <SelectItem className="p-2 border-b" value="apartment">
              Apartment
            </SelectItem>
            <SelectItem className="p-2 border-b" value="studio">
              Studio
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-lg font-semibold">Items</SelectLabel>
            <SelectItem className="p-2 border-b" value="furniture">
              Furniture
            </SelectItem>
            <SelectItem className="p-2 border-b" value="electronics">
              Electronics
            </SelectItem>
            <SelectItem className="p-2 border-b" value="antique">
              Antique
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel className="text-lg font-semibold">
              Something else?
            </SelectLabel>
            <SelectItem className="p-2 border-b" value="others">
              Others
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {movingType && movingType === "others" && (
        <Input
          placeholder="Specify your needs"
          name="moving-type-other"
          className="mt-5 p-6"
        />
      )}
      {/* From and To Selects */}
      <div className="w-full grid grid-cols-2 gap-x-5 mt-5">
        <Select value={movingFrom} onValueChange={setMovingFrom}>
          <SelectTrigger className="w-full p-6">
            <SelectValue placeholder="Moving from" />
          </SelectTrigger>
          <SelectContent className="p-5">
            {[
              "Dubai",
              "Sharjah",
              "Abu Dhabi",
              "Ajman",
              "Al Ain",
              "Ras Al Khaimah",
              "Fujariah",
            ].map((city) => (
              <SelectItem key={city} className="p-2 border-b" value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={movingTo} onValueChange={setMovingTo}>
          <SelectTrigger className="w-full p-6">
            <SelectValue placeholder="Moving to" />
          </SelectTrigger>
          <SelectContent className="p-5">
            {[
              "Dubai",
              "Sharjah",
              "Abu Dhabi",
              "Ajman",
              "Al Ain",
              "Ras Al Khaimah",
              "Fujariah",
            ].map((city) => (
              <SelectItem key={city} className="p-2 border-b" value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Other Inputs */}
      <Input placeholder="Your name" name="name" className="mt-5 p-6" />
      <Input
        placeholder="Phone no."
        name="number"
        type="number"
        className="mt-5 p-6"
      />
      <Textarea
        placeholder="More details about your move..."
        name="message"
        className="mt-5 p-5 min-h-32"
      />

      {/* Submit Button */}
      <Button size={"lg"} className="b-red-bg mt-5 md:w-[300px] w-full mx-auto">
        Send Now <Send />
      </Button>
    </form>
  );
};

export default QuoteForm;
