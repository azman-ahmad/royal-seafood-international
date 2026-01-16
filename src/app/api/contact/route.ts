import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      enquiryType,
      companyName,
      country,
      contactName,
      email,
      phone,
      message,
    } = await req.json();

    if (!contactName || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission: ${enquiryType}`,
      html: `
        <h3>New Message from Royal Seafood International website</h3>
        <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
        <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Contact Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
