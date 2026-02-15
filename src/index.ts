import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { todoRouter } from "./modules/todos/route.js";
import "dotenv/config";

const app = new Hono().route("/todos", todoRouter);

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
