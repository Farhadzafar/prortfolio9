"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainNav } from "@/components/header/main-nav";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-white dark:bg-black-100 text-black dark:text-white"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] max-h-[calc(100vh-2rem)] bg-white dark:bg-black-100"
      >
        <div className="px-2 py-6">
          <MainNav mobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}
