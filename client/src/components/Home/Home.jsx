import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import ProductsList from '../ProductsSection/ProductsList';
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { getAllProduct } from '../../store/products/action';

function Home() {
useEffect(() => {
  ( async () => {
    console.log('useEffect', 11111);
    const res = await fetch('http://localhost:3100/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('useEffect', 222222);
    const data = await res.json();
    console.log("data", data)

  })()
}, []);

  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <ProductsList />
      </Stack>
    </Box>
  );
}

export default Home;
