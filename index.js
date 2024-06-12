const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./Basic-CRUD/models/product.model");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://lahonbhargab:LahonUP01@cluster0.kkdgnl6.mongodb.net/Node-API"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("MongoDB Connection Failed");
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
