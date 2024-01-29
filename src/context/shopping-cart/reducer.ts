"use client";

import { MenuItem } from "@/api";
import { CartItem } from "./context";

export type CartReducerAction =
  | {
      type: "added";
      payload: { menuItem: MenuItem };
    }
  | {
      type: "deleted";
      payload: { menuItemId: string };
    };

export function cartReducer(cart: CartItem[], action: CartReducerAction) {
  switch (action.type) {
    case "added": {
      return upsertItemToCart(cart, action.payload.menuItem);
    }
    case "deleted": {
      return cart.filter((item) => item.id !== action.payload.menuItemId);
    }
    default: {
      throw Error(`Unknown Cart Action: ${(action as any).type}`);
    }
  }
}

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
