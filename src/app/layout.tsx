import "server-only";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NavBar } from "@/shared/components/nav-bar";
import { Layout } from "antd";
import ClientLayout from "./_components/client-layout";

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
          <ClientLayout>
            <Layout className="h-screen">
              <NavBar />
              <div className="p-4 w-4/5 mx-auto">{children}</div>
            </Layout>
          </ClientLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
