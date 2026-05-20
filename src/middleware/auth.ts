import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

console.log("AUTH MIDDLEWARE LOADED");

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "Kein Token vorhanden" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
      role: "user" | "admin";
    };

    (req as any).user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token ungültig" });
  }
};
