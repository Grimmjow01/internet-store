const { ProductImage } = require('../../db/models');

const loadImgControllers = async (req, res) => {
 const file  = req.files;
 
  const { product_id, filePath } = req.body
  if(filePath){
    const newArrayImage = await ProductImage.create({product_id, img: `/img/${filePath}`})
    await newArrayImage.save();
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
    }
  }

  const loadAllImgControllers = async (req, res) => {
    const allImages = await ProductImage.findAll()
    res.json(allImages)
  }


module.exports = { loadImgControllers, loadAllImgControllers }
