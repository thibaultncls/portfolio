import type { LucideIcon } from "lucide-react";
import { Database, Monitor, Puzzle, Smartphone } from "lucide-react";

export type SkillCategory = {
  title: string;
  accent: "primary" | "tertiary";
  icon: LucideIcon;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
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

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    accent: "primary",
    icon: Monitor,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "WordPress"],
  },
  {
    title: "Backend & APIs",
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
    title: "Mobile Development",
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
    title: "Tools & Infrastructure",
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

export const projects: Project[] = [
  {
    title: "Strongly",
    description:
      "A premium fitness application designed to create, track, and optimize workouts. Built with an offline-first architecture, it features advanced workout templates, real-time synchronization, and a full subscription system powered by RevenueCat. Focused on performance, scalability, and a high-end user experience.",
    tags: [
      "Flutter",
      "Drift",
      "Supabase",
      "RevenueCat",
      "Node.js",
      "Architecture",
    ],
    image: "/images/mockup.png",
    imageAlt:
      "Strongly fitness app with workout tracking, templates and performance analytics",
    accent: "primary",
    link: "https://strongly-229ff.web.app/",
  },
  {
    title: "Cookit",
    description:
      "A recipe web application built with React to deliver a clean, responsive, and intuitive cooking experience. Users can explore recipes through a modern interface designed with a strong focus on usability, performance, and frontend architecture.",
    tags: [
      "React",
      "TypeScript",
      "UI/UX",
      "Responsive Design",
      "Node.js",
      "MySql",
    ],
    image: "/images/cookit.png",
    imageAlt:
      "Cookit React recipe application showcasing a modern and responsive cooking interface",
    accent: "tertiary",
    link: "https://gitlab.com/tibo_ncls/recipe-app-front",
  },
  {
    title: "Muscle Track",
    description:
      "A mobile application built with Flutter to track your muscle progress. It allows you to add your exercises, sets, and reps, and to see your progress over time.",
    tags: ["Flutter", "SQLite", "Provider", "Mobile", "IOS deployments"],
    image: "/images/muscle-track.png",
    imageAlt:
      "Muscle Track mobile application showcasing a modern and responsive muscle tracking interface",
    accent: "tertiary",
    link: "https://apps.apple.com/fr/app/muscle-track/id6503449485",
  },
  {
    title: "Senior Bretagne",
    description:
      "A modern and accessible website designed for Conseils & Gestion, a company providing home accessibility solutions for seniors, including stairlifts, walk-in showers, and personal emergency systems. Built with WordPress and custom themes, it features a clean, responsive design and a focus on usability and accessibility.",
    tags: [
      "WordPress",
      "Custom Themes",
      "SEO",
      "Accessibility",
      "Performance",
      "Responsive Design",
    ],
    image: "/images/senior-bretagne.png",
    imageAlt:
      "Senior Bretagne web application showcasing a modern and responsive website interface",
    accent: "primary",
    link: "https://senior-bretagne.fr/",
  },
];
