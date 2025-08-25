"use client";

import { FavoriteProductType } from "@/types/favorite";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import PriceFormat from "../products/PriceFormat";

interface Props {
  product: FavoriteProductType;
  className?: string;
}

const FavoriteSingleProductPage = ({ product, className }: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-6 ">
        <div className="py-4 pl-4 ">
          <Image
            onClick={() => router.push(`/products/${product.id}`)}
            className="shadow  rounded-md  object-cover border cursor-pointer "
            src={product?.images[0]}
            alt={product?.title}
            height={200}
            width={200}
          />
        </div>

        <div className="flex flex-col ">
          <h2 className="text-base font-semibold w-full ">
            {product?.title.slice(0, 80)}
          </h2>
          <p className="text-xs md:text-sm">
            Brand : <span className="font-medium">{product?.brand}</span>
          </p>
          <p className="text-xs md:text-sm">
            Category: <span className="font-medium">{product?.category}</span>
          </p>
          <p className="text-xs md:text-sm">
            Price: <PriceFormat amount={product.price} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteSingleProductPage;
