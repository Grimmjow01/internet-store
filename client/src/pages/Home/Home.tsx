import { Box, Button, Stack } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
// import HeroSection from '../../components/HeroSection/HeroSection';
import ProductsList from '../../components/ProductsSection/ProductsList';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { addImagesProductAction, getAllProduct } from '../../store/products/action';
import {  allRatingThunk, getAllTypes } from '../../store/products/action';
import { useSelector } from 'react-redux';
import ChatIcon from '../../components/ChatIcon/ChatIcon';
import './Home.css'
import Carousel from '../../components/Carousel/Carousel';
import CalculatorIcon from '../../components/CalculatorIcon/CalculatorIcon';
import HeroSection from '../../components/HeroSection/HeroSection';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import HeroSectionImage from '../../components/HeroSectionImage/HeroSectionImage';

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
      dispatch(getAllProduct(products));
    })();

    ( async () => {
      const res = await fetch('http://localhost:3100/api/types', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const types = await res.json();
      dispatch(getAllTypes(types));
    })();

    dispatch(allRatingThunk());
      }, [dispatch]);

  const [show, setShow] = useState(true);

  const products = useSelector((store : {}) => store.products);
  
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});

  return (
    <Box className="home-container" sx={{ backgroundColor: "#EAF0F6" }}>
       

{/*         <CalculatorIcon/> */}
         {/* {show && <Box sx={{ display: 'flex' }}><HeroSection /> </Box>}    
        <div className='heroHide'>
          <Button variant="outlined" size="large" onClick={() => setShow(prev => !prev)}><UnfoldMoreIcon/></Button>
        </div>  */}
      <HeroSectionImage executeScroll={executeScroll} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar flex={2} />
        <Box flex={6} ref={myRef}>
          <Carousel products={products} />
          <ProductsList products={products} />
        </Box>
       </Stack>
    </Box>
  );
}

export default Home;
