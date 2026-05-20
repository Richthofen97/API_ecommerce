import { connectDB } from "./db/index";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import authRoutes from "./routes/authRoutes";

console.log("APP STARTED");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Datenbank verbinden
connectDB();

// Debug
console.log("ROUTES:", userRoutes);

// Routes
app.use("/users", userRoutes);
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/auth", authRoutes);

// Server starten
app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
