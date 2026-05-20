import express from "express";
import { createCategory, getCategories } from "../controllers/categories";
import { validate } from "../middleware/validate";
import { createCategorySchema } from "../schemas/categorySchema";

const router = express.Router();

router.post("/", validate(createCategorySchema), createCategory);
router.get("/", getCategories);

export default router;
