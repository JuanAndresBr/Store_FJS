const axios = require("axios");

const getCategories = async function (req, res) {
  try {
    const result = await axios("https://fakestoreapi.com/products/categories");
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCategorie = async function (req, res) {
  try {
    const {name}= req.params
    const result = await axios(`https://fakestoreapi.com/products/category/${name}`);
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getCategorie, getCategories };
