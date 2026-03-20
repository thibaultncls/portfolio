import GlassCard from "./GlassCard";
import SectionLabel from "./SectionLabel";
import { Github, Linkedin } from "lucide-react";

export default function ContactSection() {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#c5c6cd]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full rounded-md bg-[#010e24] p-4 text-[#d6e3ff] outline-none transition-all placeholder:text-slate-500 focus:ring-1 focus:ring-[#38debb]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-[#38debb] to-[#58d6f1] py-4 font-bold text-[#00382d] shadow-lg transition-transform active:scale-[0.98]"
              >
                Send Message
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
