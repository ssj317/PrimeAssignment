import { body } from "express-validator";

export const taskValidator = [
  body("title").notEmpty(),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "completed"])
];
