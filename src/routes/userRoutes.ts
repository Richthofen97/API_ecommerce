import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/users";

import { validate } from "../middleware/validate";
import { createUserSchema } from "../schemas/userSchema.js";
import { auth } from "../middleware/auth";

console.log("SCHEMA:", createUserSchema);
const router = express.Router();

// PUBLIC
router.post("/", validate(createUserSchema), createUser);

// PROTECTED
router.get("/", auth, getUsers);
router.get("/:id", auth, getUserById);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;
