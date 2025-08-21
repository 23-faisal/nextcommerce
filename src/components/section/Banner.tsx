"use client";

import { banner } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative bg-[#C93A28] flex flex-col md:flex-row items-center justify-between w-full">
      {/* Text Section */}
      <div className="z-20 p-4 md:p-8 max-w-lg">
        <p className="text-base font-semibold text-white">
          {banner?.priceText}
        </p>
        <p className="capitalize text-3xl md:text-5xl text-white font-bold max-w-[500px]">
          {banner?.title}
        </p>
        <p className="text-lg font-bold text-white mt-2">
          <span>{banner?.textOne} upto </span>
          <span className="text-yellow-400">{banner?.offerPrice} </span>
          <span>{banner?.textTwo}</span>
        </p>
        <Button
          variant={"outline"}
          className="mt-4"
          onClick={() => router.push("/products")}
        >
          Shop Now
        </Button>
      </div>

      {/* Image Section */}
      <div className=" z-10 w-full h-1/2 md:h-[75vh] md:w-3/4">
        <Image
          src={banner.image}
          alt="Banner image"
          className="object-cover "
          height={1280}
          width={1920}
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
