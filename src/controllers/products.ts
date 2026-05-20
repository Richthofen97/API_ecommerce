import { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, categoryId } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Kategorie existiert nicht" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      categoryId,
    });

    return res.status(201).json(product);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const filter: any = {};

    if (req.query.categoryId) {
      filter.categoryId = req.query.categoryId;
    }

    const products = await Product.find(filter).populate("categoryId");
    res.json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
