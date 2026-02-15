import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { createTodoSchema } from "./schema.js";
import { prisma } from "../../utils/prisma.js";

export const todoRouter = new Hono()
  .get("/", async (c) => {
    const todos = await prisma.todo.findMany();
    return c.json(todos);
  })
  .get("/:id", async (c) => {
    const todoId = c.req.param("id");
    const todo = await prisma.todo.findUnique({
      where: {
        id: Number(todoId),
      },
    });
    if (!todo) {
      return c.json({ message: "Your todo is not found" }, 404);
    }
    return c.json(todo);
  })
  .post("/", zValidator("json", createTodoSchema), async (c) => {
    const body = c.req.valid("json");

    const newTodo = await prisma.todo.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return c.json(newTodo, 201);
  })
  .put("/:id", zValidator("json", createTodoSchema), async (c) => {
    const todoId = c.req.param("id");
    const body = c.req.valid("json");

    const updatedTodo = await prisma.todo.update({
      where: {
        id: Number(todoId),
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return c.json(updatedTodo);
  })
  .patch("/:id/done", async (c) => {
    const todoId = c.req.param("id");
    try {
      const updatedTodo = await prisma.todo.update({
        where: {
          id: Number(todoId),
        },
        data: {
          isCompleted: true,
        },
      });
      return c.json(updatedTodo);
    } catch (error) {
      return c.json(
        { message: "The todo you are looking for is not found" },
        404,
      );
    }
  })
  .delete("/:id", async (c) => {
    const todoId = c.req.param("id");

    await prisma.todo.delete({
      where: {
        id: Number(todoId),
      },
    });

    return c.json({ message: "Your todo has been deleted" });
  });
