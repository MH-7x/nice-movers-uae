"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, X } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const SHOW_DELAY_MS = 30 * 1000; // show after 30 seconds…
const SCROLL_THRESHOLD = 0.5; // …or after scrolling 50% of the page, whichever comes first

function PopUp() {
  const [phone, setPhone] = useState("");
  const [visible, setVisible] = useState(false);

  // Decide on mount whether the popup is allowed (localStorage re-show logic),
  // then delay the first display until a timer or a scroll threshold fires.
  useEffect(() => {
    let allowed = false;
    try {
      const showPopUp = localStorage.getItem("showPopUp");
      const nextShowTime = localStorage.getItem("nextShowTime");
      const now = new Date().getTime();

      if (!showPopUp) {
        localStorage.setItem("showPopUp", "true");
        allowed = true;
      } else if (showPopUp === "true") {
        allowed = true;
      } else if (
        showPopUp === "false" &&
        nextShowTime &&
        now > parseInt(nextShowTime)
      ) {
        localStorage.setItem("showPopUp", "true");
        allowed = true;
      }
    } catch {
      allowed = false;
    }

    if (!allowed) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
      cleanup();
    };

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_THRESHOLD) show();
    };

    const timer = window.setTimeout(show, SHOW_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }

    return cleanup;
  }, []);

  // Handle phone submission
  const handlePhoneNumber = (number: string) => {
    if (!number) {
      toast.error("Phone number is required!");
    } else {
      const Url = `https://wa.me/971563560017?text=I%20Need%20Instant%20Quote!%20:%20Phone%20Number%20:%20${encodeURIComponent(number)}`;
      window.open(Url, "_blank");
      setPhone("");
    }
  };

  // Handle closing the popup
  const handleClose = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem("showPopUp", "false");
      const nextTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes later
      localStorage.setItem("nextShowTime", nextTime.toString());
    } catch {
      // storage unavailable – just hide the popup
    }
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!visible) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, handleClose]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center z-[9999] md:px-0 px-3">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="instant-quote-popup-title"
        className="bg-white rounded-2xl drop-shadow-2xl md:p-10 p-5 w-xl relative"
      >
        <h3
          id="instant-quote-popup-title"
          className="font-bold b-red md:text-2xl text-xl"
        >
          Need Instant Quote?
        </h3>
        <p className="b-text md:text-base text-sm mt-3">
          Give us your phone number and we will call / WhatsApp{" "}
          <br className="md:block hidden" /> you within 5 minutes!
        </p>
        <div className="flex items-center justify-between my-3 gap-x-3">
          <Input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-label="Your phone number"
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
          title="Close Popup"
          aria-label="Close popup"
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
