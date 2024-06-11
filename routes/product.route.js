const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const {getProducts} = require("../controller/product.controller");

router.get('/',getProducts)