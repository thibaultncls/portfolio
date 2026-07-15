import type { LucideIcon } from "lucide-react";
import { Database, Monitor, Puzzle, Smartphone } from "lucide-react";

export type SkillCategoryId = "frontend" | "backend" | "mobile" | "tools";

export type ProjectId =
  | "strongly"
  | "cookit"
  | "muscleTrack"
  | "seniorBretagne";

export type SkillCategoryMeta = {
  id: SkillCategoryId;
  accent: "primary" | "tertiary";
  icon: LucideIcon;
  items: string[];
};

export type ProjectMeta = {
  id: ProjectId;
  tags: string[];
  image: string;
  accent: "primary" | "tertiary";
  reverse?: boolean;
  link?: string;
};

export type Accent = "primary" | "tertiary";

export type AccentStyle = {
  text: string;
  bg: string;
  borderLeft: string;
  borderRight: string;
  shadow: string;
  chip: string;
};

export const accentMap: Record<Accent, AccentStyle> = {
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

export const skillCategoryMeta: SkillCategoryMeta[] = [
  {
    id: "frontend",
    accent: "primary",
    icon: Monitor,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "WordPress"],
  },
  {
    id: "backend",
    accent: "tertiary",
    icon: Database,
    items: [
      "Node.js",
      "Supabase",
      "Prisma ORM",
      "PostgreSQL",
      "PHP",
      "MySql",
      "Symfony",
    ],
  },
  {
    id: "mobile",
    accent: "primary",
    icon: Smartphone,
    items: [
      "Flutter",
      "Dart",
      "Offline-first Sync",
      "Local Auth",
      "Android",
      "IOS",
    ],
  },
  {
    id: "tools",
    accent: "tertiary",
    icon: Puzzle,
    items: [
      "Stripe Payments",
      "RevenueCat",
      "Algolia Search",
      "GitHub Actions",
      "Supabase",
      "Firebase",
    ],
  },
];

export const projectMeta: ProjectMeta[] = [
  {
    id: "strongly",
    tags: [
      "Flutter",
      "Drift",
      "Supabase",
      "RevenueCat",
      "Node.js",
      "Architecture",
    ],
    image: "/images/mockup.png",
    accent: "primary",
    link: "https://strongly-229ff.web.app/",
  },
  {
    id: "cookit",
    tags: [
      "React",
      "TypeScript",
      "UI/UX",
      "Responsive Design",
      "Node.js",
      "MySql",
    ],
    image: "/images/cookit.png",
    accent: "tertiary",
    link: "https://gitlab.com/tibo_ncls/recipe-app-front",
  },
  {
    id: "muscleTrack",
    tags: ["Flutter", "SQLite", "Provider", "Mobile", "IOS deployments"],
    image: "/images/muscle-track.png",
    accent: "tertiary",
    link: "https://apps.apple.com/fr/app/muscle-track/id6503449485",
  },
  {
    id: "seniorBretagne",
    tags: [
      "WordPress",
      "Custom Themes",
      "SEO",
      "Accessibility",
      "Performance",
      "Responsive Design",
    ],
    image: "/images/senior-bretagne.png",
    accent: "primary",
    link: "https://senior-bretagne.fr/",
  },
];
