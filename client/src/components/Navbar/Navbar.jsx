import React, { useState } from 'react';
import {
  AppBar, Badge, Button, Toolbar, Typography, Dialog
} from '@mui/material';
import { Stack } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth'

function Navbar() {
  const navigate = useNavigate(); // или используй Navlink
  const [open, setOpen] = useState(false);

  const handClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
          <StoreRoundedIcon />
          Магазин мебели
        </Typography>
        <Stack direction="row" spacing={2}>
        <Button color="inherit" onClick={() => navigate('/contacts')}>
            Связатся с нами
          </Button>
          <Button color="inherit" onClick={handClickOpen}>
            <AccountCircleIcon fontSize="large" />
            Войти
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Auth />
          </Dialog>
          <Button color="inherit" onClick={() => navigate('/basket')}>
            <Badge badgeContent={5} color="error">
              <ShoppingCartRoundedIcon fontSize="large" />
            </Badge>
          </Button>

        </Stack>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
