import { Box, Container } from '@mui/material';
import React, {Suspense} from 'react';
import './HeroSection.css'
import Model from '../../models/Scene'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { useRef } from 'react';
import CanvasModel from '../Canvas/CanvasModel';


function HeroSection() {
  


  return (
   
    <Container className='heroSection'>
         <CanvasModel />
    </Container>
    // <Box bgcolor="darkgrey" p={3}>HeroSection</Box>
  );
}

export default HeroSection;
