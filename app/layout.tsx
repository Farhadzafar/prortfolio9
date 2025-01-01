import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/header/site-header";
import { Footer } from "@/components/footer/footer";
import "./globals.css";
import { Providers } from "./providers";

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
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
