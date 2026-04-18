import { Hono } from "hono";
import { register } from "../controllers/user.controller";

const route = new Hono();

route.post("/register", register);

export default route;
