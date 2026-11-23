
const express = require("express");
require("dotenv").config();
const connectDB = require("./db");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Lunea Skin ");
});

app.use("/api/products", productRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
