import React, { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import CalculatorIcon from '../../components/CalculatorIcon/CalculatorIcon';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductsList from '../../components/ProductsSection/ProductsList';
import { useParams, useNavigate } from 'react-router-dom';

function SidebarItem() {
  const { id } = useParams();
  const [show, setShow] = useState(true);
  console.log('id====', id);
  return (
    <Box>
      
    <div className='heroHide'>
   <Button variant="outlined" size="large" onClick={() => setShow(prev => !prev)}>Спрятать</Button>
   </div>
   <CalculatorIcon/>
  {/* {show && <Box sx={{ display: 'flex' }}><HeroSection /> </Box>}   */}
 <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar />
   <ProductsList />
   
  </Stack>
</Box>
  )
};

export default SidebarItem;