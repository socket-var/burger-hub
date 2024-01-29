import { Card, Skeleton } from "antd";

export default function CardSkeleton() {
  return (
    <Card>
      <Skeleton loading={true} active avatar />
    </Card>
  );
}
