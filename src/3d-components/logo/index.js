import React, { useRef, useEffect } from 'react';
import { Text3D, Center, Float, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Fonts from '~/src/assets/fonts/ibm_plex_mono_regular.json';

const Logo = (props) => {
  const logoModelRef = useRef();
  const subTitleRef = useRef();
  const scroll = useScroll();

  useEffect(() => {
    if (logoModelRef.current) {
      logoModelRef.current.rotation.set(
        Math.PI / 0.8,
        Math.PI / 0.57,
        Math.PI / 0.845
      );
    }
  }, [logoModelRef]);

  useFrame(() => {
    logoModelRef.current.material.transparent = true;
    logoModelRef.current.material.opacity = 1 - scroll.range(0, 0.08);
    subTitleRef.current.material.transparent = true;
    subTitleRef.current.material.opacity = 1 - scroll.range(0, 0.08);
  });

  return (
    <Center scale={[20, 20, 20]} position={[90, 0, 30]}>
      <Text3D
        ref={logoModelRef}
        font={Fonts}
        lineHeight={0.5}
        letterSpacing={-0.025}
      >
        {`Tomas Gonzalez`}
        <Center position={[8, -1, 0]} scale={[0.5, 0.5, 0.5]}>
          <Text3D
            ref={subTitleRef}
            font={Fonts}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {'Dev portfolio'}
          </Text3D>
        </Center>
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};

export default Logo;
