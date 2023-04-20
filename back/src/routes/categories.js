const express=require("express");
const router= express.Router();
const {getProducts, getProduct} = require("../controllers/products")

router.get("/", getCategories)
router.get("/:id", getProduct)

module.exports=router