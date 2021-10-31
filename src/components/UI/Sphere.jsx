import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Ring, Stars,RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import Texture from "./assets/texture3.jpg";
import { TextureLoader } from "three";

export function Sphere(props) {
  const [colorMap] = useLoader(
    TextureLoader,
    [Texture]
  );

  const earthRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();




  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 2;
    earthRef.current.rotation.x = elapsedTime / 2;
  
    ringRef.current.rotation.z = elapsedTime / 0.6;
    // ringRef.current.rotation.x = elapsedTime / 1.2;
    // ringRef.current.rotation.y = elapsedTime / 1.3;

    ring2Ref.current.rotation.z = elapsedTime / 1.2;
    ring2Ref.current.rotation.x = elapsedTime / 0.6;
    // ring2Ref.current.rotation.y = elapsedTime / 1.4;

    ring3Ref.current.rotation.z = elapsedTime / 1.3;
    // ring3Ref.current.rotation.x = elapsedTime / 1.4;
    ring3Ref.current.rotation.y = elapsedTime / 0.6;

  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[10, 0, 7]} intensity={3.2} />
      {/* <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      /> */}
      <mesh ref={earthRef} position={[0, 0, -3.0001]}>
        <sphereGeometry args={[1, 32, 32]} />
       

        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
      <mesh ref={ringRef} position={[0,0,-6]}>
       
        <torusGeometry args={[4, 0.15, 50, 100]}/>

        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          roughness={0.8}
        />
      </mesh>
      <mesh ref={ring2Ref} position={[0,0,-6]}>
       
        <torusGeometry args={[4, 0.15, 50, 100]}/>

        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
      <mesh ref={ring3Ref} position={[0,0,-6]}>
       
        <torusGeometry args={[4, 0.15, 50, 100]}/>

        <meshStandardMaterial
          map={colorMap}
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>
    </>
  );
}