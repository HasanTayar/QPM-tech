"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LangSwitcher from "../lang-switcher";

const HeaderAr = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 flex justify-between items-center p-5 z-50 transition-shadow duration-300 ${
        hasScrolled ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex-shrink-0">
        <Link href="/ar/">
          <Image
            src={"/QPM.LOGO.svg"}
            alt={"QPM-HE-LOGO"}
            width={130}
            height={70}
            quality={100}
            layout="intrinsic"
            className="ml-20"
          />
        </Link>
      </div>

      {/* Navigation menu */}
      <div className="flex justify-center">
        <nav className="hidden md:block">
          <ul className="flex flex-row space-x-4 md:space-x-8 items-center  md:mr-96">
            <li>
              <Link href="/ar">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === `/ar` ? "underline" : ""
                  }`}
                >
                  الصفحة الرئيسية{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ar/contact">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/ar/contact" ? "underline" : ""
                  }`}
                >
                  تواصل معنا{" "}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ar/about-us">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/ar/about-us" ? "underline" : ""
                  }`}
                >
                  حولنا
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ar/portfolio">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/ar/portfolio" ? "underline" : ""
                  }`}
                >
                  أعمالنا{" "}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mr-11">
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HeaderAr;
