"use client";

import { ShoppingCartContext } from "@/context/shopping-cart";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Link from "next/link";
import { useContext, useMemo } from "react";

export default function ViewCartButton() {
  const { cart } = useContext(ShoppingCartContext);

  const totalItems: number = useMemo(() => {
    return cart.reduce((acc, item) => {
      acc += item.count;
      return acc;
    }, 0);
  }, [cart]);

  return (
    <Link href="/cart" role="button" title="Go to cart">
      <Badge count={totalItems}>
        <ShoppingCartOutlined className="text-3xl" />
      </Badge>
    </Link>
  );
}
