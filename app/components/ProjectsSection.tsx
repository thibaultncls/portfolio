import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { accentMap, projectMeta } from "../data/portfolioData";
import GlassCard from "./GlassCard";
import SectionLabel from "./SectionLabel";

export default async function ProjectsSection() {
  const t = await getTranslations("projects");

  return (
    <section id="projects" className="mx-auto max-w-7xl px-8 py-24">
      <SectionLabel>
        <span className="block text-center">{t("label")}</span>
      </SectionLabel>
      <h2 className="mb-20 text-center text-4xl font-extrabold tracking-tight md:text-5xl">
        {t("title")}
      </h2>

      <div className="space-y-32">
        {projectMeta.map((project) => {
          const accent = accentMap[project.accent];

          return (
            <div
              key={project.id}
              className="group relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
            >
              <div
                className={`relative z-0 ${
                  project.reverse
                    ? "lg:order-first lg:col-span-7"
                    : "lg:col-span-7"
                }`}
              >
                <GlassCard className="aspect-video overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={t(`items.${project.id}.imageAlt`)}
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
                <h3 className="mb-4 text-2xl font-bold">
                  {t(`items.${project.id}.title`)}
                </h3>
                <p className="mb-8 leading-relaxed text-[#c5c6cd]">
                  {t(`items.${project.id}.description`)}
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
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-bold transition-all hover:gap-4 ${accent.text}`}
                >
                  {t("viewProject")} <ArrowUpRight className="h-4 w-4" />
                </a>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
