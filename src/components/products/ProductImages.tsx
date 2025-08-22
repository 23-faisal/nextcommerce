"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const changeImage = () => {
      if (currentImage === "") {
        setCurrentImage(images?.[0]);
      }
    };
    return changeImage();
  }, [currentImage]);

  return (
    <div className="flex float-start gap-4  ">
      <div className="flex flex-col gap-2">
        {images?.map((image, index) => (
          <div
            className={` ${
              currentImage === image ? " border-teal-500 opacity-50 " : ""
            } h-20 w-20  rounded-md border-2 shadow hover:opacity-100 transition duration-300 `}
            onClick={() => setCurrentImage(image)}
            key={index}
          >
            <Image
              className=" object-cover p-2 shadow  "
              src={image}
              height={200}
              width={200}
              alt="product image"
            />
          </div>
        ))}
      </div>
      <div className="ml-5 rounded-md w-full max-h-[550px] ">
        <Image
          className="h-100 w-100  border-2 rounded-md object-contain "
          height={500}
          width={500}
          src={currentImage ? currentImage : `${images[0]}`}
          alt="product image"
        />
      </div>
    </div>
  );
};

export default ProductImages;
