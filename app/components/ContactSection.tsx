"use client";

import { Github, Linkedin, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import GlassCard from "./GlassCard";
import SectionLabel from "./SectionLabel";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.log("error", data.error);
        setError(
          typeof data.error === "string"
            ? data.error
            : "Erreur lors de l'envoi.",
        );
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError("Impossible de joindre le serveur. Réessaie plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#0d1c32] px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <SectionLabel>Connection</SectionLabel>
          <h2 className="mb-6 text-4xl font-bold">
            Let&apos;s build something epic
          </h2>
          <p className="text-[#c5c6cd]">
            Have a vision? I have the tools to make it a reality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              aria-busy={loading}
            >
              {sent && (
                <div
                  role="status"
                  className="rounded-md border border-[#38debb]/40 bg-[#38debb]/10 px-4 py-3 text-sm text-[#38debb]"
                >
                  Message sent — thank you, I will reply soon.
                </div>
              )}
              {error && (
                <div
                  role="alert"
                  className="rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (sent) setSent(false);
                    }}
                    placeholder="John Doe"
                    required
                    disabled={loading}
                    className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (sent) setSent(false);
                    }}
                    placeholder="john@example.com"
                    required
                    disabled={loading}
                    className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (sent) setSent(false);
                  }}
                  placeholder="How can I help you?"
                  required
                  disabled={loading}
                  className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#38debb] to-[#58d6f1] py-4 font-bold text-[#00382d] shadow-lg transition-transform enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                    Envoi en cours…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8 md:col-span-2">
            <div>
              <h4 className="mb-4 text-lg font-bold">Social Presence</h4>
              <div className="flex flex-col gap-4">
                {[
                  { label: "GitHub", icon: Github },
                  { label: "LinkedIn", icon: Linkedin },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    className="group flex items-center gap-4 text-[#c5c6cd] transition-colors hover:text-[#38debb]"
                  >
                    <span className="rounded-lg bg-[#112036] p-2 transition-colors group-hover:bg-[#38debb]/10">
                      <social.icon className="h-4 w-4" />
                    </span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <GlassCard className="rounded-xl border-l-2 border-l-[#58d6f1] p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#58d6f1]">
                Location
              </p>
              <p className="text-sm text-[#d6e3ff]">Remote / Pontivy, France</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
