import { DollarSign, Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  dateType: "dia" | "mês";
  icon?: "dollar" | "utensils";
}

const DashboardCard = ({
  title,
  dateType,
  icon = "dollar",
}: DashboardCardProps) => {
  return (
    <Card className="gap-1">
      <CardHeader className="flex items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          {title} ({dateType})
        </CardTitle>
        {icon === "dollar" ? (
          <DollarSign className="h-4 w-4" />
        ) : (
          <Utensils className="h-4 w-4" />
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        <span className="text-2xl font-bold tracking-tight">R$ 1248,60</span>
        <p className="text-muted-foreground text-sm">
          <span className="text-emerald-500 dark:text-emerald-400">+2,1%</span>{" "}
          {dateType === "mês"
            ? "em relação ao mês passado"
            : "em relação a ontem"}
        </p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
