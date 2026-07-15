import { getTranslations } from "next-intl/server";
import GlassCard from "./GlassCard";

export default async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center overflow-hidden px-8 pt-20"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 lg:col-span-7">
          <span className="mb-6 inline-block rounded-full bg-[#001e17] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#38debb]">
            {t("badge")}
          </span>

          <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
            {t.rich("title", {
              highlight: (chunks) => (
                <span className="text-[#38debb] italic">{chunks}</span>
              ),
            })}
          </h1>

          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[#c5c6cd] md:text-xl">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="rounded-md bg-gradient-to-br from-[#38debb] to-[#58d6f1] px-8 py-4 font-bold text-[#00382d] transition-all hover:shadow-[0_0_30px_rgba(56,222,187,0.3)]"
            >
              {t("ctaWork")}
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-md px-8 py-4 font-bold text-[#d6e3ff] transition-all hover:bg-[#27354c]"
            >
              <GlassCard>
                <div className="contents" />
              </GlassCard>
              {t("ctaContact")} <span className="text-[#38debb]">→</span>
            </a>
          </div>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative flex aspect-square items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38debb]/20 to-[#58d6f1]/20 blur-[100px]" />
            <GlassCard className="relative h-full w-full overflow-hidden rounded-3xl p-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGvoqUGTGrQIJ2fj_v3vePskHAl5jfvg-HV8wq4QP4jmVmcukOzyom-4Y26PIASPbC_4Xjrbn1bQ8jD6EpcWelsgb6_ZYgcPwe5lefaf2h9Q7eBWvY99zmIb4hui6CQ9gCPMeclgrvtzmXeYlKnRMvjtTy-1Odm_y7F_4KFDoDGeWotX70cymwJm6f3ndn6irPgcsXPU4pMouo1Jg-FQFgGK-Bdg3a_OaGx1xTD4YCa3FxS1O1860THOkJ7FzQvJ_90kDlvgxo1E"
                alt={t("imageAlt")}
                className="h-full w-full rounded-2xl object-cover opacity-60 mix-blend-screen"
              />
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
