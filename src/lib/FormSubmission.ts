"use server"

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

export interface SendMailProps {
    movingType : string,
    movingFrom : string,
    movingTo : string,
    name : string,
    phone : string,
    message : string
}

export const SendMail = async ({
  data,
}: {
  data: SendMailProps;
}): Promise<{ success: boolean; error?: string }> => {
  if (Array.from(Object.values(data)).some((value) => value === "")) {
    return { success: false, error: "All fields are required." };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("API Key is not Configured");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "New Quote <onboarding@resend.dev>",
      to: "nicemovers.com@gmail.com",
      subject: "New Moving Quote Request",
      react: EmailTemplate({
        name: data.name,
        Date: new Date(),
        phone: data.phone,
        movingType: data.movingType,
        movingFrom: data.movingFrom,
        movingTo: data.movingTo,
        message: data.message || "",
      }),
    });

    if (response.error) {
      console.error("Error sending email:", response.error);
      return { success: false, error: "Failed to send email." };
    }
    console.log("Email sent successfully:", response);
    return { success: true };
  } catch (error) {
    console.error("Error in SendMail:", error);
    return {
      success: false,
      error: "An error occurred while sending the email.",
    };
  }
};
