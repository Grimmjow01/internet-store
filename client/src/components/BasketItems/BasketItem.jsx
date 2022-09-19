import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Card, CardContent, Typography, CardActions, Button, TextField, CardMedia} from '@mui/material'
import './BasketItem.css'
import {changeQuantity} from '../../store/products/action'

function BasketItem({product}) {

    const { id, name, price, rating, description, type_id, brand_id, start_date, end_date, createAt, updateAt, ...ProductImages } = product
    const pathImages = ProductImages['ProductImages.img']
    const pathOneImage = `http://127.0.0.1:3100${pathImages}`;

    const dispatch = useDispatch()
    const products = useSelector((store)=> store.products)
    

    const deleteHandler = () => {
        
        products.basket = products.basket.filter(item=>item.id !== id)

        dispatch(changeQuantity(products.basket))

        let items = JSON.parse(localStorage.getItem("basketItems")); 
        for (let i =0; i< items.length; i++) {
            

            let item = items[i];

            console.log("items", item)
            console.log("itemid", item)
            if (item.id == id) {
                
                items.splice(i, 1);
            }
        }
        items = JSON.stringify(items);
        localStorage.setItem("basketItems", items);
    }
    return (
        <>

            <Card className = 'Card' >
                <CardContent className='Card'>
                    <div >
                        <Typography variant="h5" component="div" className='basket-card-info'>
                            {product.name}
                            <CardMedia
                             component="img"
                            height="110"
                             maxWidth="100"
                             image={pathOneImage}
                            alt={product.name}
                             />
                        </Typography>
                    </div>
                    <div className="MuiInput-root">
                        {/*<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min:'1', max:'15' }} onChange={quantityHandler}  className = 'inputQuantity' id="standard-basic" type='number' label="количество" variant="standard" />*/}
                        
                    </div>
                    <div variant="h6" component="div">
                        <b>{product.description}</b>
                    </div>
                    <div variant="h6" component="div">
                        <b>{product.price} руб.</b>
                    </div>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteHandler} size="small" variant="outlined" color="error"><h3>Удалить</h3></Button>
                </CardActions>
            </Card>

        </>
    )
}

export default BasketItem