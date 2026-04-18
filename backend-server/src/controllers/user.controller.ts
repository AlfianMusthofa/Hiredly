import type { Context } from "hono";
import { RegisterService } from "../services/user.service";

export const register = async (c: Context) => {
  const body = await c.req.json();
  const email = body.email;
  const username = body.username;
  const password = body.password;

  try {
    await RegisterService(username, email, password);
    return c.json({ message: "Account created" }, 201);
  } catch (error) {
    console.log(error);
    return c.json({ message: "Internal server error" }, 500);
  }
};
