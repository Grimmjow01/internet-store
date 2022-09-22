import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import CalculatorIcon from '../../components/CalculatorIcon/CalculatorIcon';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductsTypes from '../../components/ProductsSection/ProductsTypes';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SidebarItem.css'
import HeroSection from '../HeroSection/HeroSection';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

function SidebarItem() {
  const { id } = useParams();
  const [show, setShow] = useState(true);

  const setAuth = useSelector((store) => store.auth.setAuth);

  return (
    <Box sx={{ backgroundColor: "#EAF0F6" }}>
    
    {/* {show && <Box sx={{ display: 'flex' }}><HeroSection /> </Box>}   
        <div className='heroHide'>
          <Button variant="outlined" size="large" onClick={() => setShow(prev => !prev)}><UnfoldMoreIcon/></Button>
        </div> */}
 <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar />
   <ProductsTypes setAuth={setAuth} idTypes={id} />
  </Stack>
</Box>
  )
};

export default SidebarItem;