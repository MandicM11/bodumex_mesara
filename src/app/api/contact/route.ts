import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export async function POST(request: Request) {
  let data: ContactPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Neispravan zahtev." },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Ime, email i poruka su obavezni." },
      { status: 400 }
    );
  }

  // TODO: Ovde povezati slanje email-a (npr. Resend, Nodemailer + SMTP)
  // kada budu dostupni pravi kontakt podaci/API ključevi firme.
  // Za sada se upit samo beleži u server log.
  console.log("[BODUMEX kontakt upit]", {
    name,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
