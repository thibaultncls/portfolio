import { getTranslations } from "next-intl/server";
import { accentMap, skillCategoryMeta } from "../data/portfolioData";
import GlassCard from "./GlassCard";
import SectionLabel from "./SectionLabel";

export default async function SkillsSection() {
  const t = await getTranslations("skills");

  return (
    <section id="skills" className="relative bg-[#0d1c32] px-8 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight">{t("title")}</h2>
          </div>
          <p className="max-w-md text-[#c5c6cd]">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategoryMeta.map((category) => {
            const accent = accentMap[category.accent];
            const Icon = category.icon;

            return (
              <GlassCard
                key={category.id}
                className="rounded-xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${accent.bg}`}
                >
                  <Icon className={`h-6 w-6 ${accent.text}`} />
                </div>
                <h3 className="mb-4 text-xl font-bold">
                  {t(`categories.${category.id}.title`)}
                </h3>
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
  );
}
