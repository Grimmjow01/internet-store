import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItems/BasketItem'
import {Stack} from '@mui/material'
import {Button, FormControl, TextField, Box, Dialog} from "@mui/material";
import './Basket.css'
import { useNavigate } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';


function Basket() {
    
    const products = useSelector((store)=> store.products)
    const setAuth = useSelector((store) => store.auth.setAuth);
    const [open, setOpen] = useState(false);


    const handleOrder = () => {
         if(setAuth){
            window.location.href = 'https://pay.yandex.ru/business'
         } else {
            setOpen(true);
         }
    };

    // const handClickOpen = () => {
    //     setOpen(true);
    //   };
    
      const dialogHandleClosen = () => {
        setOpen(false);
      };
    
    let discount = 0;
    for (let i = 0; i < products.basket.length; i++) {
       if(products.basket[i].type_id == 1){
        discount += products.basket[i].price * 0.1
       }
      console.log("for", products.basket[i].type_id)
  
    }
     

    console.log("Discount -----", discount)

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

            {products.basket.map((product) => (
                 <BasketItem key ={product.id} product={product} />
                )
            )}
            </Box>
        
        <br />
        {products.basket !==0 ?        
        <Box className='paymentBox'>
        <span><h3>Добавленные товары:</h3> {products.basket.map(el=>{return el.name + `, `} )}</span>
        <br />
        <br />
        <span id='discount-text'><h3>Скидка: { discount}  руб.</h3></span>
        <h4 id='total-price'>Общая стоимость : {products.basket.reduce((acc, val) => acc + val.price, 0)} руб.</h4>
        <h3>Итоговая стоимость : {products.basket.reduce((acc, val) => acc + val.price, 0) - discount} руб.</h3>
       <Button variant="contained" color="secondary" alignItems="center" style={{maxWidth: 180 }} onClick={handleOrder}>
        Оформить заказ
        </Button>
        <Dialog open={open} onClose={dialogHandleClosen} aria-labelledby="form-dialog-title">
                <Auth dialogHandleClosen={dialogHandleClosen}/>
              </Dialog>

         </Box>
          : <h1>Пуста</h1>}
         </Stack>

        </Box>
    )
}

export default Basket