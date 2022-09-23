const { Product, Comment, User } = require('../../db/models');

const addcommentControlles = async (req, res) => {
  const { id } = req.params
  console.log('======================addcommentControlles', req.params);
  try {
    const { user_id, content } = req.body;
    const newComment = await Comment.create({product_id: +id, user_id: user_id, content: content });
    if(newComment) {
      res.json(newComment);
    }
  } catch (e) {
    console.log('e========', e);
    res.status(400).json({ message: 'error' });
  }
}
const getcommentControlles = async (req, res) => {
  const { id } = req.params
    const allcommentsOneProduct = await Comment.findAll();
    console.log("getcommentControlles ~ allcommentsOneProduct", allcommentsOneProduct)
    if(allcommentsOneProduct) {
      res.json(allcommentsOneProduct);
      } else {
         res.sendStatus(401)
        
      }
    }

   
module.exports = { addcommentControlles, getcommentControlles}
