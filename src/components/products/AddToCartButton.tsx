"use client";

import { useStore } from "@/store/store";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useShallow } from "zustand/shallow";
import ProductIncDecButton from "@/components/products/ProductIncDecButton";
import { toast } from "sonner";

interface Props {
  product: Product;
}

const AddToCartButton = ({ product }: Props) => {
  const { addToCart, products } = useStore(
    useShallow((state) => ({
      products: state.products,
      addToCart: state.addToCart,
      getProductById: state.getProductById,
    }))
  );
  const handleAddToCart = () => {
    addToCart({ ...product, qty: 1 });
    toast('Product added to the cart successfully')
  };

  const productExists = products.some((p) => p.id === product.id);

  return (
    <div>
      {products.length > 0 && productExists ? (
        <ProductIncDecButton id={product.id} />
      ) : (
        <Button  className="w-full " onClick={handleAddToCart}>Add To Cart</Button>
      )}
    </div>
  );
};

export default AddToCartButton;
