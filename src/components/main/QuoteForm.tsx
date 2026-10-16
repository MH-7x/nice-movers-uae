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
import { toast } from "sonner";

type Locale = "en" | "ar";

// Values sent to the server stay in English so the notification emails are
// readable; only the visible labels are translated.
const CITIES: { value: string; en: string; ar: string }[] = [
  { value: "Dubai", en: "Dubai", ar: "دبي" },
  { value: "Sharjah", en: "Sharjah", ar: "الشارقة" },
  { value: "Abu Dhabi", en: "Abu Dhabi", ar: "أبوظبي" },
  { value: "Ajman", en: "Ajman", ar: "عجمان" },
  { value: "Al Ain", en: "Al Ain", ar: "العين" },
  { value: "Ras Al Khaimah", en: "Ras Al Khaimah", ar: "رأس الخيمة" },
  { value: "Fujairah", en: "Fujairah", ar: "الفجيرة" },
];

const MOVING_GROUPS: {
  label: { en: string; ar: string };
  items: { value: string; en: string; ar: string }[];
}[] = [
  {
    label: { en: "Moving", ar: "النقل" },
    items: [
      { value: "home", en: "Home", ar: "منزل" },
      { value: "office", en: "Office", ar: "مكتب" },
      { value: "apartment", en: "Apartment", ar: "شقة" },
      { value: "studio", en: "Studio", ar: "استوديو" },
    ],
  },
  {
    label: { en: "Items", ar: "الأغراض" },
    items: [
      { value: "furniture", en: "Furniture", ar: "أثاث" },
      { value: "electronics", en: "Electronics", ar: "إلكترونيات" },
      { value: "antique", en: "Antique", ar: "تحف" },
    ],
  },
  {
    label: { en: "Something else?", ar: "شيء آخر؟" },
    items: [{ value: "others", en: "Others", ar: "أخرى" }],
  },
];

const STRINGS = {
  en: {
    movingType: "What are you moving?",
    movingTypeOther: "Specify your needs",
    from: "Moving from",
    to: "Moving to",
    name: "Your name",
    phone: "Phone number",
    message: "More details about your move...",
    submit: "Send Now",
    ok: "OK",
    requiredTitle: "Please Fill Out All Fields",
    requiredDesc: "All fields are required to send the form.",
    successTitle: "Your request has been sent",
    successDesc: "We will get back to you soon.",
    failTitle: "Failed to send request",
    failDesc: "Please try again later.",
    errorTitle: "Submission Error",
    errorDesc: "An unexpected error occurred",
  },
  ar: {
    movingType: "ماذا تريد أن تنقل؟",
    movingTypeOther: "حدد احتياجاتك",
    from: "من",
    to: "إلى",
    name: "اسمك",
    phone: "رقم الهاتف",
    message: "تفاصيل إضافية عن النقل...",
    submit: "أرسل الآن",
    ok: "حسناً",
    requiredTitle: "يرجى تعبئة جميع الحقول",
    requiredDesc: "جميع الحقول مطلوبة لإرسال النموذج.",
    successTitle: "تم إرسال طلبك",
    successDesc: "سنتواصل معك قريباً.",
    failTitle: "تعذر إرسال الطلب",
    failDesc: "يرجى المحاولة مرة أخرى لاحقاً.",
    errorTitle: "خطأ في الإرسال",
    errorDesc: "حدث خطأ غير متوقع",
  },
} as const;

