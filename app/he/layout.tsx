import React from "react";
import { Noto_Sans_Hebrew } from "next/font/google";
import FooterHe from "@/components/footer/footer-he";
import HeaderHe from "@/components/header/header-he";
const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] });
import "../globals.css";
export default function HeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" suppressHydrationWarning>
      <body className={noto_sans_hebrew.className}>
        <HeaderHe />
        {children}
        <FooterHe />
      </body>
    </html>
  );
}
