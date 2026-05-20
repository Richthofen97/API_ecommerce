import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validate =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("VALIDATE BODY:", req.body);

      const result = schema.safeParse(req.body);

      if (!result.success) {
        return res.status(400).json({
          message: "Validation Error",
          errors: result.error.flatten(),
        });
      }

      req.body = result.data;

      next();
    } catch (err: any) {
      console.error("VALIDATION CRASH:", err);

      return res.status(500).json({
        message: "Validation middleware crash",
        error: err.message,
      });
    }
  };
