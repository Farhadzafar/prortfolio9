"use client";

import {
  Cpu,
  Car,
  Shield,
  BarChart2,
  PiggyBank,
  Heart,
  Factory,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  Cpu,
  Car,
  Shield,
  BarChart2,
  PiggyBank,
  Heart,
  Factory,
} as const;

type IconName = keyof typeof iconMap;

interface IndustryCardProps {
  icon: IconName;
  title: string;
  description: string;
  gradient: string;
}

export function IndustryCard({
  icon,
  title,
  description,
  gradient,
}: IndustryCardProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className={cn(
        "flex-shrink-0 w-[280px] snap-center",
        "rounded-xl p-6",
        "bg-gradient-to-br",
        gradient,
        "border border-border/50",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-lg",
        "group"
      )}
    >
      <div className="bg-background/50 rounded-lg p-3 w-fit mb-4 group-hover:bg-background/80 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
