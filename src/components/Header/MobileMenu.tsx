"use client";

import React, { useState } from "react";
import Container from "@/components/themes/Container";
import Link from "next/link";
import HeaderIcons from "@/components/Header/HeaderIcons";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { navItem } from "@/constants";
import { usePathname } from "next/navigation";
import SearchInput from "./SearchInput";

const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Container className="py-4 shadow flex  items-center justify-between">
        <Link
          href={"/"}
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500   via-red-500 to-purple-500 bg-clip-text text-transparent"
        >
          atoz
        </Link>
        <div className="flex items-center gap-4">
          <HeaderIcons />

          <Button variant={"outline"}>
            <Link href={"/login"}>Login</Link>
          </Button>

          {/* sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-2xl ">Navigation Menu</SheetTitle>
                <SheetDescription></SheetDescription>

                <div className="flex flex-col gap-4 items-center mt-10 ">
                  {navItem?.map((nav) => (
                    <Link
                      onClick={() => setOpen(false)}
                      className={`${
                        pathname === nav.href
                          ? "bg-gradient-to-r from-pink-500   via-red-500 to-purple-500 bg-clip-text text-transparent"
                          : ""
                      } text-md font-semibold  `}
                      href={nav.href}
                    >
                      {nav.title}
                    </Link>
                  ))}
                </div>
                <div className="mt-5 text-center ">
                  <h1>Logout functionality</h1>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </div>
  );
};

export default MobileMenu;
