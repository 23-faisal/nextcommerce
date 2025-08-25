import { StateCreator } from "zustand";
import { StoreType } from "@/types/store";
import { CartProductType, CartType } from "@/types/cart";
import {
  calculateSingleProductPrice,
  calculateTotalPrice,
} from "@/lib/store/calculateTotal";
import { useStore } from "./store";

export const CartSlice: StateCreator<
  StoreType,
  [["zustand/immer", never]],
  [],
  CartType
> = (set, get) => ({
  products: [],
  total: 0,

  addToCart: (product: CartProductType) =>
    set((state) => {
      const productExists = state.products.find((p) => p.id === product.id);

      if (!productExists) {
        state.products.push({ ...product, qty: 1 });
      }

      state.total = calculateTotalPrice(state.products);
    }),

  removeFromCart: (id: number) =>
    set((state) => {
      state.products = state.products.filter((p) => p.id !== id);
      state.total = calculateTotalPrice(state.products);
    }),

  getProductById: (id) => get().products.find((p) => p.id === id),

  inc: (id: number) =>
    set((state) => {
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.qty += 1;
      }
      state.total = calculateTotalPrice(state.products);
    }),
  dec: (id: number) =>
    set((state) => {
      const product = state.products.find((p) => p.id === id);

      if (!product) return;

      if (product) {
        if (product?.qty > 1) {
          product.qty -= 1;
          calculateSingleProductPrice(product.price, product.qty);
        } else {
          state.products = state.products.filter((p) => p.id !== id);
        }
      }

      state.total = calculateTotalPrice(state.products);
    }),

  reset: () => {
    set((state) => {
      state.products = [];
      state.total = 0;
    });
  },
});
