"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Info, ContactIcon, HomeIcon, Briefcase, MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import classNames from "classnames";
const SideBarHe = () => {
  const pathname = usePathname();
  const links = [
    { href: "/he", icon: HomeIcon, label: "דף ראשי" },
    { href: "/he/contact", icon: ContactIcon, label: "צור קשר" },
    { href: "/he/about-us", icon: Info, label: "אדתנו" },
    { href: "/he/portfolio", icon: Briefcase, label: "עבדות שלנו" },
  ];

  const getButtonClasses = (href: string) => {
    return classNames(
      "flex items-center justify-start w-full px-4 py-2 rounded-lg transition-colors duration-300",
      {
        "bg-blue-600 text-white": pathname === href,
        "hover:bg-blue-500 hover:text-white": pathname !== href,
      }
    );
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="text-2xl">
          <MenuIcon size={"icon"} className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100 dark:bg-gray-800">
        <SheetHeader className="p-4">
          <SheetTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            תפריט
          </SheetTitle>
          <section className="mt-4" dir="rtl">
            <Accordion type="single" className="p-4">
              <AccordionItem value="item-1" className="mb-4">
                <AccordionTrigger color="blue" className="text-lg">
                  שפות
                </AccordionTrigger>
                <AccordionContent className="flex space-x-4">
                  <Link href="/">
                    <Button variant="outline" color="blue">
                      english
                    </Button>
                  </Link>
                  <Link href="/ar">
                    <Button variant="outline" color="blue">
                      العربيه
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
          <section
            className="pt-2 flex flex-col gap-10 md:grid-cols-1 md:gap-0"
            dir="rtl"
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <p className={getButtonClasses(link.href)}>
                  <link.icon className="h-6 w-6 ml-2" size="icon" />{" "}
                  {link.label}
                </p>
              </Link>
            ))}
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarHe;
