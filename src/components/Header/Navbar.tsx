import React from "react";
import TopHeader from "@/components/Header/TopHeader";
import MiddleHeader from "@/components/Header/MiddleHeader";
import BottomHeader from "@/components/Header/BottomHeader";
import MobileMenu from "@/components/Header/MobileMenu";

const Navbar = () => {
  return (
    <div
      className="sticky   z-50 top-0 shadow bg-white/80 backdrop-blur-md border-b border-white/30 
      dark:bg-black/80 dark:border-white/10"
    >
      <TopHeader />
      <div className="hidden md:block">
        <MiddleHeader />
        <BottomHeader />
      </div>
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
