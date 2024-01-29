import React from "react";

import Link from "next/link";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import ViewCartButton from "./view-cart-button";
import ThemeToggle from "./theme-toggle";

export const NavBar = () => {
  return (
    <Header className="grid grid-cols-2 grid-rows-[50px] content-center">
      <div>
        <div>
          <Link
            href="/"
            className="text-5xl"
            title="Burger Hub"
            role="navigation"
            aria-label="Main"
          >
            🍔
          </Link>
        </div>
      </div>
      <div className="flex justify-end gap-6 items-center">
        <div className="w-64 flex">
          <Search placeholder="Type to search..." />
        </div>
        <ViewCartButton />
        <ThemeToggle />
      </div>
    </Header>
  );
};
