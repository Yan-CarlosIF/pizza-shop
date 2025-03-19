import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  RestaurantName: string;
  ManagerName: string;
  email: string;
  phone: string;
}

export async function RegisterRestaurant({
  RestaurantName,
  ManagerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("/authenticate", {
    RestaurantName,
    ManagerName,
    email,
    phone,
  });
}
