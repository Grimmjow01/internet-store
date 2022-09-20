const { Product, ProductImage, Brand, Rating } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll({include: ProductImage, raw: true })
  res.json(allProducts)
}

const getOneProductForUpdate = async (req, res) => {
  const { id } = req.params;
  console.log('getOneProductForUpdate66666', 4);
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
  const { id, name, price,description,type_id,brand_id } = req.body
  const numberPrice = +price
  const onePostUpdate = await Product.findOne({where: { id }})
   if(onePostUpdate){
   const newProduct = await onePostUpdate.update(
      { name: name, price: numberPrice, description: description, type_id: type_id, brand_id: brand_id, where: { id: id } })
    res.json(newProduct)
  } else {
    res.sendStatus(400);
  }
}

// роутер для отдельной страницы продукта
const producItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const itemProduct = await Product.findOne({ 
      where: { id }, 
      include: [{
        model: Brand,
      },
      /*{
        model: Rating,
      }*/],
      raw: true,
    });
    const { product_id } = itemProduct;
    const arrayImagesForOneProduct = await ProductImage.findAll({where: { product_id: id }});
    console.log("producItemController ~ itemProduct", itemProduct);
    // console.log("producItemController ~ arrayImagesForOneProduct", arrayImagesForOneProduct);

    res.json([itemProduct, arrayImagesForOneProduct]);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
}

module.exports = { productListControllers, getOneProductForUpdate, deleteProducts, updateProducts, producItemController }

