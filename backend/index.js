//--------------------------------[ import ]--------------------------------//

import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { MongoClient } from "mongodb";

//--------------------------------[ const ]--------------------------------//

const server = express();
const PORT = 4000;

//--------------------------------[ use ]--------------------------------//

server.use(cors());

//--------------------------------[ CRUD ]--------------------------------//

server.get("/", (_, response) => {
  response.send("server is live");
});

//--------------------------------[ MongoDB ]--------------------------------//

//--------------------------------[ cloudinary ]--------------------------------//

server.post("/cloutinry", async (req, response) => {
  try {
    cloudinary.config({
      cloud_name: "dl5irqaz6",
      api_key: "434461591186227",
      api_secret: "aGk_UYX9uk6E2zgNu7W6rCxjpqs",
    });

    const uploadResult = await cloudinary.uploader
      .upload("./images/testFoodImg.png", {
        public_id: "testFoodImg",
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(uploadResult);
    response.send("post ajilah");
  } catch (error) {
    console.log(error);
  }
});

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
