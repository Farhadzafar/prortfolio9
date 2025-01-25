"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { phases } from "@/data/index";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans mt-20  px-4 md:px-10"
      ref={containerRef}
    >
      <div className="flex justify-center items-center flex-col mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="w-full text-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-20">
        {phases.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start pt-8 md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-10 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <div className="hidden md:flex gap-2 justify-start items-center md:pl-16">
                <span className="text-pink-600">
                  {item.icon && React.createElement(item.icon)}
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white ">
                  {item.listTitle}
                </h3>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="flex gap-2 justify-start items-center md:hidden text-xl md:text-2xl mb-4 text-left">
                <span className="text-pink-600">
                  {item.icon && React.createElement(item.icon)}
                </span>
                <h3 className="text-xl font-bold text-black dark:text-white">
                  {item.listTitle}
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl p-6 md:p-10 transition-all duration-500 shadow-lg bg-white text-gray-900 dark:bg-[#1e1b4b] dark:text-gray-300"
              >
                <div className="mb-6 md:mb-8">
                  <p className="font-medium mb-4 text-pink-500 dark:text-pink-400">
                    {item.title}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {item.contentTitle}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                    {item.content}
                  </p>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {item.features &&
                    item.features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1.5 text-pink-500 dark:text-pink-400">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                            {feature.title}
                          </h4>
                          <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
