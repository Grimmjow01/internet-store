const Models = require('../../db/models');
 
const addRating = async (req, res, next) => {
    try {
        const { valueRating, user_id, product_id } = req.body;
        console.log('value===', valueRating);

        await Models.Rating.create({ user_id, product_id, rating: valueRating });
        const numUsersRating = await Models.Rating.findAll({ where: { product_id }, raw: true});
        console.log('Общее кол-во проголосовавших===', numUsersRating.length);

        const product = await Models.Product.findOne({ where: { id: product_id }, raw: true });
        console.log('Рейтинг продукта===', product.rating);

        let sumRating = Math.round(( product.rating + valueRating ) / numUsersRating.length);
        console.log('Итог вычисление===', sumRating);

        const allProducts = await Models.Product.findAll();

        const sumUsersRating= numUsersRating.map(i => x+=i.rating, x=0).reverse()[0];
        const sumAllProducts= allProducts.map(i => x+=i.rating, x=0).reverse()[0];

        let sum = (numUsersRating.length / (1 + numUsersRating.length)) * (sumUsersRating / numUsersRating.length) + (1 / (1 + numUsersRating.length)) * (sumAllProducts / allProducts.length)
        
        sum = parseFloat(sum.toFixed(2));
        console.log('sum===', sum);
        
        // await Models.Product.upsert({ id: product_id, rating: sum });

        return res.json(sum);
    } catch (error) {
        console.log(error);
    }
  };

const getRating = async (req, res, next) => {
    try {
        const numUsersRating = await Models.Rating.findAll();
        return res.json(numUsersRating);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { addRating, getRating };