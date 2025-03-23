import { Skeleton } from "@/components/ui/skeleton";

const MetricCardSkeleton = () => {
  return (
    <>
      <Skeleton className="h-7 w-36" />
      <Skeleton className="h-4 w-54" />
    </>
  );
};

export default MetricCardSkeleton;
