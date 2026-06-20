"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const computeActiveSection = () => {
      const referenceLine = window.innerHeight * 0.35;

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atPageBottom) {
        setActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      let current = SECTIONS[0].id;

      for (const { id } of SECTIONS) {
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

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(1,14,36,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a
          href="#hero"
          className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent"
        >
          Thibault NICOLAS' Portfolio
        </a>

        <div className="hidden items-center gap-8 tracking-tight md:flex">
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={
                activeSection === id
                  ? "border-b-2 border-cyan-400 pb-1 text-cyan-400"
                  : "text-slate-300 transition-colors hover:text-cyan-300"
              }
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-gradient-to-r from-[#38debb] to-[#58d6f1] px-6 py-2 font-semibold text-[#00382d] transition-transform active:scale-90"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
