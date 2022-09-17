import { Box, Button, Container, Stack } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/Counter/Counter';
import BasicRatingReadOnly from '../../components/ProductsSection/BasicRatingReadOnly';
import AddIcon from '@mui/icons-material/Add';
import { snackBarStatus } from '../../store/snackBar/action';
import Snackbar from '../../components/Snackbar/Snackbar'
import BasicTabs from '../../components/Tabs/Tabs';

function ProductItemPage() {
  const dispatch = useDispatch();
  
  const products = useSelector((store) => store.products); 
  let snackbarState = useSelector((store)=> store.snackbarState)

  const addToBasket = async () => {
    /* const response = await axios.post('http://localhost:3100/contacts/sendemail',
       {contactinfo : input}     
    ) */
    dispatch(snackBarStatus(true))
  }
  
  return (
    <Box sx={{p: "20px"}}>
      <Container sx={{display: "flex"}}>
        <Container sx={{display: "flex"}}>
          <Stack direction="column" spacing={2}>
            <Container>
              <img 
                src={('../images/example.jpg')} 
                alt='jhjhkjh' 
                width="500px"
                // styles={{ height: "100px"}}
              />                 
            </Container>
            <Container>
              <Stack direction="row" spacing={2} justifyContent="space-around">
                <Box>
                  <img 
                    src={('../images/example.jpg')} 
                    alt='jhjhkjh' 
                    width="150px"
                  /> 
                </Box>
                <Box>
                  <img 
                      src={('../images/example.jpg')} 
                      alt='jhjhkjh' 
                      width="150px"
                  /> 
                </Box>
                <Box>
                  <img 
                      src={('../images/example.jpg')} 
                      alt='jhjhkjh' 
                      width="150px"
                  /> 
                </Box>
              </Stack>
            </Container>
          </Stack>
        </Container>
        <Container>
          <h2>Диван с мягким изголовьем</h2>
          <Stack direction="row" spacing={2} alignItems="flex-end" margin="0 0 16px">
            <Box>
              Бренд:
            </Box>
            <h5>IKEA</h5>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" margin="0 0 16px">
            <Box>
              Рейтинг:
            </Box>
            <BasicRatingReadOnly />
            <h5>(50)</h5>
          </Stack>
          <Box margin="0 0 24px">
            <h2 style={{color: "rgb(155, 47, 174)", margin: "0 0 4px"}}>15 000 ₽</h2>
            <Box>Есть в наличии</Box>
          </Box>
        {/* <Counter /> */}
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={addToBasket}>В корзину</Button>
        <Snackbar message={'Товар добавлен в корзину!'}/>
        </Container>
      </Container>
      
      <Container>
        <BasicTabs />
      </Container>
      
    </Box>
  );
};

export default ProductItemPage;