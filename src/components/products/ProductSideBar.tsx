"use client";

import React from "react";
import { Button } from "../ui/button";
import { Eye, Handbag, Heart } from "lucide-react";

const ProductSideBar = () => {
  return (
    <div className="flex items-center flex-col gap-2 absolute right-2 bottom-52 border p-2 rounded-md  transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
      <Button className="cursor-pointer" variant={"secondary"} size={"icon"}>
        <Handbag />
      </Button>
      <Button className="cursor-pointer" variant={"secondary"} size={"icon"}>
        <Eye />
      </Button>
      <Button className="cursor-pointer" variant={"secondary"} size={"icon"}>
        <Heart />
      </Button>
    </div>
  );
};

export default ProductSideBar;
