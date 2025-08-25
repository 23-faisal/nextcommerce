"use client";

import Image from "next/image";
import React from "react";
import PriceFormat from "../products/PriceFormat";
import {
  calculateSingleProductPrice,
  calculateTotalSavingOnASingleProduct,
} from "@/lib/store/calculateTotal";
import { CartProductType } from "@/types/cart";
import ProductIncDecButton from "../products/ProductIncDecButton";
import { CornerLeftUpIcon } from "lucide-react";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { toast } from "sonner";
import { FaCheck } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface Props {
  product: CartProductType;
}

const CartSingleProduct = ({ product }: Props) => {
  const router = useRouter();
  const { removeFromCart } = useStore(
    useShallow((state) => ({
      removeFromCart: state.removeFromCart,
    }))
  );

  const removeProductFromCart = (id: number) => {
    removeFromCart(id);
    toast("Product removed from the cart successfully");
  };

  return (
    <div className="  flex items-center relative rounded-md border py-2 mb-4 ">
      <div className="w-[200px] ml-4 mr-6 h-full  ">
        <Image
          onClick={() => router.push(`/products/${product.id}`)}
          className="shadow  rounded-md  object-cover border cursor-pointer "
          src={product?.images[0]}
          alt={product?.title}
          height={200}
          width={200}
        />
      </div>
      <div>
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
        </div>
        <div className="flex items-center text-xs md:text-sm gap-1 md:gap-4 my-2  ">
          <span>{product?.qty}</span>
          <span>* </span>
          <span>{product?.price}</span>
          <span>=</span>

          <PriceFormat
            className={`text-sky-500`}
            amount={calculateSingleProductPrice(product.price, product.qty)}
          />
        </div>
        <div className="mt-4">
          <ProductIncDecButton id={product.id} />

          <div className=" flex flex-col mt-4 ">
            <div>
              {product.availabilityStatus && (
                <div className="flex items-center gap-2 my-2">
                  <FaCheck className="h-4 w-4 md:h-5 md:w-5 text-green-500" />
                  <p className="text-xs md:text-sm ">Product is available</p>
                </div>
              )}
            </div>
            <div className="flex items-center text-xs md:text-sm gap-1 ">
              <p>You are saving </p>
              <PriceFormat
                className={`text-green-500 text-xs md:text-sm`}
                amount={calculateTotalSavingOnASingleProduct(
                  product.price,
                  product.discountPercentage,
                  product.qty
                )}
              />
              <p> in total</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button
          onClick={() => removeProductFromCart(product.id)}
          variant={"outline"}
          className="absolute top-2 right-2"
        >
          <IoMdClose />
        </Button>
      </div>
    </div>
  );
};

export default CartSingleProduct;
