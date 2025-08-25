import { Product } from "@/types/product";

export type FavoriteProductType = Product;

export type FavoriteType = {
  favorite: FavoriteProductType[];
  totalFavoriteItems: number;
  favoriteToggle: (product: Product) => void;
  resetFavorite: () => void;
};
