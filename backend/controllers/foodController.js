import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  try {
    const result = await Food.create({
      name: "Mexican Tacos",
      price: 9500,
      image:
        "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
      category: "Салад ба зууш",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    });

    response.json({
      succse: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};

const getAllFoods = async (request, response) => {
  const result = await Food.find({});

  response.json({
    succse: true,
    data: result,
  });
};

export { createFood, getAllFoods };
