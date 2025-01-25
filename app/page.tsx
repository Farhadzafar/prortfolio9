"use client";
// import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

import dynamic from "next/dynamic";
import Fqa from "@/components/Fqa";
import About from "@/components/About";

const BrowserComponent = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 text-black dark:text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-white dark:bg-black-100">
        <Hero />
        <BrowserComponent />
        <Experience />
        <About />
        <Fqa />
      </div>
    </main>
  );
};

export default Home;
