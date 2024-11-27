import { FoodModel } from "../model/food.model.js";

const createFood = async (request, response) => {
  const result = await FoodModel.create({
    name: "Budaatai huurga",
  });

  response.json({
    succes: true,
    data: result,
  });
};

export { createFood };
