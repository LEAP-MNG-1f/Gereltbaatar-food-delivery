import mongoose from "mongoose";

const Enum = ["active", "progress", "waiting", "delivered"];

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  foods: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  process: {
    type: String,
    enum: Enum,
    default: "active",
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
