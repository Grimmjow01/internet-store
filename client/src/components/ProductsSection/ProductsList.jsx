import { Box, Stack } from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

function ProductsList() {
  return (
    <Box bgcolor="lightblue" flex={5} p={3}>
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
