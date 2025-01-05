"use client";

import { motion } from "framer-motion";
import {
  Layers,
  LineChart,
  Lightbulb,
  Code,
  GraduationCap,
} from "lucide-react";

interface PhaseIconProps {
  phase: number;
  isActive: boolean;
}

const icons = [
  { Icon: Lightbulb, color: "text-yellow-500" },
  { Icon: LineChart, color: "text-blue-500" },
  { Icon: Layers, color: "text-pink-500" },
  { Icon: Code, color: "text-purple-500" },
  { Icon: GraduationCap, color: "text-green-500" },
];

export default function PhaseIcon({ phase, isActive }: PhaseIconProps) {
  const { Icon, color } = icons[phase];

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{
        scale: isActive ? 1 : 0.8,
        rotate: 0,
      }}
      exit={{ scale: 0, rotate: 180 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`w-12 h-12 rounded-xl flex items-center justify-center
        ${isActive ? "bg-white/10" : "bg-gray-100"}`}
    >
      <Icon
        className={`w-6 h-6 ${isActive ? color : "text-gray-400"} 
          transition-colors duration-300`}
      />
    </motion.div>
  );
}
