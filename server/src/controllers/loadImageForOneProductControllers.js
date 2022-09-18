const { Product, ProductImage } = require('../../db/models');

const loadImageForOneProductControllers = async (req, res) => {
  const { id } = req.params;
   const findImageForProduct = await Product.findOne({ where: { id } })
   if(findImageForProduct){
    res.json(findImageForProduct)
  } else {
    res.sendStatus(400)
  }
}

const deleteImageForOneProductControllers = async (req, res) => {
  const { image_id } = req.body;
  const findImageForProduct = await ProductImage.findOne({ where: { id: image_id }, raw: true })
  if(findImageForProduct){
  await ProductImage.destroy({where: { id: image_id }})
  res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
}


module.exports = { loadImageForOneProductControllers, deleteImageForOneProductControllers }

