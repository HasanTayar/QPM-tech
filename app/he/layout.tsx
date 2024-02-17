import React from "react";
import { Noto_Sans_Hebrew } from "next/font/google";
const noto_sans_hebrew = Noto_Sans_Hebrew({ subsets: ["hebrew"] });

import HeaderHe from "@/components/header/header-he";
import HeFooter from "@/components/footer/footer-he";
export default function HeLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <header>
        <HeaderHe />
      </header>
      <main className={noto_sans_hebrew.className}>{children}</main>
      <footer>
        <HeFooter />
      </footer>
    </React.Fragment>
  );
}
