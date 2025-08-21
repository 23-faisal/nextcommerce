import { Handbag, Heart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const HeaderIcons = () => {
  const [cartItem, SetCartItem] = useState<Number>(0);
  const [favoriteItem, setFavoriteItem] = useState<Number>(0);
  return (
    <div className="flex items-center gap-x-4">
      <Link href={"/favorite"} className="relative">
        <Heart />
        <span className="absolute -right-2 -top-2 text-white  bg-red-400 px-1 rounded-full ">
          0
        </span>
      </Link>
      <Link className="relative" href={"/cart"}>
        <Handbag />
        <span className="absolute -right-2 -top-2 text-white  bg-red-400 px-1 rounded-full ">
          0
        </span>
      </Link>
    </div>
  );
};

export default HeaderIcons;
