"use client";

import { NavBar } from "@/shared/components/nav-bar";
import { ShoppingCartProvider } from "@/shared/context/shopping-cart";
import ThemeProvider from "@/shared/context/theme-provider";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ShoppingCartProvider>{children}</ShoppingCartProvider>
    </ThemeProvider>
  );
}
