import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import {
  BadgeInfoIcon,
  ContactIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const SideBarEn = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="text-2xl">
          <MenuIcon size={"icon"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-100 dark:bg-gray-800">
        <SheetHeader className="p-4">
          <SheetTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Menu
          </SheetTitle>
          <section className="mt-4">
            <Accordion type="single" className="p-4">
              <AccordionItem value="item-1" className="mb-4">
                <AccordionTrigger color="blue" className="text-lg">
                  Languages
                </AccordionTrigger>
                <AccordionContent className="flex space-x-2">
                  <Link href="/he">
                    <Button variant="outline" color="blue">
                      עברית
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
          <section className="pt-2">
            <Link href="/">
              <Button variant="ghost">
                <HomeIcon className="h-6 w-6 mr-2" /> Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">
                <ContactIcon className="h-6 w-6 mr-2" /> Contact
              </Button>
            </Link>
            <Link href="/about-us">
              <Button variant="ghost">
                <BadgeInfoIcon className="h-6 w-6 mr-2" /> About us
              </Button>
            </Link>
          </section>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SideBarEn;
