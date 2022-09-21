import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductHandler } from '../../store/products/action';
import ProductItem from './ProductItem';
import './ProductsList.css';

const functionOriginalId = (prod, idTypes) => {
  const originalId = {}
  const typeProdac = prod.filter((prods) => prods.type_id === +idTypes); 
  typeProdac.map((prod) => originalId[prod.id] = prod );
  return Object.values(originalId);
};

function ProductsTypes({setAuth, idTypes}) {

  const typesData = useSelector((store) => store.products.types);
  const nameTypesData = typesData.filter((prods) => prods.id === +idTypes);

  const productsSearch = useSelector((store) => store.products.searchProduct);
  const products = useSelector((store) => store.products);
  const { product } = products
  const [funcProdac, setFuncProdac] = useState([]);

  console.log('funcProdac', funcProdac);

  useEffect(() => {
    setFuncProdac(functionOriginalId(product, idTypes));
  }, [idTypes]);

  const dispatch = useDispatch();

  const deleteProductHandle = (id) => {
    dispatch(deleteProductHandler(id))
  };

  
   return (
    <Box flex={5} p={3}>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          {nameTypesData[0].name}
        </Typography>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}
          justifyContent="space-around"
        >
          {!products.product?.length  
          ? <p>Загрузка товаров...</p>
          : funcProdac.filter((prod) => prod.name.toLowerCase().includes(productsSearch.toLowerCase()))
          ?.map((product) => (
            <ProductItem
              product={product} 
              sx={{ marginLeft: 2 }} 
              key={product.id}
              deleteProductHandle={deleteProductHandle}
          />
          ))}
        </Stack>
       </div>
    </Box>
  );
}

export default ProductsTypes;
