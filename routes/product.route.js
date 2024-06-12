const express = require("express");
const router = express.Router();
const Product = require("../Basic-CRUD/models/product.model");
const {
  getProducts,
  getidProducts,
  getupdateProducts,
  orderProducts,
  deleteProducts,
} = require("../Basic-CRUD/controller/product.controller");

router.get("/", getProducts);
router.get("/:id", getidProducts);
router.put("/:id", getupdateProducts);
router.post("/", orderProducts);
router.delete("/:id", deleteProducts);
