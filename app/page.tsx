"use client";

import { useI18n } from "@/lib/i18n";
import { translations } from "@/lib/translations";
import { ThemeToggle } from "@/components/header/theme-toggle";
import { LanguageSwitcher } from "@/components/header/language-switcher";

// import { navItems } from "@/data";

import Hero from "@/components/Hero";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";
// import { FloatingNav } from "@/components/ui/FloatingNavbar";

import dynamic from "next/dynamic";

const BrowserComponent = dynamic(() => import("@/components/Grid"), {
  ssr: false,
});

const Home = () => {
  return (
    <main className="relative bg-white dark:bg-black-100 text-black dark:text-white flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-white dark:bg-black-100">
        <Hero />
        <BrowserComponent />
        {/* <RecentProjects /> */}
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
      </div>
    </main>
  );
};

export default Home;
