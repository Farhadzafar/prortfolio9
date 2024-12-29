import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
// import { ThemeProvider } from "./provider";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFTECH",
  description: "Innovative App Development Solutions by AFTECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
