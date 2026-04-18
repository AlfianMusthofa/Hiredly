import app from "./app";
import "dotenv/config";
import { sequelize, connectDb } from "./config/database";
import "./models/associations";

(async () => {
  try {
    await connectDb();
    await sequelize.sync();
    console.log("Server running...");
  } catch (error) {
    console.error("Startup error:", error);
  }
})();

export default {
  port: process.env.PORT!,
  fetch: app.fetch,
};
