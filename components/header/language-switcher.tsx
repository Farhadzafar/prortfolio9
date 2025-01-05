// "use client";

// import { Languages } from "lucide-react";
// import { useI18n, languages } from "@/lib/i18n";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function LanguageSwitcher() {
//   const { language, setLanguage } = useI18n();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-white dark:bg-black-100 text-black dark:text-white"
//         >
//           <Languages className="h-[1.2rem] w-[1.2rem]" />
//           <span className="sr-only">Switch language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="end"
//         className="bg-white dark:bg-black-100 text-black dark:text-white"
//       >
//         {Object.entries(languages).map(([code, name]) => (
//           <DropdownMenuItem
//             key={code}
//             onClick={() => setLanguage(code as keyof typeof languages)}
//             className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
//           >
//             {name}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import { Languages } from "lucide-react";
import { useI18n, languages } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-white dark:bg-black-100 text-black dark:text-white"
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-black-100 text-black dark:text-white"
      >
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as keyof typeof languages)}
            className="text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
