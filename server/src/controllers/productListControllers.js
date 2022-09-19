const { Product, ProductImage } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll({include: ProductImage, raw: true })
  res.json(allProducts)
}

const getOneProductForUpdate = async (req, res) => {
  const { id } = req.params;
  const findProduct = await Product.findOne({include: ProductImage, where: {id}, raw: true })
  console.log("getOneProductForUpdate ~ findProduct", findProduct)
  const product_id = findProduct['ProductImages.product_id']
   const findImageForProduct = await ProductImage.findAll({ where: {product_id: id}, raw: true })
  if(findProduct){
    res.json([findProduct, findImageForProduct])
  } else {
    res.sendStatus(400)
  }
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
  const { id, name,price,description,type_id,brand_id } = req.body
  const onePostUpdate = await Product.findOne({where: { id }})
   if(onePostUpdate){
   const newProduct = await onePostUpdate.update(
      { name: name, price: price, description: description, type_id: type_id, brand_id: brand_id, where: { id: id } })
    res.json(newProduct)
  } else {
    res.sendStatus(400);
  }
}

module.exports = { productListControllers, getOneProductForUpdate, deleteProducts, updateProducts }
