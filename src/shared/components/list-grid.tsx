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
      {renderItem(item)}
    </Col>
  );
}
