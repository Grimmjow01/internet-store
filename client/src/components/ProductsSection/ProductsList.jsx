import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductsList() {
  const products = useSelector((store) => store.products)
  console.log("ProductsList ~ products", products)
  

  return (
    <Box bgcolor="lightblue" flex={3} p={3}>
      <div>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}
        >
          <ProductItem sx={{ marginLeft: 2 }} />
          <ProductItem sx={{ marginLeft: 2 }} />
          <ProductItem sx={{ marginLeft: 2 }} />
          <ProductItem sx={{ marginLeft: 2 }} />
          <ProductItem sx={{ marginLeft: 2 }} />

        </Stack>
      </div>
    </Box>
  );
}

export default ProductsList;
