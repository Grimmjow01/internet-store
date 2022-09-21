'use strict'

const Models = require('../../db/models');
 
const addRating = async (req, res) => {
    try {
        const { valueRating, user_id, product_id } = req.body;

        await Models.Rating.create({ user_id, product_id, rating: valueRating });
        const numUsersRating = await Models.Rating.findAll({ where: { product_id }, raw: true});
        const allProducts = await Models.Product.findAll();

        const sumUsersRating = numUsersRating.reduce((acc, val) => acc + Number(val.rating), 0);
        const sumAllProducts = allProducts.reduce((acc, val) => acc + Number(val.rating), 0);
        
        let sum = (numUsersRating.length / (1 + numUsersRating.length)) * (sumUsersRating / numUsersRating.length) + (1 / (1 + numUsersRating.length)) * (sumAllProducts / allProducts.length);        
        sum = parseFloat(sum.toFixed(2));

        await Models.Product.upsert({ id: product_id, rating: sum });

        return res.json(sum);
    } catch (error) {
        console.log(error);
    };
  };

const getRating = async (req, res) => {
    try {
        const numUsersRating = await Models.Rating.findAll();
        return res.json(numUsersRating);
    } catch (error) {
        console.log(error);
    };
};

module.exports = { addRating, getRating };