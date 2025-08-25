 
import { Product } from "@/types/product";

export type CartProductType = Product & {
  qty: number;
};

export type CartType = {
  products: CartProductType[];
  total: number;
  addToCart: (product: CartProductType) => void;
  removeFromCart: (id: number) => void;
  getProductById: (id: number) => CartProductType | undefined;
  inc: (id: number) => void;
  dec: (id: number) => void;
  reset: () => void;
};
