const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

router.route("/").get(getProducts);

router.get("/:id", getProductById);

module.exports = router;
