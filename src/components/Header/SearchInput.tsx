"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
import { getData } from "@/lib/helpers/getData";
import { Product } from "@/types/product";
import Link from "next/link";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const endpoint = "http://localhost:3000/products";

  // Fetch products once
  useEffect(() => {
    const getAllData = async () => {
      const allProduct = await getData(`https://dummyjson.com/products`);
      setProducts(allProduct?.products || []);
    };
    getAllData();
  }, []);

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];
    return products.filter((item: Product) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const handleSubmit = (data: string) => {
    console.log(data);
    setSearch("");
  };

  return (
    <div className="relative w-full">
      <div className="hidden md:inline-flex flex-1 gap-1 w-full">
        <div className="flex-1 relative">
          <Input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            placeholder="Search Product Here..."
          />
          {search && (
            <X
              className="h-6 w-6 text-slate-500 absolute right-2 top-1.5 cursor-pointer"
              onClick={() => setSearch("")}
            />
          )}
        </div>

        <Button type="submit" onClick={() => handleSubmit(search)}>
          Search
        </Button>
      </div>

      {/* Dropdown */}
      {search && (
        <div className="absolute left-0 top-12 w-full bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="flex flex-col gap-1">
              {filteredProducts.map((product: Product) => (
                <Link
                  onClick={() => setSearch("")}
                  key={product.id}
                  href={`${endpoint}/${product.id}`}
                  className="flex justify-start gap-x-2 px-3 py-1.5 hover:bg-slate-300 text-base font-medium rounded-md w-full"
                >
                  <Search /> {product.title}
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full min-h-24">
              <p className="text-slate-600 text-center text-lg">
                No match found for{" "}
                <span className="text-slate-800 underline">{search}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
