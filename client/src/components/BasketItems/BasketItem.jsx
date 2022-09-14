import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Card, CardContent, Typography, CardActions, Button, TextField, CardMedia} from '@mui/material'
import './BasketItem.css'
import {changeQuantity} from '../../store/products/action'

function BasketItem({el}) {

    const dispatch = useDispatch()
    let basket = useSelector((store)=> store.basket)

    const deleteHandler = () => {
        basket = basket.filter(item=>item.id !== el.id)
        dispatch(changeQuantity(basket))
    }
    return (
        <>

            <Card className = 'Card' >
                <CardContent className='Card'>
                    <div>
                        <Typography variant="h5" component="div">
                            Название
                            <CardMedia
                             component="img"
                            height="100"
                             maxWidth="100"
                             image="./images/example.jpg"
                            alt="Kreslo"
                             />
                        </Typography>
                    </div>
                    <div className="MuiInput-root">
                        {/*<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min:'1', max:'15' }} onChange={quantityHandler}  className = 'inputQuantity' id="standard-basic" type='number' label="количество" variant="standard" />*/}
                        
                    </div>
                    <div variant="h6" component="div">
                        3000 руб.
                    </div>
                </CardContent>
                <CardActions>
                    <Button onClick={deleteHandler} size="small">Удалить</Button>
                </CardActions>
            </Card>

        </>
    )
}

export default BasketItem