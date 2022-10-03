import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { isMobile } from 'react-device-detect';
import {
  ScrollControls,
  DeviceOrientationControls,
  OrbitControls,
  Scroll,
  Float,
  Text,
} from '@react-three/drei';

import Bloom from '~/src/3d-components/Bloom';
import useStore from '../context/mainStore';
import MainCamera from './Camera';
import { Cube, Track, StarsField as Stars, Logo } from '../3d-components';
import ScrollReminderPage from '../components/scrollReminderPage';
import Hologram from '../3d-components/hologram';

function MainScene() {
  const floatingCamera = useStore((state) => state.floatingCamera);

  const currentScale = useMemo(
    () => (isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1]),
    []
  );

  return (
    <Canvas
      style={{
        height: '100%',
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <ScrollControls damping={8} distance={1} pages={8}>
        <Scroll html>
          <ScrollReminderPage />
        </Scroll>
        <Bloom>
          <Stars />
          {floatingCamera &&
            (isMobile ? <DeviceOrientationControls /> : <OrbitControls />)}
          <Track />
          <MainCamera />
          <Suspense
            fallback={
              <Text
                fontSize={24}
                rotation={[Math.PI / 0.8, Math.PI / 0.57, Math.PI / 0.845]}
              >
                Loading...
              </Text>
            }
          >
            <Float scale={currentScale}>
              <Logo />
              <Hologram />
              <Cube position={[0, 0, 0]} />
            </Float>
          </Suspense>
        </Bloom>
      </ScrollControls>
    </Canvas>
  );
}

export default MainScene;
