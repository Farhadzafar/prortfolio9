"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PhaseFeature {
  title: string;
  description: string;
}

interface PhaseCardProps {
  phase: string;
  title: string;
  description: string;
  features: PhaseFeature[];
  isActive?: boolean;
}

export default function PhaseCard({
  phase,
  title,
  description,
  features,
  isActive = false,
}: PhaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-3xl p-10 transition-all duration-500 shadow-lg ${
        isActive
          ? "bg-[#1e1b4b] text-white shadow-2xl" // Dark background when active
          : "bg-white text-gray-900 dark:bg-[#1e1b4b] dark:text-gray-300" // Light background and dark mode styles
      }`}
    >
      {/* Phase and Title Section */}
      <div className="mb-8">
        <p
          className={`font-medium mb-4 ${
            isActive ? "text-pink-400" : "text-pink-500 dark:text-pink-400"
          }`}
        >
          {phase}
        </p>
        <h3
          className={`text-3xl font-bold mb-4 ${
            isActive ? "text-white" : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-lg leading-relaxed ${
            isActive ? "text-gray-300" : "text-gray-700 dark:text-gray-400"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div
              className={`mt-1.5 ${
                isActive ? "text-pink-400" : "text-pink-500 dark:text-pink-400"
              }`}
            >
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h4
                className={`text-lg font-semibold mb-2 ${
                  isActive ? "text-white" : "text-gray-900 dark:text-gray-100"
                }`}
              >
                {feature.title}
              </h4>
              <p
                className={`leading-relaxed ${
                  isActive
                    ? "text-gray-300"
                    : "text-gray-700 dark:text-gray-400"
                }`}
              >
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
