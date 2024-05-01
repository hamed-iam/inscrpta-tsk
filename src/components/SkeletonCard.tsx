import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";

export default function SkeletonCard() {
  return (
    <Card>
      <div className="flex flex-col space-y-3 p-3">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <Skeleton className="h-[125px] w-[100%] rounded-xl" />

        <div className="flex justify-between">
          <Skeleton className="h-4 w-[100px]" />

          <Skeleton className="h-4 w-[30px]" />
        </div>
      </div>
    </Card>
  );
}
