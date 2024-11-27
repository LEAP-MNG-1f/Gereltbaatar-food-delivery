import { Category } from "../model/category.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create({
      name: "Салад ба зууш",
    });
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
  } catch (e) {
    console.log("Fetch category in failed");
  }
};

export { getAllCategory, createCategory };
