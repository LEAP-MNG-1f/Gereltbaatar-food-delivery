import express from "express";
import multer from "multer";
import { createFood, getAllFoods } from "../controllers/foodController.js";

const upload = multer({ dest: "./uploads/" });
const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.post("/foods", upload.single("image"), createFood);

export { foodRouter };
