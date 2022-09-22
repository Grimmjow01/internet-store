const { Product, Comment, User } = require('../../db/models');

const addcommentControlles = async (req, res) => {
  const { id } = req.params
  console.log('======================addcommentControlles', req.params);
  try {
    const { user_id, content } = req.body;
    const newComment = await Comment.create({user_id: user_id, product_id: id, content: content });
    console.log("retrew====>" ,newComment)
    if(newComment) {
      res.json(newComment);
    }
  } catch (e) {
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
