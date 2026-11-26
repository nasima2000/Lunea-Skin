const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
    maxlength: 1000,
  },

  image: {
    type: String,
    trim: true,
  },

  stock: {
    type: Number,
    default: 0,
    min: 0,
  },
});

module.exports = mongoose.model("Product", productSchema);