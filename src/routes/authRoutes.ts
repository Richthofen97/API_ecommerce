import express from "express";
import { login } from "../controllers/auth";

import { validate } from "../middleware/validate";
import { loginSchema } from "../schemas/authSchema";

import { auth } from "../middleware/auth";

const router = express.Router();

// LOGIN (Token wird erstellt)
router.post("/login", validate(loginSchema), login);

// TEST ROUTE (nur zum Prüfen ob Token funktioniert)
router.get("/me", auth, (req, res) => {
  res.json({
    message: "Token ist gültig",
    user: (req as any).user,
  });
});

export default router;
