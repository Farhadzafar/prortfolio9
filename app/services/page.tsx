"use client";
import PhaseCard from "./phaseCard";
import { IndustriesSection } from "@/components/industries";
import PhaseList from "./phaseList";
import { useState } from "react";
import { motion } from "framer-motion";
import { services, phases } from "@/data"; // Importing projects from data/index.ts
import { useI18n } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ServicesPage() {
  const { language } = useI18n();
  const t = translations[language];
  const [activePhase, setActivePhase] = useState(0);
  return (
    <div className="bg-white dark:bg-black-100">
      <div className="container mx-auto px-4 py-16 md:py-24 dark:bg-black-100">
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We provide comprehensive software development solutions to help
            businesses thrive in the digital age. Our expertise spans across
            various technologies and platforms.
          </p>
        </motion.div> */}

        <div className="flex justify-center relative my-10 z-10">
          <div className="max-w-[70vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words={t.ServicesPage.title}
              className="text-center text-[40px] md:text-5xl lg:text-6xl dark:text-white text-black"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl dark:text-gray-300 text-gray-700">
              {t.ServicesPage.subtitles}
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-shadow hover:shadow-lg dark:bg-black-100 bg-white rounded-lg overflow-hidden">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-200">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <section className="container mx-auto px-4 py-16 md:py-24 bg-white dark:bg-black-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-xl font-semibold text-pink-500 mb-4">
                  YOUR JOURNEY TO SUCCESS
                </h2>
                <PhaseList
                  activeIndex={activePhase}
                  onPhaseClick={setActivePhase}
                />
              </div>
              <div className="lg:col-span-8">
                <PhaseCard {...phases[activePhase]} isActive={true} />
              </div>
            </div>
          </div>
        </section>
        <IndustriesSection />
      </div>
    </div>
  );
}
