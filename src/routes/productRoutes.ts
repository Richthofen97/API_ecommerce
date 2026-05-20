import express from "express";
import { createProduct, getProducts } from "../controllers/products";

import { validate } from "../middleware/validate";
import { createProductSchema } from "../schemas/productSchema";

import { auth } from "../middleware/auth";
import { requireRole } from "../middleware/role";

const router = express.Router();

// PUBLIC
router.get("/", getProducts);

// 🔥 ONLY ADMIN
router.post(
  "/",
  auth,
  requireRole("admin"),
  validate(createProductSchema),
  createProduct,
);

export default router;
