"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { I18nContext, Language } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <I18nContext.Provider value={{ language, setLanguage }}>
        {children}
      </I18nContext.Provider>
    </ThemeProvider>
  );
}
