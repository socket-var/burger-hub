"use client";

import { MenuItem } from "@/api";
import { ReactNode, createContext, useReducer } from "react";

export type CartItem = Pick<MenuItem, "id" | "image" | "name"> & {
  count: number;
  totalPrice: number;
};

const DEFAULT_CART: CartItem[] = [];

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

export default function ShoppingCartProvider({
  children,
}: {
  children: ReactNode;
}) {
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

type CartReducerAction =
  | {
      type: "added";
      payload: { menuItem: MenuItem };
    }
  | {
      type: "deleted";
      payload: { menuItemId: string };
    };

function upsertItemToCart(cart: CartItem[], itemToUpsert: MenuItem) {
  const isFound = cart.find((item) => item.id === itemToUpsert.id);

  const { id, image, name, priceInDollars } = itemToUpsert;

  if (!isFound) {
    return [
      ...cart,
      {
        id,
        image,
        name,
        count: 1,
        totalPrice: priceInDollars,
      },
    ];
  } else {
    return cart.map((item) => {
      if (item.id === itemToUpsert.id) {
        return {
          ...item,
          count: item.count + 1,
          totalPrice: item.totalPrice + priceInDollars,
        };
      }

      return item;
    });
  }
}

function cartReducer(cart: CartItem[], action: CartReducerAction) {
  switch (action.type) {
    case "added": {
      return upsertItemToCart(cart, action.payload.menuItem);
    }
    case "deleted": {
      return cart.filter((item) => item.id !== action.payload.menuItemId);
    }
    default: {
      throw Error("Unknown Cart Action");
    }
  }
}
