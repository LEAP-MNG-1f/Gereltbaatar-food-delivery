import express from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategory);
categoryRouter.post("/categorys", createCategory);

export { categoryRouter };
