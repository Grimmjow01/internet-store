import React, { useState } from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography, Dialog, Box, styled, InputBase
} from '@mui/material';
import { Stack } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { isAuth } from '../../store/auth/action';
import $api from '../../http';

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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const setAuth = useSelector((store) => store.auth.setAuth);

  const handClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handClickExit = async() => {
    await $api.post('/logout');
    localStorage.removeItem('token');
    console.log('localStorage==', localStorage);
    dispatch(isAuth(false));
  };

  const isAdmin = false;

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between"> */}        
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
              <StoreRoundedIcon />
              Магазин мебели
            </Typography>
          </Box>
          <Box>
            <Search>
              <SearchIcon color="black" />
              <InputBase placeholder="Найти в каталоге..." />
            </Search>
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
              <Button color="inherit" onClick={handClickExit}>
              <AccountCircleIcon fontSize="large" />
                Выйти
                </Button>
              }
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Auth />
              </Dialog>
              {
                isAdmin &&
                <Button variant="contained" color="success" startIcon={<AddIcon />}>Добавить</Button>
              }
              {
                !isAdmin &&
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
