import Image from "next/image";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import "server-only";
import Link from "next/link";
import { fetchMenu } from "@/api";

export default async function Home() {
  const menuList = await fetchMenu();

  // TODO: clean up grid, image and card dims
  // TODO: move card to its own component
  return (
    <Row gutter={16} className="p-4">
      {menuList.map((item) => (
        <Col span={4} key={item.id}>
          <Link href={`/menu-item/${item.id}`}>
            <Card
              cover={
                <Image
                  src={item.image}
                  alt={`Picture of ${item.name}`}
                  width={400}
                  height={400}
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
        </Col>
      ))}
    </Row>
  );
}
