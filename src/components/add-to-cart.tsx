"use client";
import { MenuItem } from "@/api";
import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from "@/context/shopping-cart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useContext, useState } from "react";

export default function AddToCartButton({ menuItem }: { menuItem: MenuItem }) {
  const [api, contextHolder] = notification.useNotification();

  const { addToCart } = useContext(ShoppingCartDispatchContext);

  return (
    <>
      {contextHolder}
      <Button
        onClick={() => {
          addToCart(menuItem);
          api.success({
            message: "Success",
            description: `Added "${menuItem.name}" to cart`,
            placement: "top",
          });
        }}
      >
        Add to cart
      </Button>
    </>
  );
}
