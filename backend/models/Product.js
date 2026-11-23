
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [2, "Product name must be at least 2 characters"]
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"]
  },

  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true
  },

  description: {
    type: String,
    trim: true,
    maxlength: [1000, "Description cannot exceed 1000 characters"]
  },

  image: {
    type: String,
    trim: true
  },

  stock: {
    type: Number,
    default: 0,
    min: [0, "Stock cannot be negative"]
  }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
