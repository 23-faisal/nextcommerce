// store/favoriteSlice.ts
import { FavoriteType } from "@/types/favorite";
import { StoreType } from "@/types/store";
import { StateCreator } from "zustand";

export const favoriteSlice: StateCreator<
  StoreType,
  [["zustand/immer", never]],
  [],
  FavoriteType
> = (set) => ({
  favorite: [],
  totalFavoriteItems: 0,

  favoriteToggle: (product) =>
    set((state) => {
      const alreadyExistsInFavorite = state.favorite.some(
        (f) => f.id === product.id
      );

      if (alreadyExistsInFavorite) {
        state.favorite = state.favorite.filter((f) => f.id !== product.id);
      } else {
        state.favorite.push(product);
      }
      state.totalFavoriteItems = state.favorite.length;
    }),

  resetFavorite: () => set(() => ({ favorite: [], total: 0 })),
});
