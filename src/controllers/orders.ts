import { Request, Response } from "express";
import Order from "../models/Order";
import User from "../models/User";
import Product from "../models/Product";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, products } = req.body;

    // 1. User prüfen
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User existiert nicht" });
    }

    let total = 0;

    // 2. Produkte prüfen + Preis berechnen
    for (const item of products) {
      const product = await Product.findById(item.productId);

      if (!product) {
        return res.status(400).json({ message: "Produkt nicht gefunden" });
      }

      total += product.price * item.quantity;
    }

    // 3. Order erstellen
    const order = await Order.create({
      userId,
      products,
      total,
    });

    res.status(201).json(order);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .populate("userId")
      .populate("products.productId");

    res.json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
