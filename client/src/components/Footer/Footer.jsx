import * as React from 'react';
import {Box, Button} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import './Footer.css'
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {

  const navigate = useNavigate();
  return (
    <Box >
      <BottomNavigation

        className="footer">

       <span id="footer-text">Owls Oline Store 2022</span>
       <Button color="secondary" onClick={() => navigate('/contacts')}>	              
                Связатся с нами	              
              </Button>

      </BottomNavigation>
    </Box>
  );
}