import React from "react";
import { render, screen } from "@testing-library/react";
import ViewCartButton from "./";
import { CartItem, ShoppingCartContext } from "@/context/shopping-cart";

test("Badge count is displayed as expected", () => {
  const cart: CartItem[] = [
    { id: "1", count: 102, image: "img1", name: "foo", totalPrice: 2000 },
    { id: "2", count: 214, image: "img2", name: "bar", totalPrice: 2657 },
    { id: "3", count: 353, image: "img2", name: "baz", totalPrice: 5000 },
  ];

  render(
    <ShoppingCartContext.Provider value={{ cart }}>
      <ViewCartButton />
    </ShoppingCartContext.Provider>
  );

  const expectedTotal = "669";
  // Ensure the badge count is updated based on the provided cart
  expect(screen.getByTitle(expectedTotal)).toBeInTheDocument();
});
