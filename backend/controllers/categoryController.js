import { Category } from "../model/category.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create(request.body);

    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("Create category data failed");
  }
};

const getAllCategory = async (request, response) => {
  try {
    const result = await Category.find();

    response.json({
      succes: true,
      data: result,
    });
  } catch (error) {
    console.log("Error fetching products:", error);
    response.status(500).json({ message: "Failed to fetch products" });
  }
};

export { getAllCategory, createCategory };
