import React, { useRef } from 'react';
import { Text3D, Center, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import configs from '../../configs';
import Fonts from '~/src/assets/fonts/ibm_plex_mono_regular.json';

const { title, subTitle } = configs;

const Logo = () => {
  const logoModelRef = useRef();
  const subTitleRef = useRef();
  const fullObjectRef = useRef();
  const scroll = useScroll();

  useFrame(() => {
    logoModelRef.current.material.transparent = true;
    logoModelRef.current.material.opacity = 1 - scroll.range(0, 0.08);
    subTitleRef.current.material.transparent = true;
    subTitleRef.current.material.opacity = 1 - scroll.range(0, 0.08);

    const visibility = scroll.visible(0, 0.12);
    if (visibility !== undefined) fullObjectRef.current.visible = visibility;
  });

  return (
    <Center ref={fullObjectRef} scale={[20, 20, 20]} position={[-70, -20, 120]}>
      <Text3D
        ref={logoModelRef}
        rotation={[Math.PI / 0.8, Math.PI / 0.57, Math.PI / 0.845]}
        font={Fonts}
        lineHeight={0.5}
        letterSpacing={-0.025}
      >
        {title}
        <Center position={[8, -1, 0]} scale={[0.5, 0.5, 0.5]}>
          <Text3D
            ref={subTitleRef}
            font={Fonts}
            lineHeight={0.5}
            letterSpacing={-0.025}
          >
            {subTitle}
          </Text3D>
        </Center>
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
};

export default Logo;
