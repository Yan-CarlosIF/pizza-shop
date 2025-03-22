import { api } from "@/lib/axios";

interface getOrdersQuery {
  pageIndex?: number | null;
  orderId?: string | null;
  customerName?: string | null;
  status?: string | null;
}

export interface gerOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: getOrdersQuery) {
  const response = await api.get<gerOrdersResponse>("/orders", {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  });

  return response.data;
}
