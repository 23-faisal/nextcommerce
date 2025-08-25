import { CartProductType } from "@/types/cart";

export const calculatePriceBeforeDiscount = (y: number, d: number) => {
  const x = (100 * y) / (100 - d);
  return x;
};

export const calculatePriceAfterDiscount = (x: number, d: number): number => {
  const y = x * ((100 - d) / 100);
  return y;
};

export const discount = (x: number, y: number): number => {
  const d = 100 * ((x - y) / x);
  return d;
};

export const calculateSingleProductPrice = (
  productPrice: number,
  qty: number
): number => {
  return productPrice * qty;
};

export const calculateTotalPrice = (products: CartProductType[]): number => {
  const productPrice = products.reduce(
    (sum, product: CartProductType) => sum + product.price * product.qty,
    0
  );

  return productPrice;
};

export const calculateTotalSavingOnASingleProduct = (
  discountedPrice: number, // y
  discountPercentage: number, // d
  qty: number
): number => {
  const originalPrice = (100 * discountedPrice) / (100 - discountPercentage);
  const savingsPerUnit = originalPrice - discountedPrice;
  return savingsPerUnit * qty;
};

export const calculateTotalDiscount = (products: CartProductType) => {};
