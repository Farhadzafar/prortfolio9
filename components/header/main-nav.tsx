"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { label: "About", href: "#about" },
  { href: "/services", label: "Services" },
  // { label: "Projects", href: "#projects" },
  // { label: "Testimonials", href: "#testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/portfolio", label: "Portfolio" },
];

interface MainNavProps {
  mobile?: boolean;
}

export function MainNav({ mobile }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex",
        mobile ? "flex-col space-y-4" : "items-center space-x-6"
      )}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-foreground/80",
            pathname === route.href
              ? "text-foreground font-semibold after:block after:h-0.5 after:bg-foreground after:mt-0.5"
              : "text-foreground/60",
            mobile && "text-lg",
            // Dark mode support
            "dark:text-white dark:hover:text-white dark:after:bg-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
