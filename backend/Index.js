const express = require("express");

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Lunea Skin ");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});