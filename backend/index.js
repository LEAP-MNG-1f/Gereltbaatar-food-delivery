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

dotenv.config();

//--------------------------------[ const ]--------------------------------//

const server = express();
const PORT = 4000;

//--------------------------------[ connection URL ]--------------------------------//

mongoose.connect(process.env.MONGODB_URL);

//--------------------------------[ use ]--------------------------------//

server.use(cors());
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);

//--------------------------------[ listen ]--------------------------------//

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

//--------------------------------[ TEST CODE ]--------------------------------//

//   async function () {
//     // Upload an image
//     const uploadResult = await cloudinary.uploader
//       .upload(
//         "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//         {
//           public_id: "shoes",
//         }
//       )
//       .catch((error) => {
//         console.log(error);
//       });

//     console.log(uploadResult);

//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url("shoes", {
//       fetch_format: "auto",
//       quality: "auto",
//     });

//     console.log(optimizeUrl);

//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url("shoes", {
//       crop: "auto",
//       gravity: "auto",
//       width: 500,
//       height: 500,
//     });

//     console.log(autoCropUrl);
//   }
// )();

//--------------------------------[ TEST CODE ]--------------------------------//

// cloudinaryEnvUrl = ""
