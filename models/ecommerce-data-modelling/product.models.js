import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = new mongoose.model("Product", productSchema);
