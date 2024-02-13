"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LangSwitcher from "../lang-switcher";

const HeaderHe = () => {
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
        <Link href="/he/">
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
              <Link href="/he">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === `/he` ? "underline" : ""
                  }`}
                >
                  דף ראשי
                </div>
              </Link>
            </li>
            <li>
              <Link href="/he/contact">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/he/contact" ? "underline" : ""
                  }`}
                >
                  צור קשר
                </div>
              </Link>
            </li>
            <li>
              <Link href="/he/about-us">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/about-us" ? "underline" : ""
                  }`}
                >
                  אדיתנו
                </div>
              </Link>
            </li>
            <li>
              <Link href="/he/portfolio">
                <div
                  className={`p-2 hover:text-gray-500 ${
                    pathname === "/he/portfolio" ? "underline" : ""
                  }`}
                >
                  עבדות שלנו
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

export default HeaderHe;
