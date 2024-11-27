import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    orderNumber: 1,
    totalPrice: "21,000",
    userId: "67469285772fef7070c04e9d",
    district: "Баянзүрх дүүрэг",
    khoroo: "3-р хороо",
    apartment: "Нархан хотхон",
  });
  response.json({
    succes: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId");

  response.json({
    succes: true,
    data: result,
  });
};

export { getAllOrders, createOrder };
