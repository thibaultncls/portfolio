import GlassCard from "./components/GlassCard";
import SectionLabel from "./components/SectionLabel";

type SkillCategory = {
  title: string;
  accent: "primary" | "tertiary";
  icon: string;
  items: string[];
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  accent: "primary" | "tertiary";
  reverse?: boolean;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "primary",
    icon: "🌐",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    accent: "tertiary",
    icon: "🗄️",
    items: ["Node.js", "Supabase", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Mobile",
    accent: "primary",
    icon: "📱",
    items: ["Flutter", "Dart", "Offline-first Sync", "Local Auth"],
  },
  {
    title: "Ecosystem",
    accent: "tertiary",
    icon: "🧩",
    items: [
      "Stripe Payments",
      "RevenueCat",
      "Algolia Search",
      "GitHub Actions",
    ],
  },
];

const projects: Project[] = [
  {
    title: "FitTrack Pro",
    description:
      "A high-performance fitness mobile app built for professional athletes. Features offline-first sync, complex workout routines, and subscription integration via RevenueCat.",
    tags: ["Flutter", "Supabase", "RevenueCat"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlcqo2YPhL5eJ7MXTHEJpNQE1rlwtDteMryYXK5MDB3XZCP2sp5iIpBndGoSq01mPrtcUd7f6_u3PUTU-Kx68TQbH6CWbgzsWE7IHsUwwYTufxfEPMxC2eGCj2k3lR1vhVjyRxtbOAFzZ7_eA9CKSnNRq6nhon7PdQzrLYZx7J24TXESmlljFqk36uVK4kmQXkmXcak-V5KWUMERIu4t9Vs8uFDmOX5uZQsSuYtMAH4R_qcFnlvKzoROwdFWPu0ig3F_EBYzKUljU",
    imageAlt:
      "Fitness mobile application showing workout metrics and progress charts",
    accent: "primary",
  },
  {
    title: "AutoVault",
    description:
      "Premium car marketplace with lightning-fast search capabilities using Algolia. Built with an editorial layout to emphasize high-quality vehicle imagery and technical specs.",
    tags: ["React", "Algolia", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZJCDxRwhvp6K1_M9p762g5vsgZgP6b0HtEyd6rl5P6k_nkiOOkIY743bLYLjU4chz26xoAhy5cET240K2SV4KjN_GaL7usMWjDb4UpLqVRLt-p0_5tDXCrrwi4FQCL8yIpOe0hK_KDbW7nqD9tWsSG4RNwru6iMRG69txQ4fYSydgh11Biun_i4tB3vNTsprZE0mYgEQr_t1zhW_eyb_v7tVY7-jy3MR6UB3cddjY1EV3Uh3Zz1lWz8teRHoqlzuiFjZrFotJGU8",
    imageAlt:
      "Modern car marketplace website with search filters and premium vehicle listings",
    accent: "tertiary",
    reverse: true,
  },
];

const accentMap = {
  primary: {
    text: "text-[#38debb]",
    bg: "bg-[#38debb]/10",
    borderLeft: "lg:border-l-4 lg:border-l-[#38debb]",
    borderRight: "lg:border-r-4 lg:border-r-[#38debb]",
    shadow: "hover:shadow-[0_0_30px_rgba(56,222,187,0.3)]",
    chip: "text-[#58d6f1]",
  },
  tertiary: {
    text: "text-[#58d6f1]",
    bg: "bg-[#58d6f1]/10",
    borderLeft: "lg:border-l-4 lg:border-l-[#58d6f1]",
    borderRight: "lg:border-r-4 lg:border-r-[#58d6f1]",
    shadow: "hover:shadow-[0_0_30px_rgba(88,214,241,0.3)]",
    chip: "text-[#38debb]",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#041329] font-sans text-[#d6e3ff] selection:bg-[#38debb] selection:text-[#00382d]">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] [background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJhWoWgmqnd-OPtbLczLG37kOJLR4ryHl6w9E5XOW3aciFDUfZmDbKHRIFsRL-XKulG2vD3HdFUaOFCCg8sU9_YsZ8_sL_TibQDYh_J7LImUBqmRGf4iBghnfHmcIbEK5kBMqNg64-J_p8ONN5NlENIG15HMmWkbzeLWKVA29RONTfeh4iQ79223FXvxQO39qRGlzDUupspnBJZesSHcR8l7Sba3-WpXZ3V9eHF50wj78VAp96pZ_7fxUlDKr4Ri4ZJgNUYJZfAyE')]" />
      <div className="fixed left-[-200px] top-[-200px] -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,222,187,0.05)_0%,rgba(88,214,241,0.02)_50%,transparent_100%)] blur-[80px]" />
      <div className="fixed bottom-[-200px] right-[-200px] -z-10 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(56,222,187,0.05)_0%,rgba(88,214,241,0.02)_50%,transparent_100%)] blur-[80px]" />

      <nav className="fixed top-0 z-50 w-full bg-slate-900/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(1,14,36,0.08)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <a
            href="#hero"
            className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent"
          >
            DevPortfolio
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

      <main className="relative">
        <section
          id="hero"
          className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center overflow-hidden px-8 pt-20"
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="z-10 lg:col-span-7">
              <span className="mb-6 inline-block rounded-full bg-[#001e17] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#38debb]">
                Available for new opportunities
              </span>

              <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
                Building{" "}
                <span className="text-[#38debb] italic">Tomorrow&apos;s</span>{" "}
                Experiences
              </h1>

              <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#c5c6cd] md:text-xl">
                Full-stack &amp; Mobile Developer crafting high-end digital
                solutions with a focus on performance, scalability, and
                editorial design.
              </p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="#projects"
                  className="rounded-md bg-gradient-to-br from-[#38debb] to-[#58d6f1] px-8 py-4 font-bold text-[#00382d] transition-all hover:shadow-[0_0_30px_rgba(56,222,187,0.3)]"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="flex items-center gap-2 rounded-md px-8 py-4 font-bold text-[#d6e3ff] transition-all hover:bg-[#27354c]"
                >
                  <GlassCard>
                    <div className="contents" />
                  </GlassCard>
                  Contact me <span className="text-[#38debb]">→</span>
                </a>
              </div>
            </div>

            <div className="relative hidden lg:col-span-5 lg:block">
              <div className="relative flex aspect-square items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38debb]/20 to-[#58d6f1]/20 blur-[100px]" />
                <GlassCard className="relative h-full w-full overflow-hidden rounded-3xl p-8">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGvoqUGTGrQIJ2fj_v3vePskHAl5jfvg-HV8wq4QP4jmVmcukOzyom-4Y26PIASPbC_4Xjrbn1bQ8jD6EpcWelsgb6_ZYgcPwe5lefaf2h9Q7eBWvY99zmIb4hui6CQ9gCPMeclgrvtzmXeYlKnRMvjtTy-1Odm_y7F_4KFDoDGeWotX70cymwJm6f3ndn6irPgcsXPU4pMouo1Jg-FQFgGK-Bdg3a_OaGx1xTD4YCa3FxS1O1860THOkJ7FzQvJ_90kDlvgxo1E"
                    alt="Abstract glowing circuit board and network lines tech visual"
                    className="h-full w-full rounded-2xl object-cover opacity-60 mix-blend-screen"
                  />
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="relative bg-[#0d1c32] px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <SectionLabel>Capabilities</SectionLabel>
                <h2 className="text-4xl font-bold tracking-tight">
                  The Tech Ecosystem
                </h2>
              </div>
              <p className="max-w-md text-[#c5c6cd]">
                Leveraging modern tools to build efficient, scalable, and
                user-centric applications across all platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category) => {
                const accent = accentMap[category.accent];

                return (
                  <GlassCard
                    key={category.title}
                    className="rounded-xl p-8 transition-all duration-300 hover:-translate-y-2"
                  >
                    <div
                      className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${accent.bg}`}
                    >
                      <span className={`text-xl ${accent.text}`}>
                        {category.icon}
                      </span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
                    <ul className="space-y-3 text-sm text-[#c5c6cd]">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              category.accent === "primary"
                                ? "bg-[#38debb]"
                                : "bg-[#58d6f1]"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-8 py-24">
          <SectionLabel>
            <span className="block text-center">Portfolio</span>
          </SectionLabel>
          <h2 className="mb-20 text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            Selected Artifacts
          </h2>

          <div className="space-y-32">
            {projects.map((project) => {
              const accent = accentMap[project.accent];

              return (
                <div
                  key={project.title}
                  className="group relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
                >
                  <div
                    className={`relative z-0 ${project.reverse ? "lg:order-first lg:col-span-7" : "lg:col-span-7"}`}
                  >
                    <GlassCard className="aspect-video overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </GlassCard>
                  </div>

                  <GlassCard
                    className={[
                      "z-10 rounded-2xl p-8 shadow-2xl md:p-12 lg:w-[500px]",
                      project.reverse
                        ? `lg:col-span-6 lg:ml-auto ${accent.borderRight}`
                        : `lg:absolute lg:right-0 lg:col-span-6 ${accent.borderLeft}`,
                    ].join(" ")}
                  >
                    <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                    <p className="mb-8 leading-relaxed text-[#c5c6cd]">
                      {project.description}
                    </p>
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full bg-[#112036] px-3 py-1 text-xs font-semibold ${accent.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className={`inline-flex items-center gap-2 font-bold transition-all hover:gap-4 ${accent.text}`}
                    >
                      View project <span className="text-sm">↗</span>
                    </a>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </section>

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
                      { label: "GitHub", icon: "</>" },
                      { label: "LinkedIn", icon: "💼" },
                      { label: "Twitter / X", icon: "@" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="group flex items-center gap-4 text-[#c5c6cd] transition-colors hover:text-[#38debb]"
                      >
                        <span className="rounded-lg bg-[#112036] p-2 transition-colors group-hover:bg-[#38debb]/10">
                          {social.icon}
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
                  <p className="text-sm text-[#d6e3ff]">
                    Remote / San Francisco, CA
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}
