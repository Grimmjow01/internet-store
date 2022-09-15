import React from 'react'
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItems/BasketItem'
import {Stack} from '@mui/material'
import {Button, FormControl, TextField, Box} from "@mui/material";
import './Basket.css'

function Basket() {
    
    const products = useSelector((store)=> store.products)

    console.log('Basket ==>', products.basket.map(el=>{return el.id}), 'all id')
    return (
        <>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={30}>

            <Box>
            <h1>Ваша корзина.</h1>

            {products.basket.map((el,index) => (
                 <BasketItem key ={index} el={el}></BasketItem>
                )
            )}
            </Box>
           
           
        
        <br />

        <Box>
        <FormControl >
        <span>Товары:</span>
        <br />
        <span>Скидка:</span>
        <br />
        <br />
        <h1>Общая стоимость :</h1>
        <Button variant="contained" alignItems="center" style={{maxWidth: 180 }}>
          Перейти к оплате
        </Button>
        </FormControl>
    

      
         </Box>

         </Stack>

        </>
    )
}

export default Basket