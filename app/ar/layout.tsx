import React from "react";
import { Noto_Sans_Hebrew } from "next/font/google";

const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] });
import "../globals.css";
import HeaderAr from "@/components/header/header-ar";
import FooterAr from "@/components/footer/footer-ar";
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={noto_sans_hebrew.className}>
        <HeaderAr />
        {children}
        <FooterAr />
      </body>
    </html>
  );
}
