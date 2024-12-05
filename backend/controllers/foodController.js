import { Food } from "../model/food.js";
import { v2 as cloudinary } from "cloudinary";

const createFood = async (request, response) => {
  try {
    const { name, ingredient, price, categoryId } = request.body;
    const file = request.file;

    if (!file) {
      return response
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "foods",
    });

    const result = await Food.create({
      name,
      image: uploadResult.url,
      ingredient,
      price,
      categoryId,
    });

    response.status(201).json({
      success: true,
      message: "Food item created successfully",
      data: result,
    });
  } catch (e) {
    response
      .status(500)
      .json({ success: false, message: "Error creating food" });
    console.log("Create food data failed");
  }
};

const getAllFoods = async (request, response) => {
  try {
    const result = await Food.find({}).populate("categoryId");

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log("Fetch food product in failed", e);
  }
};

export { createFood, getAllFoods };
