import z from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(8),
  description: z.string().min(8),
});
