import { Box, Container, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import DiscountIcon from '../icons/DiscountIcon/DiscountIcon';
import AutoPlayCarousel from './AutoPlayCarousel';

function Carousel() {
  
  const products = useSelector((store) => store.products.product);

  return (
    <Box p={3} flex={5} sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }}}>
      <Stack direction="row" spacing={1} paddingBottom="20px">
        <DiscountIcon />
        <Typography gutterBottom variant="h4" component="div" fontWeight="bold">
            Товары со скидкой
        </Typography>      
      </Stack>
      <Container>
        <AutoPlayCarousel products={products} />

      </Container>
    </Box>
  )
}

export default Carousel;