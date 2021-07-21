const express = require("express");
const router = express.Router();

const {
    getAllproducts,
    getAllproductById,
} = require("../controller/productController");

//get all products from db
//get /api/products
//public
//here / means  available like this localhost:3000/api/products which called by server.js
router.get("/", getAllproducts);

//get a product by id from db
//get /api/products
//public
router.get("/:id", getAllproductById);
module.exports = router;