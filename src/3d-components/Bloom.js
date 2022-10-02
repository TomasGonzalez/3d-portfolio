import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import {
  EffectComposer,
  Bloom as UnrealBloomPass,
} from '@react-three/postprocessing';

function Bloom({ children }) {
  const { gl, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  const scroll = useScroll();

  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size, scene]
  );

  useEffect(() => {
    gl.toneMappingExposure = 0.5;
  }, [gl]);

  useFrame((state) => {
    const bloomIndex = scroll.range(0.7, 0.3);

    //lower the bloom as we get near the end
    gl.toneMappingExposure =
      Math.sin(state.clock.getElapsedTime()) / (3 + 25 * bloomIndex) +
      (0.66 - 0.41 * bloomIndex);
  }, 1);

  return (
    <EffectComposer ref={composer} args={[gl]}>
      <scene setScene={setScene}>{children}</scene>
      <UnrealBloomPass
        luminanceThreshold={0}
        luminanceSmoothing={0}
        height={700}
      />
    </EffectComposer>
  );
}

export default Bloom;
