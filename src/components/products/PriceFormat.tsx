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
  return <span className={cn("font-medium", className)}>{formattedPrice}</span>;
};

export default PriceFormat;
