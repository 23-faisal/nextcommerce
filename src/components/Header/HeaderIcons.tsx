"use client";

import { useStore } from "@/store/store";
import { Handbag, Heart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useShallow } from "zustand/shallow";

const HeaderIcons = () => {
  const [cartItem, SetCartItem] = useState<Number>(0);
  const [favoriteItem, setFavoriteItem] = useState<Number>(0);

  const { favorite, products, totalFavoriteItems } = useStore(
    useShallow((state) => ({
      favorite: state.favorite,
      products: state.products,
      totalFavoriteItems: state.totalFavoriteItems,
    }))
  );

  const totalProductsInCart = products.length ? products.length : 0;
  const totalProductsAsFavorite = favorite.length ? favorite.length : 0;

  return (
    <div className="flex items-center gap-x-4">
      <Link href={"/favorite"} className="relative">
        <Heart />
        <span className="absolute -right-2 -top-2 text-white  bg-red-400 px-1 rounded-full ">
          {totalProductsAsFavorite}
        </span>
      </Link>
      <Link className="relative" href={"/cart"}>
        <Handbag />
        <span className="absolute -right-2 -top-2 text-white  bg-red-400 px-1 rounded-full ">
          {totalProductsInCart}
        </span>
      </Link>
    </div>
  );
};

export default HeaderIcons;
