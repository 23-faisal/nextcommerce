import React from "react";
import TopHeader from "@/components/Header/TopHeader";
import MiddleHeader from "@/components/Header/MiddleHeader";
import BottomHeader from "@/components/Header/BottomHeader";
import MobileMenu from "@/components/Header/MobileMenu";

const Navbar = () => {
  return (
    <div className="">
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
