"use client";

import { MenuItem } from "@/api";
import { ReactNode, useReducer } from "react";
import { cartReducer } from "./reducer";
import {
  DEFAULT_CART,
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from "./context";

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, DEFAULT_CART);

  const addToCart = (menuItem: MenuItem) => {
    dispatch({
      type: "added",
      payload: { menuItem },
    });
  };

  const deleteFromCart = (menuItemId: string) => {
    dispatch({
      type: "deleted",
      payload: { menuItemId },
    });
  };

  return (
    <ShoppingCartContext.Provider value={{ cart }}>
      <ShoppingCartDispatchContext.Provider
        value={{ addToCart, deleteFromCart }}
      >
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
}
