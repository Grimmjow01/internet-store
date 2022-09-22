import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductHandler } from '../../store/products/action';
import DiscountIcon from '../icons/DiscountIcon/DiscountIcon';
import StarIcon from '../icons/StarIcon/StarIcon';
import ProductItem from './ProductItem';
import './ProductsList.css';

const functionOriginalId = (prod) => {
  const originalId = {}
  prod.map((prod) => originalId[prod.id] = prod )
  return Object.values(originalId)
};

function ProductsList({setAuth}) {
  
  const productsSearch = useSelector((store) => store.products.searchProduct);
  const products = useSelector((store) => store.products);
  const { product } = products;
  const [prodScroll, setProdScroll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  
  const funcProdac = functionOriginalId(product);
  
  
  useEffect(() => {
    if (fetching) {
      // console.log('fetching', fetching);
      let prod = funcProdac.slice(0 + currentPage, currentPage +10);
      setFetching (false);
    setProdScroll([...prodScroll, ...prod]);
    setCurrentPage(prevState => prevState + 10);
    setTotalCount(prevState => prevState + prod.length);
  };
  }, [fetching]);

  
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []); 

  useEffect(() => {
    let product =funcProdac.slice(0, 10);
    setProdScroll(product);
  }, [products]);
  
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
    && prodScroll.length <= totalCount) {
      setFetching(true);
    }
  };
  
  const dispatch = useDispatch();

  const deleteProductHandle = (id) => {
    dispatch(deleteProductHandler(id))
  };

  
   return (
    <Box flex={5} p={3}>
      <div>
        <Stack direction="row" alignItems="center" spacing={1} paddingBottom="20px">
          <StarIcon />
          <Typography gutterBottom variant="h4" component="div" fontWeight="bold">
            Популярные товары
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0}
          sx={{ flexWrap: 'wrap' }}
          justifyContent="space-around"
        >
          {!products.product?.length  
          ? <p>Загрузка товаров...</p>
          : prodScroll.filter((prod) => prod.name.toLowerCase().includes(productsSearch.toLowerCase()))
          ?.map((product) => (
            <ProductItem setAuth={setAuth}
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

export default ProductsList;
