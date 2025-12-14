import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middlewares/error.js";

import authRoutes from "./routes/authroutes.js";
import taskRoutes from "./routes/taskroutes.js";
import adminRoutes from "./routes/adminroutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorHandler);

export default app;
