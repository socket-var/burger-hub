"use client";

import {
  ShoppingCartContext,
  ShoppingCartDispatchContext,
} from "@/shared/context/shopping-cart";
import { ThemeContext } from "@/shared/context/theme-provider";
import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider, List, Typography } from "antd";
import Title from "antd/es/typography/Title";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useContext, useMemo } from "react";

export default function CartPage() {
  const { cart } = useContext(ShoppingCartContext);
  const { deleteFromCart } = useContext(ShoppingCartDispatchContext);
  const { isDarkTheme } = useContext(ThemeContext);
  const router = useRouter();

  const cartTotalPrice: number = useMemo(() => {
    return cart.reduce((acc, item) => {
      acc += item.totalPrice;
      return acc;
    }, 0);
  }, [cart]);

  return (
    <div className="grid grid-cols-1">
      <Title>Shopping Cart</Title>
      <List
        itemLayout="horizontal"
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            onClick={() => {
              router.push(`/menu-item/${item.id}`);
            }}
            className={clsx(
              "hover:shadow-sm",
              "hover:cursor-pointer",
              "hover:rounded-md",
              "!p-2",
              isDarkTheme ? "hover:shadow-slate-400" : "hover:shadow-slate-700"
            )}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.image} size={75} />}
              title={
                <div>
                  {item.name} ({item.count})
                </div>
              }
              description={
                <div className="flex justify-between">
                  <div>${item.totalPrice}</div>
                  <Button
                    aria-label="Delete Menu Item"
                    icon={<DeleteOutlined />}
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteFromCart(item.id);
                    }}
                    danger
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
      {!!cart.length && (
        <>
          <Divider />
          <Typography.Text className="font-bold">
            Total price: ${" "}
            <span data-qa="cart-total-price">{cartTotalPrice.toFixed(2)}</span>
          </Typography.Text>
        </>
      )}
    </div>
  );
}
