"use client";

import { MenuItem } from "@/api";
import { ShoppingCartDispatchContext } from "@/shared/context/shopping-cart";
import { placeholderImageBase64 } from "@/shared/placeholder-image";
import { PlusOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useContext } from "react";

const SIDE_ITEMS: MenuItem[] = [
  {
    id: "123",
    name: "Fries",
    price: 300,
    priceInDollars: 3,
    image: placeholderImageBase64,
  },
  {
    id: "456",
    name: "Coke",
    price: 500,
    priceInDollars: 5,
    image: placeholderImageBase64,
  },
];

export default function SideItems() {
  const [api, contextHolder] = notification.useNotification();

  const { addToCart } = useContext(ShoppingCartDispatchContext);
  return (
    <div className="flex gap-5">
      {contextHolder}
      {SIDE_ITEMS.map((item) => {
        return (
          <Button
            icon={<PlusOutlined />}
            key={item.id}
            onClick={() => {
              addToCart(item);
              api.success({
                message: "Success",
                description: `Added "${item.name}" to cart`,
                placement: "top",
              });
            }}
            type="dashed"
          >
            {item.name}: ${item.priceInDollars}
          </Button>
        );
      })}
    </div>
  );
}
