"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";

interface Props {
  id: number;
  className?: string;
}

const ProductIncDecButton = ({ id }: Props) => {
  const { inc, dec, products } = useStore(
    useShallow((state) => ({
      inc: state.inc,
      dec: state.dec,
      products: state.products,
    }))
  );

  const product = products.find((p) => p.id === id);

  return (
    <div className="flex items-center gap-4">
      <Button size={"sm"} disabled={product?.qty === 1} onClick={() => dec(id)}>
        <Minus />
      </Button>
      <div className="w-10 flex items-center justify-center ">
        {product?.qty}
      </div>
      <Button size={"sm"} onClick={() => inc(id)}>
        <Plus />
      </Button>
    </div>
  );
};

export default ProductIncDecButton;
