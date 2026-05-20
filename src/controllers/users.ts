import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";

// CREATE USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Missing fields",
        required: ["name", "email", "password"],
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const { password: _, ...safeUser } = user.toObject();

    return res.status(201).json(safeUser);
  } catch (error: any) {
    return res.status(400).json({
      message: "User creation failed",
      error: error.message,
    });
  }
};

// GET ALL USERS
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    return res.json(users);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// GET USER BY ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User nicht gefunden" });
    }

    return res.json(user);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User nicht gefunden" });
    }

    return res.json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE USER
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User nicht gefunden" });
    }

    return res.json({ message: "User gelöscht" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
