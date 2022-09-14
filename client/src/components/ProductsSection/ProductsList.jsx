import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductsList() {

  const products = useSelector((store) => store.products)

    return (
    <Box bgcolor="lightblue" flex={5} p={3}>

      <div>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}
        >
          {!products.product?.length  
          ? <p>Товары закончились</p>
          : products.product.map((product) => (
            <ProductItem sx={{ marginLeft: 2 }} 
            key={product.id}
          />
          ))}
        </Stack>
      </div>
    </Box>
  );
}

export default ProductsList;
