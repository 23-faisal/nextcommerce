"use client";

import { useStore } from "@/store/store";
import Link from "next/link";
import React from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import ClearFavoriteButton from "./ClearFavoriteButton";
import FavoriteSingleProductPage from "./FavoriteSingleProductPage";

const Favorite = () => {
  const { favorite, favoriteToggle, resetFavorite } = useStore(
    useShallow((state) => ({
      favorite: state.favorite,
      favoriteToggle: state.favoriteToggle,
      resetFavorite: state.resetFavorite,
    }))
  );
  if (favorite.length < 1)
    return (
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-lg md:text-2xl font-semibold my-2 ">
            Opps!Looks like Favorite page is empty...
          </h1>
          <Link href={"/products"}>
            <p className="text-md md:text-lg text-center text-blue-500 cursor-pointer underline">
              {" "}
              Go to Product Page
            </p>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="mt-4">
      <ClearFavoriteButton
      
        message="Do you want to clear all the favorite?"
        resultMessage="All favorite product removed form the page."
        reset={resetFavorite}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {favorite?.map((item) => (
          <div className="shadow rounded-md border relative" key={item.id}>
            <FavoriteSingleProductPage product={item} />
            <Button
              onClick={() => favoriteToggle(item)}
              variant={"destructive"}
              className="absolute right-2 top-2 "
            >
              <Heart />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
