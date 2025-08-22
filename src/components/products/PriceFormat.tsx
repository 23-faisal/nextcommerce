import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  amount?: number;
  className?: string;
}

const PriceFormat = ({ amount = 0, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <div className={cn("font-medium", className)}>{formattedPrice}</div>;
};

export default PriceFormat;
