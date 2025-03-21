import { twMerge } from "tailwind-merge";

type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Processando",
  delivering: "Entregando",
  delivered: "Entregue",
};

const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={twMerge(
          "h-2 w-2 rounded-full bg-slate-400",
          status === "pending"
            ? "bg-slate-400"
            : status === "canceled"
              ? "bg-rose-500"
              : status === "delivered"
                ? "bg-emerald-500"
                : "bg-amber-500",
        )}
      ></span>
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[status]}
      </span>
    </div>
  );
};

export default OrderStatus;
