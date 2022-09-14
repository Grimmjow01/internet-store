const { Product } = require('../../db/models');

const getProductsAdminProfile = async (req, res) => {
  const allProducts = await Product.findAll()
  console.log("productListControllers ~ allProducts", allProducts)
  res.json(allProducts)

}

const addProductsAdmin = async (req, res) => {
  try {
    const { name_product, rating, price } = req.body;
      const newProduct = await Product.create({
      name: name_product,
      price: price,
      rating: 0,
    });
    res.json({ message: "Продукт в базу данных добавлен", newProduct });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: 'error' });
  }
}

const deleteProductsAdmin = async (req, res) => {

}

const updateProductsAdmin = async (req, res) => {

}

module.exports = { getProductsAdminProfile, addProductsAdmin, deleteProductsAdmin, updateProductsAdmin }
