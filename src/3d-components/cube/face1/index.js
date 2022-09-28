import React from 'react';
import { useGLTF } from '@react-three/drei';

import model from '~/src/assets/white-room1/remastered.glb';

const Room1 = (props) => {
  const { scene } = useGLTF(model);

  return <primitive scale={[5, 5, 5]} object={scene} {...props} />;
};

export default Room1;
