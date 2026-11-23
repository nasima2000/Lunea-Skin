
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

 // GET -all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - id product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
});

// PUT 
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ message: error.message });
  }
});

// PATCH 
router.patch("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }

    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ message: error.message });
  }
});

// DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
