import React, {useState} from 'react';
import {CardMedia, CardContent, CardActions, Typography, Card, Snackbar} from '@mui/material';
import { Box, Button, Stack } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import AddIcon from '@mui/icons-material/Add';
import BasicRating from './BasicRating';
import { useDispatch, useSelector } from 'react-redux';
import { snackBarStatus } from '../../store/snackBar/action'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { addToBasketHandler } from '../../store/products/action';
import DiscountIconAllProducts from '../icons/DiscountIcon/DiscountIconAllProducts';

function ProductItem({ product, deleteProductHandle, setAuth }) {


const { id, name, price, rating, description, type_id, brand_id, start_date, end_date, createAt, updateAt, ...ProductImages } = product
const pathImages = ProductImages['ProductImages.img']
const pathOneImage = `https://mebel-tochka.herokuapp.com${pathImages}`;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let snackbarState = useSelector((store)=> store.snackbarState);
  /* const setAuth = useSelector((store) => store.auth.setAuth); */

  const addToBasket = async () => {
    /* const response = await axios.post('http://localhost:3100/contacts/sendemail',
       {contactinfo : input}     
    ) */

     dispatch(snackBarStatus(true))

  }




  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log("1111", product)
    dispatch(addToBasketHandler(product))

  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Card 
      className="cardItem" 
      sx={{
        maxWidth: 345, minWidth: 345, marginLeft: 2, marginBottom: 4,
      }} 
    >

      <CardMedia 
        className="cardMediaItem"
        onClick={() => navigate(`/products/${product.id}`)}
        component="img"
        height="200"
        maxWidth="300"
        image={pathOneImage}
        alt={description}
      />
    
      <CardContent sx={{padding: "16px 16px 0px 16px"}}>
        <Typography className="cardTypographyItem" gutterBottom variant="h6" component="div" onClick={() => navigate(`/products/${product.id}`)}>
          {product.name}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="flex-end">
          <Box>
            
            {/* <Typography gutterBottom variant="h4" component="div">
              Lizard
            </Typography> */}
            <BasicRating product={product} />
            {type_id == 1 ?  <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight="bold">
             <DiscountIconAllProducts /> {product.price * 0.90} ₽
            </Typography>
            :
            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight="bold">
              {product.price} ₽
            </Typography>
            }
          </Box>
          <Box>
            {setAuth &&            
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary" onClick={() => navigate(`/api/products/${product.id}`)}><EditIcon /></Button>
                <Button variant="contained" color="error" onClick={() => deleteProductHandle(product.id)}><ClearIcon /></Button>             
              </Stack>
              }
            {!setAuth && 
              <Button variant="outlined" color="secondary" startIcon={<AddIcon />} onClick={handleClick}>В корзину</Button>
              }
          </Box>
        </Stack>
      </CardContent>
      <CardActions disableSpacing />

      <Snackbar className='snackBar' open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Товар добавлен в корзину!
      </Alert>
      </Snackbar>
    </Card>
    
  );
}

export default ProductItem;
