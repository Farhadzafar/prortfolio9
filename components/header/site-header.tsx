"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";

import { ThemeToggle } from "@/components/header/theme-toggle";
import { LanguageSwitcher } from "@/components/header/language-switcher";
import { MainNav } from "@/components/header/main-nav";
import { MobileNav } from "@/components/header/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black-100 backdrop-blur dark:border-gray-800">
      <div className="container flex h-14 items-center justify-between">
        {/* Left: Logo and MobileNav */}
        <div className="flex items-center space-x-4">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-black dark:text-white" />
            <span className="hidden font-bold sm:inline-block text-black dark:text-white">
              Aftech
            </span>
          </Link>
        </div>

        {/* Center: MainNav (hidden on mobile) */}
        <div className="hidden md:flex md:flex-1 justify-center">
          <MainNav />
        </div>

        {/* Right: Theme and Language Toggles */}
        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

// import { useI18n } from "@/lib/i18n";

// export function SiteHeader() {
//   const { language } = useI18n();

//   const headerText = language === "en" ? "Aftech" : "أفتيك"; // Example of conditional translation

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black-100 backdrop-blur dark:border-gray-800">
//       <div className="container flex h-14 items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <MobileNav />
//           <Link href="/" className="flex items-center space-x-2">
//             <Code2 className="h-6 w-6 text-black dark:text-white" />
//             <span className="hidden font-bold sm:inline-block text-black dark:text-white">
//               {headerText}
//             </span>
//           </Link>
//         </div>
//         <div className="hidden md:flex md:flex-1 justify-center">
//           <MainNav />
//         </div>
//         <div className="flex items-center space-x-2">
//           <LanguageSwitcher />
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }
