import React from 'react';
import {CardMedia, CardContent, CardActions, Typography, Card} from '@mui/material';
import { Box, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BasicRating from './BasicRating';import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from '../../store/snackBar/action'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from "../../components/Snackbar/Snackbar";
import { useNavigate } from 'react-router-dom';

function ProductItem({ product, deleteProductHandle }) {

const { id, name, price, rating, description, type_id, brand_id, start_date, end_date, createAt, updateAt, ...ProductImages } = product
const pathImages = ProductImages['ProductImages.img']
const pathOneImage = `http://127.0.0.1:3100${pathImages}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let snackbarState = useSelector((store)=> store.snackbarState)

  const addToBasket = async () => {
    /* const response = await axios.post('http://localhost:3100/contacts/sendemail',
       {contactinfo : input}     
    ) */
    dispatch(snackBarStatus(true))
    console.log('status', snackbarState)
  }

  const isAdmin = true;
  return (
    <Card 
      className="cardItem" 
      sx={{
        maxWidth: 345, minWidth: 345, marginLeft: 2, marginBottom: 2,
      }} 
    >

      <CardMedia 
        className="cardMediaItem"
        onClick={() => navigate(`/products/${product.id}`)}
        component="img"
        // height="300"
        maxWidth="300"
        image={pathOneImage}
        alt={description}
      />
    
      <CardContent>
        <Typography className="cardTypographyItem" gutterBottom variant="h6" component="div" onClick={() => navigate(`/products/${product.id}`)}>
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
                <Button variant="contained" color="error" onClick={() => deleteProductHandle(product.id)}><ClearIcon /></Button>             
              </Stack>
              }
            {!isAdmin && 
              <Button variant="outlined" color="secondary" startIcon={<AddIcon />} onClick={addToBasket}>В корзину</Button>
              }
          </Box>
        </Stack>


      </CardContent>
      <CardActions disableSpacing />
      <Snackbar message={'Товар добавлен в корзину!'}/>
    </Card>
    
  );
}

export default ProductItem;
