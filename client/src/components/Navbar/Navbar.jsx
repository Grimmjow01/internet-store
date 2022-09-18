import React, { useState, useDeferredValue } from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography, Dialog, Box, styled, InputBase
} from '@mui/material';
import { Stack } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import ChairIcon from '@mui/icons-material/Chair';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../store/auth/action';
import './Navbar.css';

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
  const allProducts = useSelector((store) => store.products.product);

  const filteredAllProducts = useDeferredValue(allProducts.filter((prod) => prod.name.toLowerCase().includes(search.toLowerCase())));

  const handClickOpen = () => {
    setOpen(true);
  };

  const dialogHandleClosen = () => {
    setOpen(false);
  };


  const itemHandler = (e) => {
    setSearch(e.target.textContent);
    navigate(`/products/${e.target.dataset.productid}`);
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
              <ChairIcon />
              Мебель и точка
            </Typography>
          </Box>
          <Box>
            <Search>
              <SearchIcon color="black" />
              <InputBase 
              placeholder="Найти в каталоге..."
              value={search}
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
              <Button color="inherit" onClick={() => navigate('/admin')}>
                Admin
              </Button>
              <Button color="inherit" onClick={() => navigate('/contacts')}>
                Связатся с нами
              </Button>
              {!setAuth ? 
            <Button color="inherit" onClick={handClickOpen}>
              <AccountCircleIcon fontSize="large" />
                Войти
             </Button>
              :
              <Button color="inherit" onClick={() => dispatch(logoutThunk())}>
              <AccountCircleIcon fontSize="large" />
                Выйти
                </Button>
              }
              <Dialog open={open} onClose={dialogHandleClosen} aria-labelledby="form-dialog-title">
                <Auth dialogHandleClosen={dialogHandleClosen}/>
              </Dialog>
              {
                setAuth &&
                <Button variant="contained" color="success" startIcon={<AddIcon />}>Добавить</Button>
              }
              {
                !setAuth &&
                  <Button color="inherit" onClick={() => navigate('/basket')}>
                    <Badge badgeContent={5} color="error">
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
