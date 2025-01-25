import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-28 w-full">
      <h1 className="heading text-center text-3xl font-bold mb-10">
        Aftech's{" "}
        <span className="text-purple-600 dark:text-purple-400">
          Simplified Service Model
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              borderRadius: `calc(1.75rem * 0.96)`,
              // boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              // border: "1px solid slategray",
              // darkBorder: "1px solid white",
            }}
            className="flex-1 text-black dark:text-white bg-white/50 dark:bg-black-100/50 "
          >
            <div className="flex flex-col justify-start lg:items-start items-center p-4 py-8 md:p-6 lg:p-12 gap-6 hover:opacity-80 hover:translate-x-2 transition-all linear duration-300">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-20 lg:w-24 md:w-16"
              />
              <div className="text-center lg:text-left">
                <h1 className="text-2xl md:text-3xl font-bold dark:text-white text-black">
                  {card.title}
                </h1>
                <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
