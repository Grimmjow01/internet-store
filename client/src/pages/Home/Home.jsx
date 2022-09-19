import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsList from '../../components/ProductsSection/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { addImagesProductAction, getAllProduct } from '../../store/products/action';
import { useSelector } from 'react-redux';
import ChatIcon from '../../components/ChatIcon/ChatIcon';

function Home() { 
  const dispatch = useDispatch();
  
  useEffect(() => {
    ( async () => {
      const res = await fetch('http://localhost:3100/api/products', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const products = await res.json();
      dispatch(getAllProduct(products))
    })()
  }, [dispatch]);
  

  const products = useSelector((store) => store.products);
  
  return (
    <Box>
      {/* <HeroSection />  */}
      
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <ProductsList products={products} />
        <ChatIcon/>
       </Stack>
    </Box>
  );
}

export default Home;
