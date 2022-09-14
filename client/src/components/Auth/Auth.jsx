import React, { useState } from 'react';
import {
  Grid, Paper, TextField, Typography, Button, Avatar, Dialog,
} from '@mui/material';
import './Auth.css';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const avatarStyle = { backgroundColor: '#5491d3', margin: '15px 0' };

const btnStyle = { margin: '10px 0' };

const textStyle = { margin: '40px auto' };

const textStyle2 = { margin: '20px auto' };

const orStyle = { margin: '20px 170px' };

const signStyle = { margin: '20px 55px' };

const logStyle = { margin: '20px 75px' };

const Auth = () => {

const [signOpen, signSetOpen] = useState(false);

const handClickOpen = () => {
    signSetOpen(true);
    };
  
const handleClose = () => {
    signSetOpen(false);
};

  return (
    <Grid>
      <Paper className="paperStyle">
        <Grid align="center">
          <Avatar style={avatarStyle}><LockPersonIcon /></Avatar>
          <h2 style={textStyle2}>Sign In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" fullWidth required />
        <TextField label="Password" placeholder="Enter password" type="password" style={textStyle} fullWidth required />
        <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Login</Button>
        <Typography style={orStyle}>
          or
        </Typography>
        <div style={signStyle}>
          <Typography>
            {' '}
            Don't have account?
            <Button onClick={handClickOpen}>
              Sign Up
            </Button>
          </Typography>
        </div>
      </Paper>
      <Dialog open={signOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Paper className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}><LockPersonIcon /></Avatar>
            <h2>Create Your Account</h2>
            <p>Please fill all fields to continue</p>
          </Grid>
          <TextField label="Username" placeholder="Enter username" fullWidth required />
          <TextField label="Email" placeholder="Enter email" type="email" style={textStyle} fullWidth required />
          <TextField label="Password" placeholder="Enter password" type="password" fullWidth required />
          <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Create account</Button>
          <Typography style={orStyle}>
            or
          </Typography>
          <div style={logStyle}>
            <Typography>
              {' '}
              Have an account?
              <Button onClick={handleClose}>
                Login
              </Button>
            </Typography>
          </div>
        </Paper>
      </Dialog>
    </Grid>
  )
}

export default Auth