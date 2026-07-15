import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "requiredFields" },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `Nouveau message depuis le portfolio - ${name}`,
      replyTo: email,
      text: `
Nom: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.log("error", error);
      return NextResponse.json({ error: "serverError" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "invalidRequest" }, { status: 400 });
  }
}
