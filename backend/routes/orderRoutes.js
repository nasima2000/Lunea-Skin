const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// GET - Get all orders
router.get("/", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET - Get an order by ID
router.get("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// POST - Create a new order
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { products, totalPrice, shippingAddress } = req.body;

    const newOrder = new Order({
      user: req.user.id,
      products,
      totalPrice,
      shippingAddress
    });

    await newOrder.save();

    res.status(201).json(newOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// PUT - Update an order
router.put("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// PATCH - Update part of an order
router.patch("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// DELETE - Delete an order
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;