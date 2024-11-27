import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      orderNumber: 1,
      totalPrice: "21,000",
      userId: "67469285772fef7070c04e9d",
      district: "Баянзүрх дүүрэг",
      foods: "6746a1a0929e845194026e8f",
      khoroo: "3-р хороо",
      apartment: "Нархан хотхон",
    });
    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("Create order data faild");
  }
};

const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find().populate("userId").populate("foods");

    response.json({
      succes: true,
      data: result,
    });
  } catch (e) {
    console.log("fetch order in failed");
  }
};

export { getAllOrders, createOrder };
