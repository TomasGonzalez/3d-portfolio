import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

import model from '~/src/assets/cube.glb';

const START_POINT = 0.69;

function Box(props) {
  const { scene, nodes, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, scene);
  // const cubeRef = useRef(null);
  const scroll = useScroll();

  useEffect(() => {
    nodes['Cube002'].children.map((face) => (face.material.transparent = true));
  }, []);

  useEffect(() => {
    animations.forEach((animation) => {
      void (actions[animation.name].play().paused = true);
    });
  }, [actions, animations]);

  useFrame((state, delta) => {
    const offset = scroll.range(START_POINT, 0.4);
    const cubeCapTransparencyOffset = scroll.range(START_POINT, 0.2);
    const visibleRange = scroll.range(0.9, 0.1);

    // nodes.forEach((node) => {
    //   node.children.map((face) => (face.material.opacity = 1 - visibleRange));
    // });

    //set up the opacity for head component
    nodes['Cube002'].children.map(
      (face) => (face.material.opacity = 1 - cubeCapTransparencyOffset)
    );

    animations.forEach((animation) => {
      const action = actions[animation.name];
      actions[animation.name].time = THREE.MathUtils.damp(
        action.time,
        action.getClip().duration * offset,
        100,
        delta
      );
    });
  });

  return (
    <primitive
      // ref={cubeRef}
      onClick={() => {
        console.log('test');
      }}
      scale={[12, 12, 12]}
      object={scene}
      {...props}
    />
  );
}

export default Box;
