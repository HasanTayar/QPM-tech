import React from "react";
import { HiMiniLanguage } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const LangSwitcher = () => {
  return (
    <section>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <HiMiniLanguage className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <span className="sr-only">Language Switcher</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => console.log()}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log}>עברית</DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log}>
            العربية
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default LangSwitcher;
