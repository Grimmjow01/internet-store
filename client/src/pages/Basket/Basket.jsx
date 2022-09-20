import React from 'react'
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItems/BasketItem'
import {Stack} from '@mui/material'
import {Button, FormControl, TextField, Box} from "@mui/material";
import './Basket.css'
import { useNavigate } from 'react-router-dom';

function Basket() {
    
    const products = useSelector((store)=> store.products)
    const setAuth = useSelector((store) => store.auth.setAuth);


    const handleOrder = () => {
         if(setAuth){
            window.location.href = 'https://pay.yandex.ru/business'
         } else {

         }
    }
    

    return (
        <Box sx={{p: "20px"}}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                sx={{display: {xs: "block", sm: "block", md: "flex"}}}
                >

            <Box>
            <h1>Ваша корзина:</h1>
             {console.log("products.basket", products.basket)}
            {products.basket.map((product) => (
                 <BasketItem key ={product.id} product={product} />
                )
            )}
            </Box>
        
        <br />

        <Box className='paymentBox'>
        <span><h2>Счет:</h2></span>
        <span><h3>Добавленные товары:</h3> {products.basket.map(el=>{return el.name + `, `} )}</span>
        <br />
        <br />
        <span><h3>Скидка: 0 руб.</h3></span>
        <br />
        <h3>Общая стоимость : {products.basket.reduce((acc, val) => acc + val.price, 0)} руб.</h3>
       <Button variant="contained" color="secondary" alignItems="center" style={{maxWidth: 180 }} onClick={handleOrder}>
        Оформить заказ
        </Button>

         </Box>

         </Stack>

        </Box>
    )
}

export default Basket