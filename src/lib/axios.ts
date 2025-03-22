import { env } from "@/env";
import axios from "axios";

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

// Adicionar um delay a todas as requisições se a variável de ambiente VITE_ENABLE_API_DELAY estiver definida
if (env.VITE_ENABLE_API_DELAY) {
  // antes de todas as requisições, ele chama a função passada como argumento
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    );
    return config;
  });
}
