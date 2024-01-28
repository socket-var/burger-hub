import "server-only";
import React from "react";
import { Avatar, Dropdown, Space } from "antd";
import {
  MessageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Link from "next/link";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";

enum MenuItems {
  Profile = "Profile",
  Login = "Login",
  Logout = "Logout",
}

export const NavBar = () => {
  return (
    <Header className="flex">
      <div className="flex-1">
        <Link href="/" className="text-5xl">
          🍔
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-64">
          <Search placeholder="Type to search..." />
        </div>
        <Link href="/cart">
          <ShoppingCartOutlined className="text-3xl" />
        </Link>
      </div>
    </Header>
  );
};
