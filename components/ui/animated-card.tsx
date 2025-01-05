"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface AnimatedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  className?: string;
}

export const AnimatedCard = ({
  icon: Icon,
  title,
  description,
  technologies,
  className,
}: AnimatedCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-gradient-to-b from-neutral-50 to-neutral-100 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-neutral-900 dark:to-neutral-800",
        className
      )}
    >
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
        </div>
        <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-medium text-primary transition-colors group-hover:bg-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
    </motion.div>
  );
};
