import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongodbServerConnection";
dotenv.config();

const app = express();

connectDB();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
