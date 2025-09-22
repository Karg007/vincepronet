import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Anti-spam simple (champ caché côté client)
    const gotcha = String(form.get("_gotcha") || "");
    if (gotcha.trim().length > 0) {
      return NextResponse.json({ ok: true }); // on ignore poliment le bot
    }

    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Email et message requis." }, { status: 400 });
    }

    // ⚠️ Destinataire final : TA boîte mail
    const TO = "vincepronet@gmail.com";

    await resend.emails.send({
      // From de test chez Resend (évite la vérif de domaine au début)
      from: "VinceProNet <onboarding@resend.dev>",
      to: TO,
      reply_to: email, // tu pourras répondre directement au client
      subject: `Nouveau message — ${name || "Sans nom"} (VinceProNet)`,
      text:
        `Nom: ${name}\n` +
        `Email: ${email}\n` +
        `Entreprise: ${company}\n\n` +
        `Message:\n${message}\n`,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Erreur serveur." }, { status: 500 });
  }
}
