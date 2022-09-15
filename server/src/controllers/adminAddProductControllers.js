const { Product, Brand, Type } = require('../../db/models');

const getProductsAdminProfile = async (req, res) => {
  const allProducts = await Product.findAll()
  res.json(allProducts)

}

const addProductsAdmin = async (req, res) => {
  try {
    const { name_product, rating, price, brand, description, types } = req.body;
    const currentIdBrand = await Brand.findOne({where: {name: brand} })
    const currentIdTypes = await Type.findOne({where: {name: types} })
    const newProduct = await Product.create({
      name: name_product,
      price: price,
      rating: 0,
      description,
      type_id: currentIdTypes.id,
      brand_id: currentIdBrand.id
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
