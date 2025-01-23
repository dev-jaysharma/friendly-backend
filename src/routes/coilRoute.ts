import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";

const coilSchema = z.object({
  name: z.string(),
  sets: z.number(),
  weight: z.number(),
  delivered: z.boolean(),
});

const coilRoute = new Hono()
  .get("/", (c) => {
    return c.json({ message: "Hello Hono! from jay" });
  })
  .post("/", zValidator("json" , coilSchema) , async (c) => {
    const data = await c.req.valid("json");
    const coil = coilSchema.parse(data);
    return c.json(coil, 201);
  });

export default coilRoute;
