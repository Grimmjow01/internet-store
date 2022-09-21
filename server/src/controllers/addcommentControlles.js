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
