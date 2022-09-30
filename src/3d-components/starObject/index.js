import React, { useRef, useState } from 'react';
import { useScroll, Billboard, Image } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import configs from '../../configs';
import theme from '~/src/theme';

const { stars } = configs;

const MAX_SIZE = stars.maxSize || 50;
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

  if (stars.url)
    return (
      <Billboard>
        <Image
          {...props}
          ref={ref}
          scale={[starSize, starSize, starSize]}
          transparent
          color={theme.colors.stars}
          emissive={theme.colors.starsEmission}
          url={'icons/three-js-logo.png'}
        />
      </Billboard>
    );

  return (
    <mesh {...props} ref={ref} scale={[starSize, starSize, starSize]}>
      <octahedronGeometry args={[0.1]} />
      <meshStandardMaterial
        color={theme.colors.stars}
        emissive={theme.colors.starsEmission}
        emissiveIntensity={stars.emissionIntencity}
      />
    </mesh>
  );
}

export default StarsField;
