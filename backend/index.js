import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter, orderRouter } from "./routes/index.js";
import foodRouter from "./routes/food.route.js";

mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);

const server = express();
const PORT = 4000;

server.use(cors());

const MAIN_PATH = "/api";

server.use(MAIN_PATH, userRouter);
server.use(MAIN_PATH, orderRouter);
server.use(MAIN_PATH, foodRouter);

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

// Academy400
