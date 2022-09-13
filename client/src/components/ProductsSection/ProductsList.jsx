import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

function ProductsList() {
  const products = useSelector((store) => store.products)
  console.log("ProductsList ~ products", products)
  

  return (
    <Box bgcolor="lightblue" flex={3}><ProductItem /></Box>
  );
}

export default ProductsList;
