import { Box, Stack } from '@mui/material';
import React from 'react';
import ProductsList from '../ProductsSection/ProductsList';
import Sidebar from '../Sidebar/Sidebar';

function Home() {
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
