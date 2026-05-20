import { z } from "zod";

export const createOrderSchema = z.object({
  userId: z.string().min(1),
  products: z.array(
    z.object({
      productId: z.string().min(1),
      quantity: z.number().min(1),
    }),
  ),
});
