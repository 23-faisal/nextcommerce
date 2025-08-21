import { ChevronDown, Truck } from "lucide-react";
import React from "react";
import Container from "@/components/themes/Container";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-slate-200 ">
      <Container className="flex items-center justify-between ">
        <div className="w-full md:w-auto text-sm flex items-center gap-2 font-medium justify-center md:justify-be  py-1">
          <Truck className="h-6 w-6 text-[#ffb342] " />
          <span>FREE Express Shipping On Order $570+</span>
        </div>

        <div className="hidden md:inline-flex items-center gap-4 ">
          <p className="flex items-center gap-x-1 border-r-[4px] ">
            English
            <ChevronDown className="h-5 w-5  " />
          </p>
          <p className="flex items-center gap-x-1 border-r-[4px] ">
            USD
            <ChevronDown className="h-5 w-5  " />
          </p>
          <p className="flex items-center gap-x-1 border-r-[4px] ">
            Settings
            <ChevronDown className="h-5 w-5  " />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
