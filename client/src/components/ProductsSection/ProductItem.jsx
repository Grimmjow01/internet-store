import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BasicRating from './BasicRating';
import { useSelector } from 'react-redux';

function ProductItem() {
  const products = useSelector((store) => store.products.product)
  return (
    <Card sx={{
      maxWidth: 345, minWidth: 345, marginLeft: 2, marginBottom: 2,
    }}
    >

      <CardMedia
        component="img"
        height="194"
        image="./img/kreslo-flame-velutto-56_1.jpeg"
        alt="Kreslo"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Кресло {/* {products.name} */}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          Lizard {/* {products.rating} */}
        </Typography>
        <BasicRating />
        <Typography gutterBottom variant="h6" component="div">
          10 500 Руб. {/* {product.price}  */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained">В корзину</Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
