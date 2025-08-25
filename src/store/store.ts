import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { CartSlice } from "@/store/cartSlice";
import { favoriteSlice } from "@/store/favoriteSlice";
import { StoreType } from "@/types/store";

export const useStore = create<StoreType>()(
  devtools(
    persist(
      immer((...a) => ({
        ...CartSlice(...a),
        ...favoriteSlice(...a),
      })),
      {
        name: "app-storage",
        partialize: (state) => ({
          products: state.products,
          total: state.total,
          favorite: state.favorite,
          totalFavoriteItems: state.totalFavoriteItems,
        }),
      }
    )
  )
);
