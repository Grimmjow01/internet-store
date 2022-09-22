import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';

export default function BasicRating({ product }) {
  
  const products = useSelector((store) => store.products.product);
  const productRating = products.filter(prod => prod.id === product.id);
  const [value, setValue] = useState(productRating[0]?.rating);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    > 
      <>
      <Rating name="read-only" value={value} precision={0.5} readOnly  />
      </> 
    </Box>
  );
};

