import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductHandler } from '../../store/products/action';
import ProductItem from './ProductItem';
import './ProductsList.css';

function ProductsList() {
  
  const productsSearch = useSelector((store) => store.products.searchProduct);
  const products = useSelector((store) => store.products);
  const { product } = products
  console.log("ProductsList ~ product", product.length);

  const sdkfj = () => {
    const originalId = {}

     product.map((prod) => originalId[prod.id] = prod )
     return Object.values(originalId)
  }
  const data = sdkfj();

  const filteredOriginalId = () => product.filter((el) => el.id !== product.id)

  
  const dispatch = useDispatch();

  const deleteProductHandle = (id) => {
    dispatch(deleteProductHandler(id))
  };

    return (
    <Box flex={5} p={3}>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          Популярные товары
        </Typography>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}
          justifyContent="space-around"
        >
          {!products.product?.length  
          ? <p>Товары закончились</p>
          : data.filter((prod) => prod.name.toLowerCase().includes(productsSearch.toLowerCase()))
          .map((product) => (
            <ProductItem 
              product={product} 
              sx={{ marginLeft: 2 }} 
              key={product.id}
              deleteProductHandle={deleteProductHandle}
          />
          ))}
        </Stack>
       </div>
    </Box>
  );
}

export default ProductsList;
