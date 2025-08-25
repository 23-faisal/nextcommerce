"use client";

import { useStore } from "@/store/store";
import React from "react";
import { useShallow } from "zustand/shallow";

import { Button } from "@/components/ui/button";
import CartSingleProduct from "./CartSingleProduct";
import ClearCartButton from "./ClearCartButton";
import CartSummery from "./CartSummery";
import Link from "next/link";

const CartProducts = () => {
  const { products, total, reset } = useStore(
    useShallow((state) => ({
      products: state.products,
      total: state.total,
      reset: state.reset,
    }))
  );

  if (products.length < 1)
    return (
      <div className="flex items-center justify-center my-10 ">
        <div>
          <h1 className="text-lg md:text-2xl font-semibold my-2 ">
            Opps!Looks like Cart is empty...
          </h1>
          <Link href={"/products"}>
            <p className="text-md md:text-lg text-center text-blue-500 cursor-pointer underline">
              {" "}
              Go to shopping
            </p>
          </Link>
        </div>
      </div>
    );

  return (
    <div className="mt-10">
      <ClearCartButton reset={reset} />
      <div className="  flex flex-col md:flex-row md:justify-between gap-4 my-10">
        <div className="w-full md:w-1/2 ">
          {products?.map((product) => (
            <div key={product.id}>
              <CartSingleProduct product={product} />
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="border px-6 py-4 rounded-md bg-slate-100 shadow ">
            <CartSummery products={products} total={total} />

            <Button className="w-full   ">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
