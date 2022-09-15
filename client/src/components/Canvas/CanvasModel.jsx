import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const CanvasModel = () => {

    const mountRef = useRef(null);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
       // Initialization of scene
       const scene = new THREE.Scene();
       scene.background = new THREE.Color('#FFFFFF');
       const camera = new THREE.PerspectiveCamera();
       let renderer = new THREE.WebGLRenderer({antialias : true,  maxLights: 3 });
       renderer.setSize(450, 400);
       mountRef.current.appendChild(renderer.domElement);

       const loader = new GLTFLoader();

       const controls = new OrbitControls(camera, renderer.domElement);

       // test box geometry
       const box = new THREE.BoxGeometry(20, 20 ,20);
       const material = new THREE.MeshBasicMaterial({color : '#FF2D00'});
       const boxMesh = new THREE.Mesh(box, material);
      // scene.add(boxMesh);
       boxMesh.geometry.center();

       const chair = new THREE.Group();
       
       const light = new THREE.PointLight('#FFFFFF', 5);


       

       light.position.z = 1000;
       light.position.x = -1000;
       light.position.y = 1000;

       //model loader
       console.log("LOADER", loader)
       loader.load('./3dfurniture/scene.gltf', (gltf) => {
        console.log('GLTF ====', gltf)
         gltf.scene.scale.set(130, 130, 130);
         chair.add(gltf.scene);
       })

       scene.add(chair, light)


       // animate function
       const animate = () => {
          let animateId = requestAnimationFrame(animate);
          chair.rotation.y += 0.005;

          renderer.render(scene, camera);
       }
       animate();
       camera.position.z = 300;

       console.log(scene)

       //will unmount this frame
       return () => {
        mountRef?.current?.removeChild(renderer.domElement);
       }
    }, [])

  return (
    
    <><div ref={mountRef} /></>
  )
}

export default CanvasModel