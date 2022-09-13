import { Box } from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

function ProductsList() {
  return (
    <Box bgcolor="lightblue" flex={3}><ProductItem /></Box>
  );
}

export default ProductsList;
