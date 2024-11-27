import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  foodIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
});

export const Order = mongoose.model("Order", orderSchema);
