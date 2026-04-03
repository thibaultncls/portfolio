export default function Navbar() {
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
          <a
            className="border-b-2 border-cyan-400 pb-1 text-cyan-400"
            href="#hero"
          >
            Hero
          </a>
          <a
            className="text-slate-300 transition-colors hover:text-cyan-300"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-slate-300 transition-colors hover:text-cyan-300"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-slate-300 transition-colors hover:text-cyan-300"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-md bg-gradient-to-r from-[#38debb] to-[#58d6f1] px-6 py-2 font-semibold text-[#00382d] transition-transform active:scale-90"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
