import ProductImages from "@/components/products/ProductImages";
import ProductPrice from "@/components/products/ProductPrice";
import { getData } from "@/lib/helpers/getData";
import { Product } from "@/types/product";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Eye } from "lucide-react";
import PriceFormat from "@/components/products/PriceFormat";
import AddToCartButton from "@/components/products/AddToCartButton";
import Image from "next/image";
import { assets } from "@/assets";
import Link from "next/link";
import ReviewCarousel from "@/components/products/ReviewCarousel";

interface Props {
  params: Promise<{ id: number }>;
}

const SingleProductPage = async ({ params }: Props) => {
  const { id } = await params;

  const endPoint = `https://dummyjson.com/products/${id}`;

  const product: Product = await getData(endPoint);

  const totalReviews = product.reviews.length;
  const totalRating = product.reviews.reduce(
    (acc, review) => acc + Number(review.rating),
    0
  );

  const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (rating >= index + 1)
        return <FaStar key={index} className="text-yellow-500 md:h-6 md:w-6" />;
      if (rating >= index + 0.5)
        return (
          <FaStarHalfAlt
            key={index}
            className="text-yellow-500 md:h-6 md:w-6"
          />
        );
      return (
        <FaRegStar key={index} className="text-yellow-500 md:h-6 md:w-6" />
      );
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 my-10">
      {/* Product Image */}

      <div>
        <ProductImages images={product.images} />
      </div>

      {/* Product Details */}

      <div className="w-full flex flex-col gap-4 ">
        <h2 className="text-3xl font-bold ">{product?.title}</h2>
        <div className="flex items-center justify-between">
          <ProductPrice
            price={product.price}
            discountPercentage={product.discountPercentage}
          />

          {/* ⭐ Average rating */}
          <div className="flex items-center gap-1">
            {renderStars(averageRating)}
            <span className="ml-2 text-sm text-gray-600">
              {averageRating.toFixed(1)} ({totalReviews})
            </span>
          </div>
        </div>
        {/*  */}

        <p className="flex items-center">
          <Eye className="h-5 w-5 mr-1" />
          <span className="font-semibold mr-1 ">250+ </span>{" "}
          <span> people are watching it right now</span>
        </p>

        <div className="flex items-center gap-2  font-semibold">
          You are saving{" "}
          <PriceFormat
            amount={
              (100 * product?.price) / (100 - product?.discountPercentage) -
              product?.price
            }
            className="text-green-600"
          />{" "}
          upon purchase.
        </div>

        <p className="text-sm tracking-wide">{product?.description}</p>
        <p className="text-base">{product?.warrantyInformation}</p>

        <p className="font-medium ">Brand : {product?.brand}</p>
        <p className="font-medium capitalize">Category : {product?.category}</p>

        <div>
          Tags: {""}
          {product?.tags.map((item, index) => (
            <span className="font-medium capitalize" key={index}>
              {item}
              {index < product.tags.length - 1 && ", "}
            </span>
          ))}
        </div>

        <AddToCartButton product={product} />
        <div>
          <Link href={"/payment"}>
            <Image
              className="h-16 w-full object-cover rounded-md"
              src={assets?.PaymentImage}
              alt="payment image"
              height={200}
              width={600}
            />
          </Link>
          <p className="font-medium text-center mt-4">
            Guaranteed safe & secure checkout.
          </p>
        </div>

        {/*  */}
      </div>

      {/* Product Reviews */}

      <div className="mt-6 py-10  md:col-span-2">
        <h2 className=" mb-6">
          <span className="text-2xl font-semibold"> Reviews:</span>{" "}
          <span className="text-xl ">({product?.reviews.length})</span>
        </h2>
        <ReviewCarousel items={product?.reviews} />
      </div>
    </div>
  );
};

export default SingleProductPage;
