"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

function PopUp() {
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const showPopUp = localStorage.getItem("showPopUp");
    const nextShowTime = localStorage.getItem("nextShowTime");

    const now = new Date().getTime();

    if (!showPopUp) {
      localStorage.setItem("showPopUp", "true");
      setVisible(true);
    } else if (showPopUp === "true") {
      setVisible(true);
    } else if (
      showPopUp === "false" &&
      nextShowTime &&
      now > parseInt(nextShowTime)
    ) {
      localStorage.setItem("showPopUp", "true");
      setVisible(true);
    }
  }, []);

  // Handle phone submission
  const handlePhoneNumber = (number: string) => {
    if (!number) {
      toast.error("Phone number is required!");
    } else {
      const Url = `https://wa.me/971563560017?text=I%20Need%20Instant%20Quote!%20:%20Phone%20Number%20:%20${number}`;
      window.open(Url, "_blank");
      alert(Url);
      setPhone("");
    }
  };

  // Handle closing the popup
  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("showPopUp", "false");
    const nextTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes later
    localStorage.setItem("nextShowTime", nextTime.toString());
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-2xl drop-shadow-2xl p-10 w-xl relative">
        <h3 className="font-bold b-red text-2xl">Need Instant Quote?</h3>
        <p className="b-text mt-3">
          Give us your phone number and we will call / WhatsApp <br /> you
          within 5 minutes!
        </p>
        <div className="flex items-center justify-between my-3 gap-x-3">
          <Input
            type="number"
            placeholder="Type your phone number..."
            className="py-5"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <Button
            onClick={() => handlePhoneNumber(phone)}
            size={"lg"}
            className="b-red-bg"
          >
            Send <Send />
          </Button>
        </div>
        <Link
          href={"tel:+971563560017"}
          className="text-sm b-text underline underline-offset-1"
        >
          Call us direct
        </Link>
        <Button
          onClick={handleClose}
          variant={"outline"}
          className="absolute top-5 right-5 cursor-pointer"
          size={"icon"}
        >
          <X />
        </Button>
      </div>
    </div>
  );
}

export default PopUp;
