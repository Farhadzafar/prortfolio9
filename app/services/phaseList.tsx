"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PhaseIcon from "./phaseIcon";

interface PhaseListProps {
  activeIndex: number;
  onPhaseClick: (index: number) => void;
}

const phases = [
  "DISCOVERY",
  "ESTIMATE",
  "BLUEPRINT",
  "ENGINEERING",
  "TRAINING & SUPPORT",
];

export default function PhaseList({
  activeIndex,
  onPhaseClick,
}: PhaseListProps) {
  return (
    <div className="relative">
      {/* Background decorative image */}
      <div className="absolute left-8 top-32 -z-10 w-48 opacity-20">
        <Image
          src="/layers.svg"
          alt="Layers"
          width={200}
          height={200}
          className="w-full"
        />
      </div>

      {/* Phase List */}
      <div className="space-y-6 border-l-2 pl-8 transition-all duration-300 dark:border-gray-700 border-gray-200">
        {phases.map((phase, index) => (
          <motion.div
            key={phase}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onPhaseClick(index)}
            className="relative cursor-pointer group flex items-center gap-4"
          >
            {/* Active/Inactive Dot */}
            <div
              className={`absolute -left-[33px] h-4 w-4 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-pink-500 scale-125 ring-4 ring-pink-200"
                  : "bg-gray-300 dark:bg-gray-600 group-hover:bg-pink-400"
              }`}
            />
            {/* Phase Icon */}
            <AnimatePresence mode="wait">
              <PhaseIcon phase={index} isActive={activeIndex === index} />
            </AnimatePresence>
            {/* Phase Text */}
            <p
              className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
                activeIndex === index
                  ? "text-pink-500"
                  : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100"
              }`}
            >
              {phase}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
