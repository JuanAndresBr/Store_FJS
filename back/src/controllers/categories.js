const axios = require("axios")

const getCategories = async function (req, res) {
  try {
    const result = await axios("https://fakestoreapi.com/products");
    const data = result.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};