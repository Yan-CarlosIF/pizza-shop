import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { twMerge } from "tailwind-merge";

export function DayOrdersAmountCard() {
  const { data: dayOrdersAmount } = useQuery({
    queryKey: ["metrics", "day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });

  return (
    <Card className="gap-1">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-muted-foreground text-sm">
              <span
                className={twMerge(
                  dayOrdersAmount.diffFromYesterday < 0
                    ? "text-rose-500 dark:text-rose-400"
                    : "text-emerald-500 dark:text-emerald-400",
                )}
              >
                {dayOrdersAmount.diffFromYesterday > 0 && "+"}
                {dayOrdersAmount.diffFromYesterday}%
              </span>{" "}
              em relação a ontem
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