const QuoteForm = ({ locale = "en" }: { locale?: Locale }) => {
  const t = STRINGS[locale];
  const isAr = locale === "ar";

  const [movingType, setMovingType] = useState("");
  const [movingTypeOther, SetMovingTypeOther] = useState("");
  const [movingFrom, setMovingFrom] = useState("");
  const [movingTo, setMovingTo] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // Honeypot: real users never see or fill this field.
  const [website, setWebsite] = useState("");

  const showToast = (
    type: "success" | "error",
    title: string,
    description: string
  ) => {
    toast[type](title, {
      description,
      style: {
        backgroundColor: type === "success" ? "green" : "red",
        color: type === "success" ? "#e7e6e6" : "#721c24",
      },
      action: {
        label: t.ok,
        onClick: () => toast.dismiss(),
      },
    });
  };

  const SubmitForm = async () => {
    const isOtherTypeInvalid = movingType === "others" && !movingTypeOther;
    const isFormInvalid =
      !movingType ||
      isOtherTypeInvalid ||
      !movingFrom ||
      !movingTo ||
      !name ||
      !phone ||
      !message;

    if (isFormInvalid) {
      showToast("error", t.requiredTitle, t.requiredDesc);
      return;
    }

    const formData = {
      movingType: movingType === "others" ? movingTypeOther : movingType,
      movingFrom,
      movingTo,
      name,
      phone,
      message,
      website,
    };

    try {
      const { success, error } = await SendMail({ data: formData });

      if (success) {
        showToast("success", t.successTitle, t.successDesc);

        // Reset form
        setMovingType("");
        SetMovingTypeOther("");
        setMovingFrom("");
        setMovingTo("");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        // Server messages are English; show the localized fallback in Arabic.
        showToast(
          "error",
          t.failTitle,
          isAr ? t.failDesc : error || t.failDesc
        );
      }
    } catch (err) {
      const errorMessage =
        !isAr && err instanceof Error ? err.message : t.errorDesc;
      showToast("error", t.errorTitle, errorMessage);
    }
  };

  return (
    <form
      id="quote-form"
      dir={isAr ? "rtl" : undefined}
      lang={isAr ? "ar" : undefined}
      className="max-w-[550px] drop-shadow-xl bg-white md:p-10 p-6 rounded-xl"
    >
      {/* Honeypot field – hidden from users and assistive tech */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      >
        <label htmlFor="quote-website">Website</label>
        <input
          id="quote-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.currentTarget.value)}
        />
      </div>

      {/* Moving Type */}
      <Select
        name="moving-type"
        value={movingType}
        onValueChange={setMovingType}
        dir={isAr ? "rtl" : "ltr"}
      >
        <SelectTrigger
          title={t.movingType}
          aria-label={t.movingType}
          className="w-full p-6"
        >
          <SelectValue placeholder={t.movingType} />
        </SelectTrigger>
        <SelectContent className="md:p-5 p-2 ">
          {MOVING_GROUPS.map((group) => (
            <SelectGroup key={group.label.en}>
              <SelectLabel className="text-lg font-semibold">
                {group.label[locale]}
              </SelectLabel>
              {group.items.map((item) => (
                <SelectItem
                  key={item.value}
                  className="p-2 border-b"
                  value={item.value}
                >
                  {item[locale]}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      {movingType && movingType === "others" && (
        <Input
          placeholder={t.movingTypeOther}
          aria-label={t.movingTypeOther}
          name="moving-type-other"
          maxLength={60}
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
          dir={isAr ? "rtl" : "ltr"}
        >
          <SelectTrigger
            title={t.from}
            aria-label={t.from}
            className="w-full p-6"
          >
            <SelectValue placeholder={t.from} />
          </SelectTrigger>
          <SelectContent className="p-5">
            {CITIES.map((city) => (
              <SelectItem
                key={city.value}
                className="p-2 border-b"
                value={city.value}
              >
                {city[locale]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          name="moving-to"
          value={movingTo}
          onValueChange={setMovingTo}
          dir={isAr ? "rtl" : "ltr"}
        >
          <SelectTrigger
            title={t.to}
            aria-label={t.to}
            className="w-full p-6"
          >
            <SelectValue placeholder={t.to} />
          </SelectTrigger>
          <SelectContent className="p-5">
            {CITIES.map((city) => (
              <SelectItem
                key={city.value}
                className="p-2 border-b"
                value={city.value}
              >
                {city[locale]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Other Inputs */}
      <Input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder={t.name}
        aria-label={t.name}
        name="name"
        autoComplete="name"
        maxLength={80}
        className="mt-5 p-6"
      />
      <Input
        placeholder={t.phone}
        aria-label={t.phone}
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        maxLength={20}
        className="mt-5 p-6"
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
      />
      <Textarea
        placeholder={t.message}
        aria-label={t.message}
        name="message"
        maxLength={2000}
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
        <span>{t.submit}</span> <Send className={isAr ? "-scale-x-100" : ""} />
      </Button>
    </form>
  );
};

export default QuoteForm;
