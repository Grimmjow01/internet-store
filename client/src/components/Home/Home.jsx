import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ProductsList from '../ProductsSection/ProductsList';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../../store/products/action';
import { useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
useEffect(() => {
  ( async () => {
    const res = await fetch('http://localhost:3100/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const products = await res.json();
    dispatch(getAllProduct(products))
   })()
}, []);
const products = useSelector((store) => store.products)
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <ProductsList products={products} />
       </Stack>
    </Box>
  );
}

export default Home;
