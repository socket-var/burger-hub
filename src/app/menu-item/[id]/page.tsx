import "server-only";
import Image from "next/image";
import { fetchMenuItemById } from "@/api";
import { Card, Typography } from "antd";
import "server-only";
import BackButton from "@/components/back-button";
import AddToCartButton from "@/components/add-to-cart";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

export default async function MenuItemContainer({
  params,
}: {
  params: { id: string };
}) {
  const item = await fetchMenuItemById(params.id);

  return (
    <div className="grid gap-y-4 grid-cols-1 ">
      <BackButton />
      <Image
        src={item.image}
        alt={`Picture of ${item.name}`}
        width={400}
        height={400}
        className="rounded-md"
      />
      <Title>{item.name}</Title>
      <Text strong>${item.priceInDollars}</Text>
      <Paragraph>{item.description}</Paragraph>
      <AddToCartButton menuItem={item} />
    </div>
  );
}
