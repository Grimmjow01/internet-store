const { ProductImage } = require('../../db/models');

    const getImageForUpdate = async (req, res) => {
      console.log('==========================', 1);
      const file  = req.files;
      console.log("loadImgControllers ~ file", file)
      // const { id } = req.params
      // console.log("getImageForUpdate ~ id", id)
      
       const { product_id, filePath } = req.body
     
       if(filePath !== '/img/undefined'){
        const findImagesUpdateProduct = await ProductImage.findAll( {where: { product_id }, raw:true })
        console.log("getImageForUpdate ~ findImagesUpdateProduct", findImagesUpdateProduct)


        //  const newArrayImage = await ProductImage.create({product_id, img: `/img/${filePath}`})
        //  await newArrayImage.save();
         res.sendStatus(200)
       } 
       
              
       else {
         res.sendStatus(400)
         }
       }


       module.exports = {  getImageForUpdate }
