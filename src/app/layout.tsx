import "server-only";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NavBar } from "@/components/nav-bar";
import { ShoppingCartProvider } from "@/context/shopping-cart";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burger Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  headerBg: "#f0f0f0",
                },
              },
            }}
          >
            <ShoppingCartProvider>
              <NavBar />
              <div className="p-4 w-4/5 mx-auto">{children}</div>
            </ShoppingCartProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
