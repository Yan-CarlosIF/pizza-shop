import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonthRevenue } from "@/api/ger-month-revenue";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { priceFormatter } from "@/utils/price-formatter";
import MetricCardSkeleton from "./metric-card-skeleton";

export function MonthRevenueCard() {
  const { data: monthRevenue } = useQuery({
    queryKey: ["metrics", "month-revenue"],
    queryFn: getMonthRevenue,
  });

  return (
    <Card className="gap-1">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        {monthRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {priceFormatter(monthRevenue.receipt / 100)}
            </span>
            <p className="text-muted-foreground text-sm">
              <span
                className={twMerge(
                  monthRevenue.diffFromLastMonth < 0
                    ? "text-rose-500 dark:text-rose-400"
                    : "text-emerald-500 dark:text-emerald-400",
                )}
              >
                {monthRevenue.diffFromLastMonth >= 0 && "+"}
                {monthRevenue.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
