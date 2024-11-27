import express from "express";
import { getAllOrders, createOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", createOrder);

export { orderRouter };
