import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { twMerge } from "tailwind-merge";
import MetricCardSkeleton from "./metric-card-skeleton";

export function MonthCanceledOrdersAmountCard() {
  const { data: MonthCanceledOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-canceled-orders-amount"],
    queryFn: getMonthCanceledOrdersAmount,
  });

  return (
    <Card className="gap-1">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        {MonthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {MonthCanceledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-muted-foreground text-sm">
              <span
                className={twMerge(
                  MonthCanceledOrdersAmount.diffFromLastMonth > 0
                    ? "text-rose-500 dark:text-rose-400"
                    : "text-emerald-500 dark:text-emerald-400",
                )}
              >
                {MonthCanceledOrdersAmount.diffFromLastMonth > 0 && "+"}
                {MonthCanceledOrdersAmount.diffFromLastMonth}%
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
