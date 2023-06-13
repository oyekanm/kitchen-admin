import mongoose, { models } from "mongoose";

const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = models.Category || model("Category", categorySchema);
export default Category;