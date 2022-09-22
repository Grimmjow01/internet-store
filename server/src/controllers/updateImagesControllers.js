const { ProductImage } = require('../../db/models');

    const getImageForUpdate = async (req, res) => {
      const file  = req.files;
      const { product_id, filePath } = req.body
     
       if(filePath !== '/img/undefined'){
        const findImagesUpdateProduct = await ProductImage.findAll( {where: { product_id }, raw:true })

        //  const newArrayImage = await ProductImage.create({product_id, img: `/img/${filePath}`})
        //  await newArrayImage.save();
         res.sendStatus(200)
       } 
       
              
       else {
         res.sendStatus(400)
         }
       }


       module.exports = {  getImageForUpdate }
