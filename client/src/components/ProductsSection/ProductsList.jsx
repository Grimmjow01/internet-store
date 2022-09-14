import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductsList() {

  const products = useSelector((store) => store.products)
  console.log('products', products)

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
            <ProductItem product={product} sx={{ marginLeft: 2 }} 
            key={product.id}
            // {console.log('product', product)}
          />
          ))}
        </Stack>
      </div>
    </Box>
  );
}

export default ProductsList;
