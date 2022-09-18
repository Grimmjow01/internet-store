const { Product, ProductImage } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll({include: ProductImage, raw: true })
  // console.log("productListControllers ~ allProducts", allProducts)

  // const allProducts = await Product.findAll()
  // console.log("productListControllers ~ allProducts", allProducts)
  // const imageProducts = await ProductImage.findAll({include: Product, raw: true })
  // console.log("productListControllers ~ im=======================ageProducts", imageProducts)
  
  // const producWithImage = await Product.findAll({where: { id: imageProducts.id}})
  // console.log("productListControllers ~ producWithImage=====================", producWithImage)
  // const oneProductForSendOnClient = []
  // for (let i = 0; i < allProducts.length; i++) {
  //   const arrayImagesForOneProduct = []
  //   for (let k = 0; k < imageProducts.length; k++) {
  //     if(allProducts[i].id === imageProducts[k].product_id)
  //     arrayImagesForOneProduct.push(imageProducts[k].img)
  //   }
  //   const img_src = arrayImagesForOneProduct.map(item => `<img src="${item}" />`).join('')
  //   oneProductForSendOnClient.push(img_src)
    // console.log("productListControllers ~ oneProductForSendOnClient", oneProductForSendOnClient)
    // console.log("productListControllers ~ arrayImagesForOneProduct", arrayImagesForOneProduct)
  // }
  // res.json(oneProductForSendOnClient)
  res.json(allProducts)
}

const getOneProductForUpdate = async (req, res) => {
  const { id } = req.params;
  console.log("loadImageForOneProductControllers ~ id", id)
  const findProduct = await Product.findOne({include: ProductImage, where: {id}, raw: true })
  const product_id = findProduct['ProductImages.product_id']
   const findImageForProduct = await ProductImage.findAll({ where: {product_id}, raw: true })
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
  console.log("updateProducts ~ name,price,description,type_id,brand_id", name,price,description,type_id,brand_id)
  const onePostUpdate = await Product.findOne({where: { id }})
   if(onePostUpdate){
   const newProduct = await onePostUpdate.update(
      { name: name, price: price, description: description, type_id: type_id, brand_id: brand_id, where: { id: id } })
      console.log("updateProducts ~ newProduct", newProduct)
    res.json(newProduct)
  } else {
    res.sendStatus(400);
  }
}

module.exports = { productListControllers, getOneProductForUpdate, deleteProducts, updateProducts }
