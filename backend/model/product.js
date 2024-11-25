import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: String,
});

const productModel = model("product", productSchema);

export default productModel;
