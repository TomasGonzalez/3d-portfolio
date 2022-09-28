import React, { useRef, useState } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MAX_SIZE = 50;
const MAX_SPEED = 0.01;
const MAX_EMISSION = 500;

function StarsField(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const [starSize] = useState(Math.random() * MAX_SIZE);
  const [starSpeed] = useState(Math.random() * MAX_SPEED);
  const scroll = useScroll();
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.material.transparent = true;
    ref.current.material.opacity = scroll.range(0, 0.08);
    ref.current.rotation.x += starSpeed;
  });

  return (
    <mesh {...props} ref={ref} scale={[starSize, starSize, starSize]}>
      <octahedronGeometry args={[0.1]} />
      <meshStandardMaterial
        color={'white'}
        emissive={'orange'}
        emissiveIntensity={10}
      />
    </mesh>
  );
}

export default StarsField;
