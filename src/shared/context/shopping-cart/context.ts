"use client";

import { MenuItem } from "@/api";
import { createContext } from "react";

export type CartItem = Pick<MenuItem, "id" | "image" | "name"> & {
  count: number;
  totalPrice: number;
};

export const DEFAULT_CART: CartItem[] = [];

export const ShoppingCartContext = createContext<{ cart: CartItem[] }>({
  cart: DEFAULT_CART,
});
export const ShoppingCartDispatchContext = createContext<{
  addToCart: (menuItem: MenuItem) => void;
  deleteFromCart: (menuItemId: string) => void;
}>({
  addToCart: () => {},
  deleteFromCart: () => {},
});
