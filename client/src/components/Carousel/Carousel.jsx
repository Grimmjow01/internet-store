import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import AutoPlayCarousel from './AutoPlayCarousel';

function Carousel() {
  
  const products = useSelector((store) => store.products.product);
  // console.log('Carousel products ------>', products)
  return (
    <Box p={3} sx={{ display: { xs: "none", sm: "none", md: "block" }}}>
      <Typography gutterBottom variant="h4" component="div">
          Товары со скидкой
      </Typography>
      <Container>
        <AutoPlayCarousel products={products} />

      </Container>
    </Box>
  )
}

export default Carousel;