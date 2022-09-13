import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import './Footer.css'

export default function SimpleBottomNavigation() {

  return (
    <Box >
      <BottomNavigation

        className="footer">

       <span id="footer-text">Owls Oline Store 2022</span>
        

      </BottomNavigation>
    </Box>
  );
}