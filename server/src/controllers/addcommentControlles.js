const { Product, Comment, User } = require('../../db/models');

const addcommentControlles = async (req, res) => {
  console.log('======================addcommentControlles', 1);
  const { id } = req.params
  try {
    const { user_id, content } = req.body;
    console.log("addcommentControlles ~ req.body", req.body)
    const newComment = await Comment.create({user_id, product_id: id, content });
    if(newComment) {
      res.json(newComment);
    }
  } catch (e) {
    res.status(400).json({ message: 'error' });
  }
}
const getcommentControlles = async (req, res) => {
  console.log('==================', 2);
  const { id } = req.params
  try {
    const allcommentsOneProduct = await Comment.findAll({where: { product_id: id}});
    console.log("getcommentControlles ~ allcommentsOneProduct", allcommentsOneProduct)
    if(allcommentsOneProduct) {
      const findUsersComments = await User.findAll({where: { id: allcommentsOneProduct.user_id }})
      console.log("getcommentControlles ~ findUsersComments", findUsersComments)
      res.json(findUsersComments);
    }
  } catch (e) {
    res.status(400).json({ message: 'error' });
  }
}
module.exports = { addcommentControlles, getcommentControlles}
