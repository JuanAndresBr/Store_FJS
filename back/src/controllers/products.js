const axios = require("axios");

const getProducts = async function (req, res) {
  try {
    const result = await axios("https://fakestoreapi.com/products");
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getProduct = async function (req, res) {
  try {
    const { id } = req.params;
    const result = await axios(`https://fakestoreapi.com/products/${id}`);
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getProducts, getProduct };
