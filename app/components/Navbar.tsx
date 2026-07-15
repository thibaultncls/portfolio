"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const SECTIONS = ["hero", "skills", "projects", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const computeActiveSection = () => {
      const referenceLine = window.innerHeight * 0.35;

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atPageBottom) {
        setActiveSection(SECTIONS[SECTIONS.length - 1]);
        return;
      }

      let current: (typeof SECTIONS)[number] = SECTIONS[0];

      for (const id of SECTIONS) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= referenceLine) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    computeActiveSection();
    window.addEventListener("scroll", computeActiveSection, { passive: true });
    window.addEventListener("resize", computeActiveSection);

    return () => {
      window.removeEventListener("scroll", computeActiveSection);
      window.removeEventListener("resize", computeActiveSection);
    };
  }, []);

  function switchLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(1,14,36,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a
          href="#hero"
          className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent"
        >
          {t("title")}
        </a>

        <div className="hidden items-center gap-8 tracking-tight md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                activeSection === id
                  ? "border-b-2 border-cyan-400 pb-1 text-cyan-400"
                  : "text-slate-300 transition-colors hover:text-cyan-300"
              }
            >
              {t(id)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-md bg-[#112036] p-1 text-xs font-bold">
            {routing.locales.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => switchLocale(loc)}
                className={
                  locale === loc
                    ? "rounded px-2 py-1 text-[#00382d] bg-gradient-to-r from-[#38debb] to-[#58d6f1]"
                    : "rounded px-2 py-1 text-slate-400 transition-colors hover:text-slate-200"
                }
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href={t("resumeHref")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gradient-to-r from-[#38debb] to-[#58d6f1] px-6 py-2 font-semibold text-[#00382d] transition-transform active:scale-90"
          >
            {t("resume")}
          </a>
        </div>
      </div>
    </nav>
  );
}
