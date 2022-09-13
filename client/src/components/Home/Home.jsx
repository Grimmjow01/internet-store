import { Box, Stack } from '@mui/material';
import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ProductsList from '../ProductsSection/ProductsList';
import Sidebar from '../Sidebar/Sidebar';

function Home() {
  return (
    <Box>
      <HeroSection />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <ProductsList />
      </Stack>
    </Box>
  );
}

export default Home;
