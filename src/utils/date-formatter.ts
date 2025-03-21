import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatter = (date: string) => {
  return formatDistanceToNow(new Date(date), { locale: ptBR, addSuffix: true });
};
