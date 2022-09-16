const { ProductImage } = require('../../db/models');

const loadImgControllers = async (req, res) => {
 const file  = req.files;
 
  const { product_id, filePath } = req.body

  // for (let i = 0; i < file.length; i++) {
  const file2 = req.file ? `/img/${file[i]}` : '';
    //  console.log("loadImgControllers ~ req.fil2e222222222222", file2)
     const newArrayImage = await ProductImage.create({product_id, img: filePath})
     await newArrayImage.save();
    // console.log("loadImgControllers ~ newArrayImage", newArrayImage)
    res.sendStatus(200)/* .json(newArrayImage); */
    // }
}



module.exports = { loadImgControllers }
