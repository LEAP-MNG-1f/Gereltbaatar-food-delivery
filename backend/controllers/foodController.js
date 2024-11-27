import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.ins({
      name: "Mexican Tacos",
      price: 9500,
      image:
        "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      categoryId: "6746a10d121cbc7de5bb74b4",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    });

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
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
    console.log("Fetch food product in failed");
  }
};

export { createFood, getAllFoods };
