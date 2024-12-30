"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-4">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Aftech</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 justify-center">
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
