const express=require("express");
const router= express.Router();
const {getCategorie, getCategories} = require("../controllers/categories")

router.get("/", getCategories)
router.get("/:name", getCategorie)

module.exports=router