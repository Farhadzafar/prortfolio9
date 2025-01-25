"use client";
import { CardContainer } from "@/components/ui/3d-card"; // Adjust the import path as necessary
import { IndustriesSection } from "@/components/industries";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services, phases } from "@/data";
import { useI18n } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

import { Spotlight } from "@/components/ui/SpotLights";
import { CardBody, CardItem } from "@/components/ui/3d-card"; // Adjust the import path as necessary
import { Timeline } from "@/components/ui/timeline";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

export default function ServicesPage() {
  const { language } = useI18n();
  const t = translations[language];
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="bg-white dark:bg-black-100">
      <Spotlight />

      <div className="mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-center relative my-10 z-10">
          <div className="max-w-[70vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words={t.ServicesPage.title}
              className="text-center text-[40px] md:text-5xl lg:text-6xl dark:text-white text-black"
            />
            <p className="text-center md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl dark:text-gray-300 text-gray-700">
              {t.ServicesPage.subtitles}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <CardContainer className="inter-var">
                <CardBody className="bg-white dark:bg-black-200 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold dark:text-white text-neutral-600"
                  >
                    {service.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {service.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-3">
                    <Image
                      src={service.imageSrc}
                      height="400"
                      width="400"
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {service.technologies.map((tech, techIndex) => (
                      <CardItem
                        key={techIndex}
                        translateZ={20}
                        as={Link}
                        href="#"
                        target="__blank"
                        className="px-4 py-1 rounded-xl text-xs font-normal dark:text-white text-neutral-800 dark:bg-gray-800 bg-gray-100"
                      >
                        {tech}
                      </CardItem>
                    ))}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>

        {/* /////////////////////////////////////////////////////////////////// */}
        {/* <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="text-xl font-semibold text-pink-500 mb-6">
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
        </section> */}

        <Timeline />

        {/* ///////////////////////////////////////////////////////////////// */}
        <IndustriesSection />
      </div>
    </div>
  );
}
