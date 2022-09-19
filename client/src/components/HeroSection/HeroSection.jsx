import { Box, Container } from '@mui/material';
import React, {Suspense} from 'react';
import './HeroSection.css'
import Model from '../../models/Scene'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, SpotLight} from '@react-three/drei'

function HeroSection() {

  return (
    
    <Container className='heroSection'>
        <Canvas camera={{ position: [1, 2, 2], zoom: 2.4}} className='heroCanvas'>
          <OrbitControls target={[-.7, 1, 0]}/>
          <hemisphereLight intensity={0.40} />
          <SpotLight 
          position={[10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow/>
          <Suspense fallback={null}>
         <Model />
         </Suspense>
         </Canvas >
    </Container>
    // <Box bgcolor="darkgrey" p={3}>HeroSection</Box>
  );
}

export default HeroSection;
