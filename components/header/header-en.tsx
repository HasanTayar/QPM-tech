"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LangSwitcher from "../lang-switcher";
import SideBarEn from "@/components/sidebar/sidebar-en";
const HeaderEn = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (pathname.startsWith("/he") || pathname.startsWith("/ar")) {
    return null;
  }
  return (
    <header
      className={`w-full sticky top-0 flex justify-between items-center p-5 z-50 transition-shadow duration-300 ${
        hasScrolled ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src={"/icons/favicon-512x512.png"}
            alt={"QPM-EN-LOGO"}
            width={50}
            height={50}
            quality={100}
            className="ml-20"
          />
        </Link>
      </div>

      {/* Navigation menu */}
      <div className="flex justify-center ">
        {" "}
        <nav className="hidden lg:block">
          <ul className="flex flex-row space-x-4 lg:space-x-8 items-center  lg:mr-96">
            <li>
              <Link href="/">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === `/` ? "underline" : ""
                  }`}
                >
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/contact" ? "underline" : ""
                  }`}
                >
                  Contact
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/about-us" ? "underline" : ""
                  }`}
                >
                  About us
                </div>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/portfolio" ? "underline" : ""
                  }`}
                >
                  Portfolio
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:mr-11 lg:block">
          <LangSwitcher />
        </div>
        <div className="lg:hidden mr-11">
          <SideBarEn />
        </div>
      </div>
    </header>
  );
};

export default HeaderEn;
