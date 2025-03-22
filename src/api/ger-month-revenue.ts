import { api } from "@/lib/axios";

interface GetMonthRevenueAmountResponse {
  amount: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenueOrdersAmount() {
  const response = await api.get<GetMonthRevenueAmountResponse>(
    "/metrics/month-receipt",
  );

  return response.data;
}
