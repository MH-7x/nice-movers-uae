"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export interface SendMailProps {
  movingType: string;
  movingFrom: string;
  movingTo: string;
  name: string;
  phone: string;
  message: string;
  /** Honeypot – must stay empty for real users. */
  website?: string;
}

type Result = { success: boolean; error?: string };

const MAX_LENGTHS = {
  name: 80,
  phone: 20,
  movingType: 60,
  movingFrom: 60,
  movingTo: 60,
  message: 2000,
} as const;

type RequiredField = keyof typeof MAX_LENGTHS;

const PHONE_REGEX = /^\+?[0-9\s-]{7,15}$/;

// Simple in-memory rate limit (per server instance): 5 submissions / 10 min / IP.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }
  recent.push(now);
  submissions.set(ip, recent);

  // Keep the map from growing without bound.
  if (submissions.size > 5000) {
    for (const [key, times] of submissions) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        submissions.delete(key);
      }
    }
  }
  return false;
}

async function getClientIp(): Promise<string> {
  try {
    const h = await headers();
    const forwarded = h.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim() || "unknown";
    return h.get("x-real-ip")?.trim() || "unknown";
  } catch {
    return "unknown";
  }
}

export const SendMail = async ({
  data,
}: {
  data: SendMailProps;
}): Promise<Result> => {
  if (!data || typeof data !== "object") {
    return { success: false, error: "Invalid submission." };
  }

  // Honeypot filled → silently pretend success without sending.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return { success: true };
  }

  // Validate input: every field must be a non-empty string within limits.
  const clean = {} as Record<RequiredField, string>;
  for (const field of Object.keys(MAX_LENGTHS) as RequiredField[]) {
    const value = data[field];
    if (typeof value !== "string") {
      return { success: false, error: "All fields are required." };
    }
    const trimmed = value.trim();
    if (trimmed === "") {
      return { success: false, error: "All fields are required." };
    }
    if (trimmed.length > MAX_LENGTHS[field]) {
      return {
        success: false,
        error: `The ${field} field is too long (max ${MAX_LENGTHS[field]} characters).`,
      };
    }
    clean[field] = trimmed;
  }

  if (!PHONE_REGEX.test(clean.phone)) {
    return { success: false, error: "Please enter a valid phone number." };
  }

  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return {
      success: false,
      error:
        "Too many requests. Please wait a few minutes or call us on +971 56 356 0017.",
    };
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
        name: clean.name,
        Date: new Date(),
        phone: clean.phone,
        movingType: clean.movingType,
        movingFrom: clean.movingFrom,
        movingTo: clean.movingTo,
        message: clean.message,
      }),
    });

    if (emailResponse.error) {
      console.error("Email sending error:", emailResponse.error);
      return { success: false, error: "Failed to send email." };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error in SendMail:", err);
    return {
      success: false,
      error: "An unexpected error occurred while sending the email.",
    };
  }
};
