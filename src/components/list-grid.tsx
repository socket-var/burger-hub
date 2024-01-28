import { Col, Row } from "antd";
import { ReactNode } from "react";

type RenderItemFunc<T> = (item: T) => ReactNode;

export default function ListGrid<T>({
  list,
  renderItem,
}: {
  list: T[];
  renderItem: RenderItemFunc<T>;
}) {
  return (
    <Row gutter={[16, 24]}>
      {list.map((item, index) => renderItemInternal(item, index, renderItem))}
    </Row>
  );
}

function renderItemInternal<T>(
  item: T,
  index: number,
  renderItem: RenderItemFunc<T>
): ReactNode {
  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={4} key={index}>
      {/* <Link href={`/menu-item/${item.id}`}>
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
        </Link> */}
      {renderItem(item)}
    </Col>
  );
}
