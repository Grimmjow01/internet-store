const { Product, Comment, User } = require('../../db/models');

const findcommentControllers = async (req, res) => {
  const { id } = req.params;
  console.log('======================findcommentControllers', 1);
 const findUsersComments = await User.findAll({include: Comment, where: {id}, raw: true })
   console.log("findcommentControllers ~ findUsersComments", findUsersComments)
   if(findImageForProduct){
    res.json(findImageForProduct)
  } else {
    res.sendStatus(400)
  }
  
}

module.exports = { findcommentControllers }

