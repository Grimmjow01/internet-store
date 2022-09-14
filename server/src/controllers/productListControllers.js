const { Product } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll()
  console.log("productListControllers ~ allProducts", allProducts)
  res.json(allProducts)

}

const addProducts = async (req, res) => {

}

const deleteProducts = async (req, res) => {

}

const updateProducts = async (req, res) => {

}

module.exports = { productListControllers, addProducts, deleteProducts, updateProducts }
