import React, {useState} from 'react';
import {CardMedia, CardContent, CardActions, Typography, Card, Snackbar} from '@mui/material';
import { Box, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CarouselItem({ product }) {

  const { id, name, price, rating, description, type_id, brand_id, start_date, end_date, createAt, updateAt, ...ProductImages } = product
  const pathImages = ProductImages['ProductImages.img']
  const pathOneImage = `http://127.0.0.1:3100${pathImages}`
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  // console.log('CarouselItem product ------>', product.type_id)
  
  return (
    <Card 
      className="cardItem" 
      sx={{
        maxWidth: 250, minWidth: 250, marginLeft: 2, marginBottom: 2,
      }} 
    >

      <CardMedia 
        className="cardMediaItem"
        onClick={() => navigate(`/products/${product.id}`)}
        component="img"
        height="150"
        maxWidth="200"
        image={pathOneImage}
        alt={description}
      />
    
      <CardContent sx={{padding: "16px 16px 0px 16px"}}>
        <Typography className="cardTypographyItem" gutterBottom variant="h6" component="div" sx={{margin: "0px 0px 0px"}} onClick={() => navigate(`/products/${product.id}`)}>
          {product.name}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box>
            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight="bold">
              {product.price - (product.price * 0.100)} ₽
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h7" component="div" sx={{textDecoration: "line-through"}}>
              {product.price} ₽
            </Typography>
          </Box>
          
        </Stack>
      </CardContent>
      <CardActions sx={{padding: "0px"}} disableSpacing />
    </Card>
    
  );
}

export default CarouselItem;
