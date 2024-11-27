import { Order } from "../model/index.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "215000",
    customer: "674682d75ef48ad9290ad5ab",
    foodIds: ["6746a342819226072be85591", "6746a350d8ab3b5753f1dd6d"],
  });

  response.json({
    succes: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("customer").populate("foodIds"); // customer Field deer bga data-g aviy

  response.json({
    succes: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
