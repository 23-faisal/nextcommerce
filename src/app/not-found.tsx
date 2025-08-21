import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      <Image
        className="h-1/2 md:h-[80vh] w-full  object-cover"
        src={assets.pageNotFound}
        alt="page not found"
        height={1280}
        width={1920}
      />
    </div>
  );
};

export default PageNotFound;
