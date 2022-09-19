const { Product, ProductImage } = require('../../db/models');

const loadImageForOneProductControllers = async (req, res) => {
  const { id } = req.params;
   const findImageForProduct = await ProductImage.findAll({ where: { product_id: id }, raw: true})
   if(findImageForProduct){
    res.json(findImageForProduct)
  } else {
    res.sendStatus(400)
  }
}

const deleteImageForOneProductControllers = async (req, res) => {
  const { id: imageId } = req.body;
  const findImageForProduct = await ProductImage.findOne({ where: { id: imageId }, raw: true })
  if(findImageForProduct){
  await ProductImage.destroy({where: { id: imageId }})
  res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
}


module.exports = { loadImageForOneProductControllers, deleteImageForOneProductControllers }

