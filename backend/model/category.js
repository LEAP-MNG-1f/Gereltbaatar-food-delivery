import mongoose, { Types } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("Category", categorySchema);