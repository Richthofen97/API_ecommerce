import express from "express";
import { createOrder, getOrders } from "../controllers/orders";

import { validate } from "../middleware/validate";
import { createOrderSchema } from "../schemas/orderSchema";

const router = express.Router();

router.post("/", validate(createOrderSchema), createOrder);
router.get("/", getOrders);

export default router;
