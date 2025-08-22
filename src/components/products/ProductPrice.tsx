import React from "react";
import PriceFormat from "./PriceFormat";

interface Props {
  price: number;
  discountPercentage: number;
}

const ProductPrice = ({ price, discountPercentage }: Props) => {
  const discountedPrice = price;
  const regularPrice = (100 * price) / (100 - discountPercentage);
  return (
    <div className="flex items-center gap-4">
      <PriceFormat
        className="text-muted-foreground line-through"
        amount={regularPrice}
      />
      <PriceFormat
        className="font-semibold text-sky-500"
        amount={discountedPrice}
      />
    </div>
  );
};

export default ProductPrice;
