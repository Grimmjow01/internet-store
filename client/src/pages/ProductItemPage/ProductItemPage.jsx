import { Box, Button, Container, Modal, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BasicRatingReadOnly from '../../components/ProductsSection/BasicRatingReadOnly';
import BasicRating from '../../components/ProductsSection/BasicRating';
import AddIcon from '@mui/icons-material/Add';
import { snackBarStatus } from '../../store/snackBar/action';
import Snackbar from '../../components/Snackbar/Snackbar'
import BasicTabs from '../../components/Tabs/Tabs';
import { useParams } from 'react-router-dom';
import { addImagesProductAction, addToBasketHandler, allRatingThunk, getAllProduct, getOneProduct } from '../../store/products/action';
import './ProductItemPage.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
};

function ProductItemPage() {
  const [item, setItem] = useState([])
  const [fullItem, setFullItem] = useState([])
  const [arrayImage, setArrayImage] = useState('')
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const dispatch = useDispatch();
  
  
  const { id } = useParams();
  
  const products = useSelector((store) => store.products.product); 
  let snackbarState = useSelector((store) => store.snackbarState);
  const productImage = useSelector((store) => store.products.productImages)
  
  console.log("all Rating", )
  
  const allRating = useSelector((store) => store.products.allRating)
  
  const ratingForProduct = allRating.filter((el) => el.product_id === +id);

  const [ratingChange, setRating] = useState(ratingForProduct.length);
  const [ratingChange2, setRatingChange] = useState(ratingChange);


  const { name, price, rating, description, type_id, brand_id, start_date, end_date, createAt, updateAt, ...ProductImages } = item
  const pathImages = ProductImages['ProductImages.img']
  const pathOneImage = `https://mebel-tochka.herokuapp.com/${productImage[0]?.img}`;
  
  // useEffect(() => {
    //   ( async () => {
      //     const res = await fetch('http://localhost:3100/api/products', {
        //       method: 'GET',
        //       credentials: 'include',
        //       headers: {
          //         'Content-Type': 'application/json',
          //       },
          //     });
          //     const products = await res.json();
          //     dispatch(getAllProduct(products))
          //   })();
          
          //   dispatch(allRatingThunk());
          
          // }, [dispatch]);
          
          
          useEffect(() => {
            ( async () => {
              const res = await fetch(`https://mebel-tochka.herokuapp.com/api/products/${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
          'Content-Type': 'application/json',
        },
      });
      const itemProduct = await res.json();
      setFullItem(itemProduct);
      const [ item ] = itemProduct;
      const [, arrayImagesForOneProduct] = itemProduct;
      setItem(item);
      setArrayImage(arrayImagesForOneProduct);
      
      dispatch(addImagesProductAction(arrayImagesForOneProduct));
      
    })()
  }, [id]);
  
  const handleClick = () => {
    // setOpen(true);
    dispatch(addToBasketHandler(fullItem));
    dispatch(snackBarStatus(true));
  };
  
  return (
    <Box sx={{p: "20px"}}>
        <Container sx={{display: {xs: "block", sm: "block", md: "flex"}}} >
          <Container sx={{display: "flex"}}>
            <Stack direction="column" spacing={2}>
              <Container>
                <img 
                  src={pathOneImage} 
                  alt='jhjhkjh' 
                  width="500px"
                  onClick={handleOpen}
                  // styles={{ height: "100px"}}
                />
                
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                    
                  <Box sx={style}>
                    <img 
                      src={pathOneImage} 
                      alt='jhjhkjh' 
                      // width="500px"
                      onClick={handleOpen}
                      // styles={{ height: "100px"}}
                    />
                  </Box>
                </Modal>                 
              </Container>
              <Container>
                <Stack sx={{display: {xs: "none", sm: "flex", md: "flex"}}} direction="row" spacing={2} justifyContent="space-around">
                  {productImage?.map((el) => 
                    <> {/* key={image_id} */} 
                      <Box className='z-ind-picture'>
                        <img className='zoom'
                          src={(`https://mebel-tochka.herokuapp.com` + el.img)} 
                          alt='jhjhkjh' 
                          width="150px"
                        /> 
                      </Box>                 
                    </>) }
                </Stack>
              </Container>
            </Stack>
          </Container>
          <Container>
            <h2>{item.name}</h2>
            <Stack direction="row" spacing={2} alignItems="flex-end" margin="0 0 16px">
              <Box>
                Бренд:
              </Box>
              <h5>Аскона</h5>
              {/* <h5>{item['Brand.name']}</h5> */}
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center" margin="0 0 16px">
              <Box>
                Рейтинг:
              </Box>
              <BasicRatingReadOnly product={products} setRatingChange={setRatingChange} />
              <h4>({ratingChange2})</h4>
            </Stack>
            <Box margin="0 0 24px">
              <h2 style={{color: "rgb(155, 47, 174)", margin: "0 0 4px"}}>{item.price} ₽</h2>
              <Box>Есть в наличии</Box>
            </Box>
          {/* <Counter /> */}
          <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={handleClick}>В корзину</Button>
          <Snackbar message={'Товар добавлен в корзину!'}/>
          </Container>
        </Container>
      
      <Container>
        <BasicTabs item={item}/>
      </Container>
      
    </Box>
  );
};

export default ProductItemPage;
