import { Product } from "@/types/product";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductSideBar from "@/components/products/ProductSideBar";
import ProductPrice from "@/components/products/ProductPrice";
import AddToCartButton from "@/components/products/AddToCartButton";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="shadow relative hover:scale-105 transition ease-in-out duration-150 hover:shadow-amber-200 group overflow-hidden">
      <Card>
        <CardContent>
          <Link
            href={{
              pathname: `/products/${product.id}`,
              query: { id: product.id },
            }}
          >
            <Image
              src={product?.images[0]}
              alt={product.category}
              height={1280}
              width={1920}
              className="object-cover w-full h-[200px] mb-4"
            />
            <p className="absolute bg-orange-500 top-4 right-4 px-2 py-1 font-semibold text-white text-xs rounded-lg">
              {product?.discountPercentage}%{" "}
            </p>
          </Link>

          <ProductSideBar />

          <div className="h-40   border-t-2 px-2 py-2 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground capitalize">
                {product?.category}
              </p>
              <h2 className="font-semibold text-base line-clamp-2">
                {product?.title}
              </h2>

              <ProductPrice
                price={product?.discountPercentage}
                discountPercentage={product.discountPercentage}
              />
            </div>
            <AddToCartButton product={product} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
