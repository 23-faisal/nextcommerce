"use client";

import React from "react";
import Container from "@/components/themes/Container";
import { navItem } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomHeader = () => {
  const pathname = usePathname();

  return (
    <div className="">
      <Container className="flex items-center justify-between py-2 ">
        <div className="text-xs md:text-sm font-medium flex  items-center gap-5">
          {navItem?.map((nav) => (
            <Link
              className={`${
                pathname === nav.href
                  ? "bg-gradient-to-r from-pink-500   via-red-500 to-purple-500 bg-clip-text text-transparent"
                  : ""
              } `}
              href={nav?.href}
              key={nav?.href}
            >
              {nav?.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-1 text-sm ">
          <span className="font-medium">Hotline: </span>
          <span className="text-muted-foreground"> 01630 285 479</span>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
