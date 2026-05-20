import { z } from "zod";
console.log("USER SCHEMA FILE LOADED");
export const createUserSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  password: z.string().min(6, "Passwort muss mindestens 6 Zeichen haben"),
});
