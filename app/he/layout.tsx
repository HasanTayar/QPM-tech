import React from "react";
import { Noto_Sans_Hebrew } from "next/font/google";
const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] });
import "../globals.css";

import HeaderHe from "@/components/header/header-he";
import FooterHe from "@/components/footer/footer-he";
export default function HeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={noto_sans_hebrew.className}>
        <HeaderHe />
        {children}
        <FooterHe />
      </body>
    </html>
  );
}
