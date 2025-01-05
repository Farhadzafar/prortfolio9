// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const routes = [
//   { href: "/", label: "Home" },
//   { href: "/services", label: "Services" },
//   // { label: "Projects", href: "#projects" },
//   // { label: "Testimonials", href: "#testimonials" },
//   { href: "/contact", label: "Contact" },
//   { href: "/portfolio", label: "Projects" },
// ];

// interface MainNavProps {
//   mobile?: boolean;
// }

// export function MainNav({ mobile }: MainNavProps) {
//   const pathname = usePathname();

//   return (
//     <nav
//       className={cn(
//         "flex",
//         mobile ? "flex-col space-y-4" : "items-center space-x-6"
//       )}
//     >
//       {routes.map((route) => (
//         <Link
//           key={route.href}
//           href={route.href}
//           className={cn(
//             "text-sm font-medium transition-colors hover:text-foreground/80",
//             pathname === route.href
//               ? "text-foreground font-semibold after:block after:h-0.5 after:bg-foreground after:mt-0.5"
//               : "text-foreground/60",
//             mobile && "text-lg"
//           )}
//         >
//           {route.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const routes = [
//   { href: "/", label: "Home" },
//   { href: "/services", label: "Services" },
//   { href: "/contact", label: "Contact" },
//   { href: "/portfolio", label: "Projects" },
// ];

// interface MainNavProps {
//   mobile?: boolean;
// }

// export function MainNav({ mobile }: MainNavProps) {
//   const pathname = usePathname();

//   return (
//     <nav
//       className={cn(
//         "flex",
//         mobile ? "flex-col space-y-4" : "items-center space-x-6"
//       )}
//     >
//       {routes.map((route) => (
//         <Link
//           key={route.href}
//           href={route.href}
//           className={cn(
//             "text-sm font-medium transition-colors hover:text-foreground/80",
//             pathname === route.href
//               ? "text-foreground font-semibold after:block after:h-0.5 after:bg-foreground after:mt-0.5"
//               : "text-foreground/60",
//             mobile && "text-lg"
//           )}
//         >
//           {route.label}
//         </Link>
//       ))}
//     </nav>
//   );
// }

import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  {
    href: "/",
    label: {
      en: "Home",
      ar: "الرئيسية",
    },
  },
  {
    href: "/services",
    label: {
      en: "Services",
      ar: "الخدمات",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      ar: "اتصل بنا",
    },
  },
  {
    href: "/portfolio",
    label: {
      en: "Projects",
      ar: "المشاريع",
    },
  },
];

interface MainNavProps {
  mobile?: boolean;
}

export function MainNav({ mobile }: MainNavProps) {
  const { language } = useI18n(); // Get the current language
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
            mobile && "text-lg"
          )}
        >
          {route.label[language]}{" "}
          {/* Dynamically render the label based on the current language */}
        </Link>
      ))}
    </nav>
  );
}
