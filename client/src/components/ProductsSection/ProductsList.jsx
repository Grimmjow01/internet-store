import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductHandler } from '../../store/products/action';
import ProductItem from './ProductItem';
import './ProductsList.css';

function ProductsList() {

  const products = useSelector((store) => store.products);
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
        >
          {!products.product?.length  
          ? <p>Товары закончились</p>
          : products.product.map((product) => (
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
