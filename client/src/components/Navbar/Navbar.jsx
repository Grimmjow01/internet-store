import React from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // или используй Navlink
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Internet Store
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
          <Button color="inherit" onClick={() => navigate('/basket')}>Basket</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
