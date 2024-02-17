import React from "react";
import { Noto_Sans_Hebrew } from "next/font/google";

const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] });
import HeaderAr from "@/components/header/header-ar";
import FooterAr from "@/components/footer/footer-ar";
export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <header>
        <HeaderAr />
      </header>
      <main className={noto_sans_hebrew.className}>{children}</main>
      <footer>
        <FooterAr />
      </footer>
    </React.Fragment>
  );
}
