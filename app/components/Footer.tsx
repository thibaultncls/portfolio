export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/20 bg-slate-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <div className="text-sm uppercase tracking-widest text-slate-500">
          © 2024 Developer Portfolio. Built with Ethereal Architect logic.
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest">
          <a
            href="#"
            className="text-slate-500 underline underline-offset-8 opacity-80 transition-all hover:text-cyan-300 hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-500 underline underline-offset-8 opacity-80 transition-all hover:text-cyan-300 hover:opacity-100"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-slate-500 underline underline-offset-8 opacity-80 transition-all hover:text-cyan-300 hover:opacity-100"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
}

