"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Rocket, CheckCircle2, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SiteLanding() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setSent(false);

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Échec d’envoi");
      }
      setSent(true);
      formEl.reset();
    } catch (e: any) {
      setErr(e?.message || "Une erreur est survenue.");
    }
  }

  const btn = "inline-flex items-center justify-center rounded-2xl border transition-colors";
  const btnMain = `${btn} bg-[#15B3C]()
