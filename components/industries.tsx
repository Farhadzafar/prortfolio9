"use client";

import { useRef, useState, useEffect } from "react";
import { industries } from "@/lib/constants/industries";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse/Touch Drag Handlers
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const container = scrollRef.current;
    if (container) {
      setIsDragging(true);
      if ("touches" in e) {
        setStartX(e.touches[0].pageX);
      } else {
        setStartX(e.pageX);
      }
      setScrollLeft(container.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const container = scrollRef.current;
    if (container) {
      const x = "touches" in e ? e.touches[0].pageX : e.pageX;
      const walk = (x - startX) * 1.5; // Adjust scroll speed
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse Wheel Scrolling for Desktop
  const handleWheelScroll = (e: React.WheelEvent) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: e.deltaY < 0 ? -200 : 200, // Adjust scroll step
        behavior: "smooth",
      });
    }
  };

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current || isDragging) return;

      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 1) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 2; // Adjust auto-scroll speed
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section className="py-16 overflow-hidden">
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
        Industries We Work In
      </h2>
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white dark:from-black-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white dark:from-black-100 to-transparent z-10" />

        {/* Scrolling container */}
        <div
          ref={scrollRef}
          className="flex gap-16 overflow-x-scroll scrollbar-hide py-4 cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleMouseDown(e)}
          onTouchStart={(e) => handleMouseDown(e)}
          onMouseMove={(e) => handleMouseMove(e)}
          onTouchMove={(e) => handleMouseMove(e)}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheelScroll} // Enable wheel-based scrolling
        >
          {/* Repeat items for infinite scroll effect */}
          {[...industries, ...industries, ...industries].map((industry, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center gap-3 w-24 flex-shrink-0",
                "transition-all duration-300 hover:scale-110"
              )}
            >
              {/* Icon container with dynamic background */}
              <div className="p-4 rounded-xl bg-white dark:bg-black-100 hover:bg-gray-100 dark:hover:bg-black/60 transition-colors">
                <industry.icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </div>
              {/* Text */}
              <span className="text-sm font-medium text-center text-gray-800 dark:text-gray-200">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
