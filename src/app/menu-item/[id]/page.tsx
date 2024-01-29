import "server-only";
import Image from "next/image";
import { fetchMenuItemById } from "@/api";
import AddToCartButton from "@/app/menu-item/_components/add-to-cart";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";
import Link from "next/link";
import { Button } from "antd";
import { BackwardOutlined } from "@ant-design/icons";
import { placeholderImageBase64 } from "@/shared/placeholder-image";

export default async function MenuItemContainer({
  params,
}: {
  params: { id: string };
}) {
  const item = await fetchMenuItemById(params.id);

  return (
    <div className="grid gap-y-4 grid-cols-1 ">
      <Link href={"/"}>
        <Button icon={<BackwardOutlined title="Go Back" />} danger>
          Go Back
        </Button>
      </Link>
      <Image
        src={item.image}
        alt={`Picture of ${item.name}`}
        width={325}
        height={350}
        className="rounded-md"
        placeholder={placeholderImageBase64}
      />
      <Title>{item.name}</Title>
      <Text strong>${item.priceInDollars}</Text>
      <Paragraph>{item.description}</Paragraph>
      <Paragraph>Nutrition: {item.calorie}</Paragraph>
      <AddToCartButton menuItem={item} />
    </div>
  );
}
