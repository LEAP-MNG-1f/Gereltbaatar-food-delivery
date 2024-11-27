//--------------------------------[ import ]--------------------------------//

import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
import mongoose from "mongoose";
import { foodRouter } from "./routes/foodRoute.js";
import { userRouter } from "./routes/userRoute.js";
import { orderRouter } from "./routes/orderRoute.js";

// dotenv.config();

//--------------------------------[ const ]--------------------------------//

const server = express();
const PORT = 4000;

//--------------------------------[ use ]--------------------------------//

server.use(cors());
server.use("/api", userRouter);
server.use("/api", foodRouter);
server.use("/api", orderRouter);

mongoose.connect(
  "mongodb+srv://mglgerelt:gereltbaatar2131243432@gereltbaatardata.1cupz.mongodb.net/food-delivery"
);

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

// cloudibaryEnvUrl = "CLOUDINARY_URL=cloudinary://434461591186227:aGk_UYX9uk6E2zgNu7W6rCxjpqs@dl5irqaz6"
