import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LABELS: Record<string, string> = {
  community: "Community Message",
  "private-class": "Private Class Message",
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const { type, name, email, message } = body ?? {};

  if (
    typeof type !== "string" || !LABELS[type] ||
    typeof email !== "string" || !email.trim() ||
    typeof message !== "string" || !message.trim() ||
    (type === "private-class" && (typeof name !== "string" || !name.trim()))
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    authMethod: "LOGIN",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Stick Life Site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      replyTo: name ? `"${name}" <${email}>` : email,
      subject: name ? `[${LABELS[type]}] ${name}` : `[${LABELS[type]}] ${email}`,
      text: name ? `From: ${name} <${email}>\n\n${message}` : `From: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("contact form send failed", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
