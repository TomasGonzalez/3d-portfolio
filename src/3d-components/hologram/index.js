import React, { useEffect, useRef } from 'react';
import {
  Billboard,
  Cylinder,
  Image,
  useScroll,
  useTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import alphaMap from './textures/alpha-map.png';
import theme from '~/src/theme';

function Hologram() {
  const scroll = useScroll();
  const coneRef = useRef();
  const hologramRef = useRef();

  const materials = useTexture({
    alphaMap: alphaMap,
  });

  useFrame(() => {
    const scale = scroll.range(0.72, 1);
    hologramRef.current.scale.x = scale * 4;
    hologramRef.current.scale.y = scale * 4;
    hologramRef.current.scale.z = scale * 4;
    hologramRef.current.position.y = scale * 40 - 10;
  });

  return (
    <group ref={hologramRef}>
      <Billboard>
        <Image
          scale={15}
          url={'pictures/profile-picture.jpg'}
          position={[0, 5, 0]}
        />
      </Billboard>
      <Cylinder
        args={[0.4, 1.4, 1.5, undefined, undefined, true]}
        smoothness={14}
        position={[0, -1.3, 0]}
        scale={15}
        rotation={[0, Math.PI, Math.PI]}
      >
        <meshBasicMaterial
          ref={coneRef}
          color={theme.colors.light}
          transparent
          {...materials}
        />
      </Cylinder>
    </group>
  );
}

export default Hologram;
