import { Hono } from "hono";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import coilRoute from "./routes/coilRoute";

const app = new Hono();

app.use(logger());
app.use(prettyJSON());

app.get("/", (c) => {
  return c.json({
    "message" : "hello from hono!"
  })
});



app.route("/api/coil", coilRoute);



export default app;
