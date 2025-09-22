"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, CheckCircle2, Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function SiteLanding() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const btn = "inline-flex items-center justify-center rounded-2xl border transition-colors";
  const btnMain = `${btn} bg-[#15B3C0] hover:bg-[#109AA4] text-white border-transparent px-5 h-11`;
  const btnOutline = `${btn} bg-transparent border-[color:rgba(21,179,192,0.4)] text-[#0A293F] hover:bg-[color:rgba(21,179,192,0.1)] px-5 h-11`;
  const input = "flex h-10 w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:border-[#15B3C0]";
  const textarea = "flex w-full rounded-2xl border px-3 py-2 text-sm outline-none focus:border-[#15B3C0] min-h-[120px]";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-[#eef7f8] text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo-vpn.png" alt="VinceProNet" className="h-9 w-9 rounded-md object-contain bg-white shadow-sm border border-[#b7c8c8]/60" />
            <span className="font-semibold tracking-tight text-[#0a293f]">VinceProNet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#15b3c0]">Services</a>
            <a href="#contact" className="hover:text-[#15b3c0]">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className={btnMain}>Demander un site</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-8">
        <div className="max-w-3xl mx-auto grid gap-10 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#15b3c0]/30 bg-[#15b3c0]/10 px-3 py-1 text-xs text-[#0a293f] shadow-sm">
              <Rocket className="h-3.5 w-3.5" />
              Sites rapides, beaux et abordables
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0a293f] to-[#15b3c0]">
              Votre vitrine en ligne, conçue pour convertir.
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              VinceProNet crée des sites web modernes pour commerces locaux et entrepreneurs. Design clair, chargement rapide, SEO prêt — pour attirer plus de clients sans casse-tête.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className={`${btnMain} text-center`}>Obtenir une estimation</a>
              <a href="#services" className={`${btnOutline} text-center`}>Voir des exemples</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#15b3c0]"/>Hébergement & maintenance</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#15b3c0]"/>Premier site possible à bas coût</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-[#15b3c0]"/>Support humain et francophone</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <motion.div {...fadeUp} className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a293f]">Ce que je fais</h2>
          <p className="mt-2 text-slate-600">Sites vitrines modernes, rapides, et faciles à gérer.</p>
        </motion.div>
        <ul className="mx-auto max-w-3xl grid md:grid-cols-3 gap-6 text-slate-700">
          <li className="flex items-start gap-3"><Globe className="h-5 w-5 text-[#15b3c0]"/> Site vitrine</li>
          <li className="flex items-start gap-3"><Rocket className="h-5 w-5 text-[#15b3c0]"/> Refonte</li>
          <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-[#15b3c0]"/> Hébergement & maintenance</li>
        </ul>
        <p className="text-center mt-8">
          <a href="#contact" className={btnMain}>Obtenir une estimation</a>
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Parlons de votre projet</h2>
            <p className="mt-2 text-slate-600">Envoyez un court message. Réponse rapide avec une estimation et les prochaines étapes.</p>
            <div className="mt-6 space-y-3 text-slate-600">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#15b3c0]"/>
                {/* Affiche bien ton email perso */}
                <a className="underline" href="mailto:vincepronet@gmail.com">vincepronet@gmail.com</a>
              </p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#15b3c0]"/><a className="underline" href="tel:+15145550000">+1 (514) 555-0000</a></p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#15b3c0]"/>Montréal & environs</p>
            </div>
          </motion.div>

          {/* Formspree placeholder: remplace XXXXYYYY par ton ID Formspree si tu utilises A. 
              Si tu utilises l'option B (API Resend), on branchera ici onSubmit={...} */}
          <motion.form {...fadeUp} action="https://formspree.io/f/XXXXYYYY" method="POST" className="bg-white border rounded-3xl p-6 shadow-sm">
            <input type="hidden" name="_subject" value="Nouveau message — VinceProNet" />
            <input type="text" name="_gotcha" className="hidden" />
            <div className="grid gap-4">
              <input name="name" placeholder="Votre nom" required className={input} />
              <input name="email" type="email" placeholder="Votre e-mail" required className={input} />
              <input name="company" placeholder="Votre entreprise (optionnel)" className={input} />
              <textarea name="message" placeholder="Décrivez brièvement votre besoin" required className={textarea} />
              <button type="submit" className={btnMain}>Envoyer</button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Réseaux sociaux */}
      <section id="social" className="mx-auto max-w-6xl px-4 py-10">
        <motion.div {...fadeUp} className="bg-white border rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Instagram className="h-6 w-6 text-[#15b3c0]"/>
            <div>
              <h3 className="text-lg font-semibold text-[#0a293f]">Instagram</h3>
              <p className="text-slate-600 text-sm">Avant/après, maquettes et coulisses de projets.</p>
            </div>
          </div>
          <a href="https://instagram.com/vincepronet" target="_blank" rel="noreferrer" className={btnMain}>Suivre @vincepronet</a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} VinceProNet. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-[#15b3c0]">Services</a>
            <a href="#contact" className="hover:text-[#15b3c0]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
