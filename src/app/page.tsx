import "server-only";
import Image from "next/image";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { fetchMenu } from "@/api";
import ListGrid from "@/components/list-grid";

export default async function Home() {
  const menuList = await fetchMenu();

  return (
    <ListGrid
      list={menuList}
      renderItem={(item) => {
        return (
          <Link href={`/menu-item/${item.id}`}>
            <Card
              className="h-full"
              cover={
                <Image
                  src={item.image}
                  alt={`Picture of ${item.name}`}
                  width={300}
                  height={300}
                  priority
                />
              }
            >
              <Meta
                title={item.name}
                description={
                  <div>
                    <div>
                      <b>$ {item.priceInDollars}</b>
                    </div>
                    <div>{item.description}</div>
                  </div>
                }
              />
            </Card>
          </Link>
        );
      }}
    />
  );
}
