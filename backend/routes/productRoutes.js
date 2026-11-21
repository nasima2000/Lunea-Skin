const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([]);
});

router.post("/", (req, res) => {
  const newProduct = req.body;

  res.status(201).json(newProduct);
});

module.exports = router;