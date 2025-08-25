"use client";

import React from "react";
import { Button } from "../ui/button";
import { Eye, Handbag, Heart } from "lucide-react";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const ProductSideBar = ({ product }: Props) => {
  const { addToCart, products, favorite, favoriteToggle } = useStore(
    useShallow((state) => ({
      addToCart: state.addToCart,
      products: state.products,
      favorite: state.favorite,
      favoriteToggle: state.favoriteToggle,
    }))
  );

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, qty: 1 });
  };

  const handleFavoriteToggle = (product: Product) => {
    favoriteToggle(product); // Pass the product object
  };

  // Check if current product is in favorites
  const isFavorite = favorite.some((f) => f.id === product.id);

  return (
    <div className="flex items-center flex-col gap-2 absolute right-2 bottom-52 border p-2 rounded-md transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
      <Button
        onClick={() => handleAddToCart(product)}
        className="cursor-pointer"
        variant={
          products.some((p) => p.id === product.id)
            ? "destructive"
            : "secondary"
        }
        size="icon"
      >
        <Handbag />
      </Button>

      <Button className="cursor-pointer" variant="secondary" size="icon">
        <Eye />
      </Button>

      <Button
        onClick={() => handleFavoriteToggle(product)} // Pass product object
        className="cursor-pointer"
        variant={isFavorite ? "destructive" : "secondary"} // Change color when favorited
        size="icon"
      >
        <Heart />
      </Button>
    </div>
  );
};

export default ProductSideBar;
