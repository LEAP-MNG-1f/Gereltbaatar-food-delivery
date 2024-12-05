//--------------------------------[ import ]--------------------------------//

import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { foodRouter } from "./routes/foodRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";
import { categoryRouter } from "./routes/categoryRouter.js";
import bodyParser from "body-parser";

dotenv.config();

//--------------------------------[ const ]--------------------------------//

const server = express();
const PORT = 4000;

//--------------------------------[ use ]--------------------------------//

server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);

//--------------------------------[ cloudinary ]--------------------------------//

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//--------------------------------[ mongoose_URL ]--------------------------------//

mongoose.connect(process.env.MONGODB_URL);

//--------------------------------[ listen ]--------------------------------//

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
