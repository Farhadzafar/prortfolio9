"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "@/components/ui/Pin";
import { projects } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function PortfolioPage() {
  return (
    <div className="bg-white dark:bg-black-100">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Our Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-black dark:text-white">
            Explore our successful projects and see how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-16"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <Link href={`/portfolio/${item.id}`}>
                <PinContainer title={item.link} href={item.link}>
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                    <div
                      className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                      style={{ backgroundColor: "#13162D" }}
                    >
                      <img
                        src={item.img}
                        alt="cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <img
                      src={item.img}
                      alt="cover"
                      className="z-10 absolute bottom-0 w-40 h-40 object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base text-black dark:text-white">
                    {item.title}
                  </h1>
                  <p className="text-sm lg:text-lg text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </PinContainer>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
