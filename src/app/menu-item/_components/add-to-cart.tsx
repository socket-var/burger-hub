"use client";
import { MenuItem } from "@/api";
import { ShoppingCartDispatchContext } from "@/shared/context/shopping-cart";
import { Button, notification } from "antd";
import { useContext } from "react";

export default function AddToCartButton({ menuItem }: { menuItem: MenuItem }) {
  const [api, contextHolder] = notification.useNotification();

  const { addToCart } = useContext(ShoppingCartDispatchContext);

  return (
    <>
      {contextHolder}
      <Button
        data-qa="add-to-cart-button"
        onClick={() => {
          addToCart(menuItem);
          api.success({
            message: "Success",
            description: `Added "${menuItem.name}" to cart`,
            placement: "top",
          });
        }}
        type="primary"
      >
        Add to cart
      </Button>
    </>
  );
}
