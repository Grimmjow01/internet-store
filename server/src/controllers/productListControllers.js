const { Product } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll()
  res.json(allProducts)

}

const addProducts = async (req, res) => {

}

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const removedProduct = await Product.destroy({
      where: { id },
    });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
  res.json({ success: true });
}

const updateProducts = async (req, res) => {

}

module.exports = { productListControllers, addProducts, deleteProducts, updateProducts }
