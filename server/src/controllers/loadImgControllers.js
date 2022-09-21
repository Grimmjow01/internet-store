const { ProductImage } = require('../../db/models');

const loadImgControllers = async (req, res) => {
 const file  = req.files;
 console.log("loadImgControllers ~ file", file)

 console.log("loadImgControllers ~ req.body", req.body)
  const { product_id, filePath } = req.body

  if(filePath !== '/img/undefined'){
    const newArrayImage = await ProductImage.create({product_id, img: `/img/${filePath}`})
    await newArrayImage.save();
    res.json(newArrayImage)
  } else {
    res.sendStatus(400)
    }
  }

  const loadAllImgControllers = async (req, res) => {
    const allImages = await ProductImage.findAll()
    res.json(allImages)
  }


module.exports = { loadImgControllers, loadAllImgControllers }
