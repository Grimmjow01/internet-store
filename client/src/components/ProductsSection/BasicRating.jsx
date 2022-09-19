import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function BasicRating({ product }) {
  const [value, setValue] = React.useState(product.rating);
  const setAuth = useSelector((store) => store.auth.setAuth);
  const userData = useSelector((store) => store.auth.userData);
  const allRating = useSelector((store) => store.products.allRating);

  const ratingHandler = (newValue) => {
    axios.patch(`http://localhost:3100/api/addrating`, 
    { valueRating: newValue, user_id: userData.id, product_id: product.id })
    .then((res) => console.log('res=====>',res.data));
  };

  const userRatingExamination = () => {
    const oneProductRating = allRating.filter(prod => prod.product_id === product.id);
      if (userData.id !== oneProductRating[0]?.user_id) {
        return true
      } else {
        return false;
      };
  };

  let userRating = userRatingExamination();

  useEffect(() => {
    userRatingExamination()
  }, [value]);

  console.log('value====>', value);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {setAuth && userRating ?
      <>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          ratingHandler(newValue);
        }}
      />
      </>
      :
      <>
      <Rating name="read-only" value={value} readOnly />
      </>
      }
    </Box>
  );
}
