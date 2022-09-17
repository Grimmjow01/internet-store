const { Product, ProductImage } = require('../../db/models');

const productListControllers = async (req, res) => {
  const allProducts = await Product.findAll({include: ProductImage, raw: true })
  console.log("productListControllers ~ allProducts", allProducts)

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
