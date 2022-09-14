import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import BasicRating from './BasicRating';

function ProductItem({product}) {
  // const products = useSelector((store) => store.products.product);
  
  return (
    <Card sx={{
      maxWidth: 345, minWidth: 345, marginLeft: 2, marginBottom: 2,
    }}
    >

      <CardMedia
        component="img"
        height="300"
        image="./images/example.jpg"
        alt="Kreslo"
      />
      <CardContent>

        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="flex-end">
          <Box>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h4" component="div">
              Lizard
            </Typography>
            <BasicRating />
            <Typography gutterBottom variant="h6" component="div" color="secondary" fontWeight="bold">
              {product.price} руб.
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined" color="secondary"><AddIcon /></Button>
          </Box>
        </Stack>


      </CardContent>
      <CardActions disableSpacing />
    </Card>
  );
}

export default ProductItem;
