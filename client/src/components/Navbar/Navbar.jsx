import React, { useState, useDeferredValue, useEffect } from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography, Dialog, Box, styled, InputBase
} from '@mui/material';
import { Stack } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ChairIcon from '@mui/icons-material/Chair';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css';
import { getAllSearchProduct } from '../../store/products/action';
import AccountMenu from '../AccountMenu/AccountMenu';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")({
  background: "white",
  color: "grey",
  borderRadius: "20px",
  padding: "0 15px",
  height: "37px",
  width: "450px",
  display: "flex",
  alignItems: "center",
  gap: "5px",
})

function Navbar() {
  const navigate = useNavigate(); // или используй Navlink
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const setAuth = useSelector((store) => store.auth.setAuth);
  const dataAdmin = useSelector((store) => store.auth.isAdmin);
  const allProducts = useSelector((store) => store.products.product);

  const products = useSelector((store)=> store.products)


  
  useEffect(() => {
    if (!search) {
    dispatch(getAllSearchProduct(search))
    };
  }, [search]);
  
 
  const numberInBasket = JSON.parse(localStorage.getItem('basketItems'))?.length;
  
  const filteredAllProducts = useDeferredValue(allProducts.filter((prod) => prod.name.toLowerCase().includes(search.toLowerCase())));

  const handClickOpen = () => {
    setOpen(true);
  };

  const dialogHandleClosen = () => {
    setOpen(false);
  };


  const itemHandler = (e) => {
    setSearch(e.target.textContent);
    dispatch(getAllSearchProduct(search))
    setIsOpenSearch(!isOpenSearch);
  };

  const inputClickHandler = () => {
    setIsOpenSearch(true);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between"> */}        
          <Box className="logo">
            <Typography variant="h6" component="div" onClick={() => navigate('/')}
              sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "block" }}}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Box>
                  <ChairIcon />
                </Box>
                <Box>
                  Мебель и точка
                </Box>
              </Stack>
              
            </Typography>
          <ChairIcon fontSize="large" sx={{ display: { xs: "block", sm: "block", md: "none" }}} onClick={() => navigate('/')} />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }}}>
            <Search>
              <SearchIcon color="black" />
              <InputBase 
              placeholder="Найти в каталоге..."
              value={search}
              fullWidth={true}
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
              }}
              onClick={inputClickHandler} />
            </Search>
            <ul className="autocomplete">
              {search && isOpenSearch
                && filteredAllProducts.map((product) => (
                  <li key={product.id} className="autocomplete-Item" data-productid={product.id} onClick={itemHandler}>{product.name}</li>
                ))}
            </ul>
          </Box>
          <Box>
            <Stack direction="row" spacing={2}>
              { dataAdmin &&
                <Button color="inherit" onClick={() => navigate('/admin')}>
                  Admin
                </Button>
              }
              {!setAuth ? 
              
                <Button color="inherit" onClick={handClickOpen}>
                  <AccountCircleIcon fontSize="large" />
                    Войти
                </Button>
              :
                <AccountMenu />
                // <Button color="inherit" onClick={() => dispatch(logoutThunk())}>
                //   <AccountCircleIcon fontSize="large" />
                //     Выйти
                // </Button>
              }
              <Dialog open={open} onClose={dialogHandleClosen} aria-labelledby="form-dialog-title">
                <Auth dialogHandleClosen={dialogHandleClosen}/>
              </Dialog>
              {
                  <Button color="inherit" onClick={() => navigate('/basket')}>
                    <Badge badgeContent={products.basket.length} color="error">
                      <ShoppingCartRoundedIcon fontSize="large" />
                    </Badge>
                  </Button>
              }        
            </Stack>
          </Box>
        {/* </Stack> */}
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
