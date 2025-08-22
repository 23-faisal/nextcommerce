"use client";

import { Review } from "@/types/product";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

interface Props {
  items: Review[];
}

const ReviewCarousel = ({ items }: Props) => {
  return (
    <div className="bg-slate-100 p-4 rounded-lg">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/3" // 1 item in small, 3 items in md+
            >
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col justify-between h-full p-4">
                    {/* Comment */}
                    <p className="text-base font-semibold mb-3">
                      {item.comment}
                    </p>

                    {/* Reviewer Info */}
                    <div className="text-xs mb-3">
                      <p className="font-semibold">{item.reviewerName}</p>
                      <p>{item.reviewerEmail}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < item.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Show buttons only if enough items */}
        {items.length > 3 && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
