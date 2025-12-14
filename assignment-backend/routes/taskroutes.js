import express from "express";
import protect from "../middlewares/auth.js";
import isAdmin from "../middlewares/role.js";
import validate from "../middlewares/validate.js";
import { taskValidator } from "../validators/taskvalidator.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  adminDeleteTask
} from "../controllers/taskcontroller.js";

const router = express.Router();

router.use(protect);

router.post("/", taskValidator, validate, createTask);
router.get("/", getTasks);
router.put("/:id", taskValidator, validate, updateTask);
router.delete("/:id", deleteTask);

// Admin-only
router.delete("/admin/:id", isAdmin, adminDeleteTask);

export default router;
