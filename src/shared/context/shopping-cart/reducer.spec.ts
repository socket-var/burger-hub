import { CartItem } from ".";
import { cartReducer, CartReducerAction } from "./reducer";
import { MenuItem } from "@/api";

describe("cartReducer", () => {
  const DEFAULT_CART: CartItem[] = [
    {
      id: "1",
      image: "image-url",
      name: "Item 1",
      count: 1,
      totalPrice: 10,
    },
  ];

  describe('should handle "added" action correctly', () => {
    test("should add a new item to the cart", () => {
      const menuItem: MenuItem = {
        id: "2",
        image: "image-url-2",
        name: "Item 2",
        priceInDollars: 15,
        price: 1500,
        description: "foo",
        calorie: 500,
      };

      const updatedCart = cartReducer(DEFAULT_CART, {
        type: "added",
        payload: { menuItem },
      });

      expect(updatedCart).toEqual([
        ...DEFAULT_CART,
        {
          id: "2",
          image: "image-url-2",
          name: "Item 2",
          count: 1,
          totalPrice: 15,
        },
      ]);
    });

    test("should increment count and totalPrice for an existing item", () => {
      const menuItem: MenuItem = {
        id: "1",
        image: "image-url",
        name: "Item 1",
        priceInDollars: 10,
        price: 1000,
        description: "bar",
        calorie: 400,
      };

      const updatedCart = cartReducer(DEFAULT_CART, {
        type: "added",
        payload: { menuItem },
      });

      expect(updatedCart).toEqual([
        {
          id: "1",
          image: "image-url",
          name: "Item 1",
          count: 2,
          totalPrice: 20,
        },
      ]);
    });
  });

  test('should handle "deleted" action correctly', () => {
    const menuItemIdToDelete = "1";

    const action: CartReducerAction = {
      type: "deleted",
      payload: { menuItemId: menuItemIdToDelete },
    };

    const updatedCart = cartReducer(DEFAULT_CART, action);

    expect(updatedCart).toEqual([]);
  });

  test("should throw error for unknown action type", () => {
    const action: CartReducerAction = {
      type: "unknown" as any,
      payload: { menuItem: {} as MenuItem }, // Payload doesn't matter for this test
    };

    expect(() => cartReducer(DEFAULT_CART, action)).toThrow(
      "Unknown Cart Action"
    );
  });
});
