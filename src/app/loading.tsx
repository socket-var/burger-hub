import CardSkeleton from "@/shared/components/card-skeleton";
import ListGrid from "@/shared/components/list-grid";

export default function LoadingSkeleton() {
  return (
    <ListGrid list={[1, 2, 3, 4, 5, 6]} renderItem={() => <CardSkeleton />} />
  );
}
