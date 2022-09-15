import React, { useState } from 'react';
import {
  Grid, Paper, TextField, Typography, Button, Avatar, Dialog,
} from '@mui/material';
import './Auth.css';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useDispatch } from 'react-redux';
import { getLoginThunk } from '../../store/auth/action';

const avatarStyle = { backgroundColor: '#5491d3', margin: '15px 0' };

const btnStyle = { margin: '10px 0' };

const textStyle = { margin: '40px auto' };

const textStyle2 = { margin: '20px auto' };

const orStyle = { margin: '20px 170px' };

const signStyle = { margin: '20px 55px' };

const logStyle = { margin: '20px 75px' };

const Auth = () => {

const [signOpen, signSetOpen] = useState(false);
const dispatch = useDispatch();

const handClickOpen = () => {
    signSetOpen(true);
    };
  
const handleClose = () => {
    signSetOpen(false);
};

const [inputLogin, setInputLogin] = useState('');

const inputChange = (e) => {
  setInputLogin({ ...inputLogin, [e.target.name]: e.target.value });
};

  return (
    <Grid>
      <Paper className="paperStyle">
        <Grid align="center">
          <Avatar style={avatarStyle}><LockPersonIcon /></Avatar>
          <h2 style={textStyle2}>Авторизация</h2>
        </Grid>
        <TextField 
        label="Username" 
        placeholder="Enter username" 
        onChange={inputChange} 
        type="email" 
        name="email"
        value={inputLogin.email} 
        fullWidth required />
        <TextField 
        label="Password" 
        placeholder="Enter password" 
        onChange={inputChange}
        type="password" 
        name="password"
        value={inputLogin.password}
        style={textStyle}
        fullWidth required />
        <Button type="submit" color="primary" variant="contained" onClick={() => dispatch(getLoginThunk(inputLogin))} style={btnStyle} fullWidth>Войти</Button>
        <Typography style={orStyle}>
          или
        </Typography>
        <div style={signStyle}>
          <Typography>
            {' '}
            Нет аккаунта?
            <Button onClick={handClickOpen}>
            Зарегистрироваться
            </Button>
          </Typography>
        </div>
      </Paper>
      <Dialog open={signOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Paper className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}><LockPersonIcon /></Avatar>
            <h2>Создать учетную запись</h2>
            <p>Пожалуйста, заполните все поля, чтобы продолжить</p>
          </Grid>
          <TextField label="Username" placeholder="Enter username" fullWidth required />
          <TextField label="Email" placeholder="Enter email" type="email" style={textStyle} fullWidth required />
          <TextField label="Password" placeholder="Enter password" type="password" fullWidth required />
          <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Зарегистрироваться</Button>
          <Typography style={orStyle}>
            или
          </Typography>
          <div style={logStyle}>
            <Typography>
              {' '}
              Есть аккаунт?
              <Button onClick={handleClose}>
              Авторизоваться
              </Button>
            </Typography>
          </div>
        </Paper>
      </Dialog>
    </Grid>
  )
}

export default Auth