import { Request, Response, NextFunction } from "express";
export const requireRole = (role: "user" | "admin") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ message: "Nicht eingeloggt" });
    }

    if (user.role !== role) {
      return res.status(403).json({ message: "Keine Berechtigung" });
    }

    next();
  };
};
