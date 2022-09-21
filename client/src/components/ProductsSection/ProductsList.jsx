import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductHandler } from '../../store/products/action';
import ProductItem from './ProductItem';
import './ProductsList.css';

function ProductsList() {
  
  const productsSearch = useSelector((store) => store.products.searchProduct);
  const products = useSelector((store) => store.products);

  const [prodScroll, setProdScroll] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  
  const { product } = products
//   const functionOriginalId = () => {
//    const originalId = {}
//    product.map((prod) => originalId[prod.id] = prod )
//    return Object.values(originalId)
//  };

//  const funcProdac = functionOriginalId();
//  console.log('funcProdac===', funcProdac);
//  console.log('product===', product);
  
  useEffect(() => {
    if (fetching) {
      console.log('fetching', fetching);
      let prod = product.slice(0 + currentPage, currentPage +10);
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
    let product = products.product.slice(0, 10);
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

  // console.log("ProductsList ~ products", products)

  
   return (
    <Box flex={5} p={3}>
      <div>
        <Typography gutterBottom variant="h4" component="div">
          Популярные товары
        </Typography>
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

export default ProductsList;
