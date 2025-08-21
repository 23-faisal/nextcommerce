import React from "react";
import Container from "@/components/themes/Container";
import SearchInput from "@/components/Header/SearchInput";
import NavigationMenu from "@/components/Header/NavigationMenu";
import Link from "next/link";

const MiddleHeader = () => {
  return (
    <div className="border-b-1    ">
      <Container>
        <div className=" flex items-center justify-between py-4 gap-20">
          <Link
            href={"/"}
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500   via-red-500 to-purple-500 bg-clip-text text-transparent"
          >
            atoz
          </Link>

          <SearchInput />
          <NavigationMenu />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
