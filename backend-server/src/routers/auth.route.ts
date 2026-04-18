import { Hono } from "hono";
import { login, logout, me, refresh } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const route = new Hono();

route.post("/login", login);
route.post("/refresh", refresh);
route.post("/logout", authMiddleware, logout);
route.get("/me", authMiddleware, me);

export default route;
