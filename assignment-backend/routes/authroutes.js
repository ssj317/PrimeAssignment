import express from "express";
import { register, login } from "../controllers/authcontroller.js";
import validate from "../middlewares/validate.js";
import {
  registerValidator,
  loginValidator
} from "../validators/authvalidator.js";

const router = express.Router();

router.post("/register", registerValidator, validate, register);
router.post("/login", loginValidator, validate, login);

export default router;
