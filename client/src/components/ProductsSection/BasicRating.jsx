import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { changeRating } from '../../store/products/action';

export default function BasicRating({ product }) {
  const products = useSelector((store) => store.products.product);
  const productRating = products.filter(prod => prod.id === product.id);
  const setAuth = useSelector((store) => store.auth.setAuth);
  const userData = useSelector((store) => store.auth.userData);
  const allRating = useSelector((store) => store.products.allRating);
  const dispatch = useDispatch();
  
  const userRatingExamination = () => {
    const oneProductRating = allRating.filter(prod => prod.product_id === productRating[0]?.id);
      if (userData.id !== oneProductRating[0]?.user_id) {
        return true
      } else {
        return false;
      };
  };

  const [userRating, setUserRating] = useState(userRatingExamination());

  const [value, setValue] = React.useState(productRating[0]?.rating);

  const ratingHandler = (newValue) => {
    axios.patch(`http://localhost:3100/api/addrating`, 
    { valueRating: newValue, user_id: userData.id, product_id: product.id });
    dispatch(changeRating(product.id, newValue));
    setUserRating(false)
  };

   
useEffect(() => {
  }, [userRating]);

  

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {setAuth && userRating ?
      <>
      <Rating

        name="half-rating"
        value={value || 0}
        precision={0.5}

        onChange={(event, newValue) => {
          setValue(newValue);
          ratingHandler(newValue);
        }}
      />
      </>
      :
      <>
      <Rating name="read-only" value={value} precision={0.5} readOnly  />
      {/* <p> HELLO</p> */}
      </>
      }
    </Box>
  );
};

