import { Box, Container } from '@mui/material';
import React, {Suspense} from 'react';
import './HeroSection.css'
import Model from '../../models/Scene'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'


function HeroSection() {
  return (
   
    <Container className='heroSection'>
       <Canvas camera={{position: [0, 2, 5], zoom: 1}}>
        <OrbitControls />
       {/*  <color attach="background" args={["lightblue"]}/> */}
        <hemisphereLight intensity={0.35}/>
        <spotLight position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow/>
        <Suspense fallback={null}>
         <Model />
      </Suspense></Canvas>
    </Container>
    // <Box bgcolor="darkgrey" p={3}>HeroSection</Box>
  );
}

export default HeroSection;
