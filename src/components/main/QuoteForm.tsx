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
import { SendMail } from "@/lib/FormSubmission";
const QuoteForm = () => {
  const [movingType, setMovingType] = useState("");
  const [movingTypeOther, SetMovingTypeOther] = useState("");
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const SubmitForm = async () => {
    if (
      !movingType ||
      (movingType === "others" && !movingTypeOther) ||
      !movingFrom ||
      !movingTo ||
      !name ||
      !phone ||
      !message
    ) {
      alert("please fill out all details!!");
    } else {
      const SendingData = {
        movingType: movingType === "others" ? movingTypeOther : movingType,
        movingFrom,
        movingTo,
        name,
        phone,
        message,
      };
      try {
        const { success, error } = await SendMail({ data: SendingData });
        if (success) {
          alert("Your request has been sent successfully!");
          // Reset form fields
          setMovingType("");
          SetMovingTypeOther("");
          setMovingFrom("");
          setMovingTo("");
          setName("");
          setPhone("");
          setMessage("");
        } else {
          alert(error || "Failed to send your request. Please try again.");
        }
      } catch (error) {
        alert(error instanceof Error ? error.message : "something went wrong");
      }
    }
  };
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
      <Select
        name="moving-type"
        value={movingType}
        onValueChange={setMovingType}
      >
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
          value={movingTypeOther}
          onChange={(e) => SetMovingTypeOther(e.currentTarget.value)}
        />
      )}
      {/* From and To Selects */}
      <div className="w-full grid grid-cols-2 gap-x-5 mt-5">
        <Select
          name="moving-from"
          value={movingFrom}
          onValueChange={setMovingFrom}
        >
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

        <Select name="moving-to" value={movingTo} onValueChange={setMovingTo}>
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
      <Input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Your name"
        name="name"
        className="mt-5 p-6"
      />
      <Input
        placeholder="Phone no."
        name="phone"
        type="number"
        className="mt-5 p-6"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
      />
      <Textarea
        placeholder="More details about your move..."
        name="message"
        className="mt-5 p-5 min-h-32"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />

      {/* Submit Button */}
      <Button
        onClick={SubmitForm}
        size={"lg"}
        type="button"
        className="b-red-bg mt-5 "
      >
        <span>Send Now</span> <Send />
      </Button>
    </form>
  );
};

export default QuoteForm;
