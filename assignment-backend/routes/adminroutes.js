import express from "express";
import protect from "../middlewares/auth.js";
import isAdmin from "../middlewares/role.js";
import { getAllUsers,deleteUser } from "../controllers/admincontroller.js";

const router = express.Router();

router.use(protect);
router.use(isAdmin);

router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

export default router;
