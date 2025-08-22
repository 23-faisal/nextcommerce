"use client";

import { Button } from "../ui/button";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const AddToCartButton = ({ product }: Props) => {
  const handleAddToCart = () => {
    window.alert("Button Clicked");
  };
  return <Button onClick={handleAddToCart}>Add To Cart</Button>;
};

export default AddToCartButton;
