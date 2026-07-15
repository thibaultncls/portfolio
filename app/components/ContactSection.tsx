"use client";

import { Github, Linkedin, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import GlassCard from "./GlassCard";
import SectionLabel from "./SectionLabel";

const ERROR_KEYS = ["requiredFields", "invalidRequest", "serverError"] as const;

function isKnownErrorKey(
  value: unknown,
): value is (typeof ERROR_KEYS)[number] {
  return (
    typeof value === "string" &&
    ERROR_KEYS.includes(value as (typeof ERROR_KEYS)[number])
  );
}

export default function ContactSection() {
  const t = useTranslations("contact");
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
        setError(
          isKnownErrorKey(data.error)
            ? t(`errors.${data.error}`)
            : t("errors.serverError"),
        );
        return;
      }
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError(t("errors.serverError"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-[#0d1c32] px-8 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mb-6 text-4xl font-bold">{t("title")}</h2>
          <p className="text-[#c5c6cd]">{t("subtitle")}</p>
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
                  {t("success")}
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
                    {t("name")}
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
                    placeholder={t("namePlaceholder")}
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
                    {t("email")}
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
                    placeholder={t("emailPlaceholder")}
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
                  {t("message")}
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
                  placeholder={t("messagePlaceholder")}
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
                    {t("sending")}
                  </>
                ) : (
                  t("sendMessage")
                )}
              </button>
            </form>
          </div>

          <div className="space-y-8 md:col-span-2">
            <div>
              <h4 className="mb-4 text-lg font-bold">{t("socialPresence")}</h4>
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "GitHub",
                    icon: Github,
                    href: "https://github.com/thibaultncls",
                  },
                  {
                    label: "LinkedIn",
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/thibault-nicolas-5310202ab/",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
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
                {t("location")}
              </p>
              <p className="text-sm text-[#d6e3ff]">{t("locationValue")}</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
