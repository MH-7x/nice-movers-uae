"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export interface SendMailProps {
  movingType: string;
  movingFrom: string;
  movingTo: string;
  name: string;
  phone: string;
  message: string;
}

export const SendMail = async ({
  data,
}: {
  data: SendMailProps;
}): Promise<{ success: boolean; error?: string }> => {
  // Validate input
  const hasEmptyField = Object.values(data).some((val) => val.trim() === "");
  if (hasEmptyField) {
    return { success: false, error: "All fields are required." };
  }

  // Check for API key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set in environment variables.");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const resend = new Resend(apiKey);

    const emailResponse = await resend.emails.send({
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
        message: data.message,
      }),
    });

    if (emailResponse.error) {
      console.error("Email sending error:", emailResponse.error);
      return { success: false, error: "Failed to send email." };
    }

    console.log("Email sent:", emailResponse.data.id);
    return { success: true };
  } catch (err) {
    console.error("Unexpected error in SendMail:", err);
    return {
      success: false,
      error: "An unexpected error occurred while sending the email.",
    };
  }
};
