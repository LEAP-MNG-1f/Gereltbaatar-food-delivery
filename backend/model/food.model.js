import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const FoodModel = mongoose.model("Food", foodSchema);
