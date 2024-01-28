import CardSkeleton from "@/components/card-skeleton";
import ListGrid from "@/components/list-grid";

export default function LoadingSkeleton() {
  return (
    <ListGrid list={[1, 2, 3, 4, 5, 6]} renderItem={() => <CardSkeleton />} />
  );
}
