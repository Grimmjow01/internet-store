import React from 'react'
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItems/BasketItem'
import {Stack} from '@mui/material'
import {Button, FormControl, TextField, Box} from "@mui/material";
import './Basket.css'

function Basket() {
    
    const products = useSelector((store)=> store.products)

 

    return (
        <>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={30}>

            <Box>
            <h1>Ваша корзина:</h1>

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
        {products.basket.length ? <div></div>
       
         : <Button variant="contained" alignItems="center" style={{maxWidth: 180 }} >
        Оформить заказ
        </Button>}

      
         </Box>

         </Stack>

        </>
    )
}

export default Basket