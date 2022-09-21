import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsList from '../../components/ProductsSection/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';

import { addImagesProductAction, getAllProduct } from '../../store/products/action';

import {  allRatingThunk } from '../../store/products/action';

import { useSelector } from 'react-redux';
import ChatIcon from '../../components/ChatIcon/ChatIcon';
import './Home.css'
import Carousel from '../../components/Carousel/Carousel';
import CalculatorIcon from '../../components/CalculatorIcon/CalculatorIcon';

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
      console.log('products=====', products);
      dispatch(getAllProduct(products));
    })();

    dispatch(allRatingThunk());
      }, [dispatch]);

  const [show, setShow] = useState(true);

  const products = useSelector((store) => store.products);
  
  
  return (
    <Box sx={{ backgroundColor: "#EAF0F6" }}>
        <div className='heroHide'>
          <Button variant="outlined" size="large" onClick={() => setShow(prev => !prev)}>Спрятать</Button>
        </div>
        <CalculatorIcon />
      {/* {show && <Box sx={{ display: 'flex' }}><HeroSection /> </Box>}  */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar flex={2} />
        <Box flex={6}>
          <Carousel products={products} />
          <ProductsList products={products} />
        </Box>
       </Stack>
    </Box>
  );
}

export default Home;
