"use client";

import { CartProductType } from "@/types/cart";
import React from "react";
import PriceFormat from "../products/PriceFormat";
import { Separator } from "../ui/separator";

interface Props {
  products: CartProductType[];
  total: number;
}

const CartSummery = ({ products, total }: Props) => {
  const totalPriceBeforeDiscount = products.reduce((sum, product) => {
    const originalPrice =
      (product.price * 100) / (100 - product.discountPercentage);

    return sum + originalPrice * product.qty;
  }, 0);

  return (
    <div className="space-y-2 my-4">
      <h1 className="text-2xl font-semibold mb-4">Cart Summery: </h1>
      <div className="w-full flex items-center justify-between">
        <span>Sub Total</span>
        <PriceFormat amount={totalPriceBeforeDiscount} />
      </div>
      <div className="w-full flex items-center justify-between">
        <span>Discount</span>
        <PriceFormat amount={totalPriceBeforeDiscount - total} />
      </div>

      <Separator />
      <div className="w-full flex items-center justify-between">
        <span>Payable Total</span>
        <PriceFormat amount={total} />
      </div>
    </div>
  );
};

export default CartSummery;
