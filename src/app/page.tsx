import Banner from "@/components/section/Banner";
import { getData } from "@/lib/helpers/getData";
import React from "react";
import ProductList from "@/components/products/ProductList";

const Home = async () => {
  const data = await getData("https://dummyjson.com/products");
  const { products } = data;

  return (
    <main>
      <Banner />
      <ProductList products={products} />
    </main>
  );
};

export default Home;
