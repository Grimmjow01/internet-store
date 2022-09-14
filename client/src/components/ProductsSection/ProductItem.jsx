import React from 'react';
import {CardMedia, CardContent, CardActions, Typography, Card} from '@mui/material';
import { Box, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BasicRating from './BasicRating';import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from '../../store/snackBar/action'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

function ProductItem({product}) {

  const dispatch = useDispatch();

  let snackbarState = useSelector((store)=> store.snackbarState)

  const addItemToBasket = async () => {
    /* const response = await axios.post('http://localhost:3100/contacts/sendemail',
       {contactinfo : input}     
    ) */
    dispatch(snackBarStatus(true))
    console.log('status', snackbarState)
  }
  
  const isAdmin = false;

  return (
    <Card sx={{
      maxWidth: 345, minWidth: 345, marginLeft: 2, marginBottom: 2,
    }}
    >

      <CardMedia
        component="img"
        // height="300"
        maxWidth="300"
        image="./images/example.jpg"
        alt="Kreslo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="flex-end">
          <Box>
            
            {/* <Typography gutterBottom variant="h4" component="div">
              Lizard
            </Typography> */}
            <BasicRating />
            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight="bold">
              {product.price} руб.
            </Typography>
          </Box>
          <Box>
            {isAdmin &&            
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary"><EditIcon /></Button>
                <Button variant="contained" color="error"><ClearIcon /></Button>             
              </Stack>
              }
            {!isAdmin && 
              <Button variant="outlined" color="secondary" startIcon={<AddIcon />}>В корзину</Button>
              }
          </Box>
        </Stack>


      </CardContent>
      <CardActions disableSpacing />
    </Card>
  );
}

export default ProductItem;
