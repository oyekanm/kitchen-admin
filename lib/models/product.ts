import mongoose, { models } from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref:"Category"
  },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
