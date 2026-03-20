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
    title: "Frontend",
    accent: "primary",
    icon: Monitor,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    accent: "tertiary",
    icon: Database,
    items: ["Node.js", "Supabase", "Prisma ORM", "PostgreSQL"],
  },
  {
    title: "Mobile",
    accent: "primary",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Offline-first Sync", "Local Auth"],
  },
  {
    title: "Ecosystem",
    accent: "tertiary",
    icon: Puzzle,
    items: [
      "Stripe Payments",
      "RevenueCat",
      "Algolia Search",
      "GitHub Actions",
    ],
  },
];

export const projects: Project[] = [
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

