const { ProductImage } = require('../../db/models');

const loadImgControllers = async (req, res) => {
 
  const { product_id } = req.body
  const file = req.file ? `/img/${req.file.originalname}` : '';
  
  const newArrayImage = await ProductImage.create({product_id, img: file})
  await newArrayImage.save();
  res.sendStatus(200)
}



module.exports = { loadImgControllers }
