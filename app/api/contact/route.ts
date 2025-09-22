import { NextResponse } from "next/server";

// Envoi via l'API HTTP de Resend (aucune lib à installer).
// Dans Vercel → Project → Settings → Environment Variables :
//   RESEND_API_KEY = ta_clé_resend
// Pour tester, l'adresse "from" ci-dessous fonctionne : onboarding@resend.dev
// Ensuite, remplace-la par une adresse vérifiée chez Resend pour une meilleure délivrabilité.

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Email et message requis." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY manquant dans Vercel." }, { status: 500 });
    }

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "VinceProNet <onboarding@resend.dev>",
        to: ["vince.karg@gmail.com"], // <- TA boîte de réception
        reply_to: email,
        subject: `Nouveau message — VinceProNet : ${name || "Sans nom"}`,
        text: `Nom: ${name}
Email: ${email}
Entreprise: ${company}

Message:
${message}`,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return NextResponse.json({ ok: false, error: err || "Erreur API Resend" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Erreur inconnue" }, { status: 500 });
  }
}
