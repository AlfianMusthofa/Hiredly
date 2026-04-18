import { Hono } from "hono";
import { cors } from "hono/cors";
import AuthRoute from "./routers/auth.route";
import UserRoute from "./routers/user.route";

const app = new Hono();

app.use(cors());
app.route("/auth", AuthRoute);
app.route("/users", UserRoute);

app.get("/", (c) => {
  return c.text("Hello from HONO");
});

export default app;
