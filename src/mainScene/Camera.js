import React, { useEffect, useRef } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import useStore from '../context/mainStore';
import * as THREE from 'three';

const MainCamera = () => {
  const camref = useRef();
  const { setCameraRef, floatingCamera } = useStore((state) => state);

  useEffect(() => {
    if (camref) {
      setCameraRef(camref.current);
    }
  }, [camref, setCameraRef]);

  useEffect(() => {
    camref.current.fov = floatingCamera ? 100 : 65;
    camref.current.updateProjectionMatrix();
  }, [floatingCamera]);

  useFrame(() => {
    if (camref.current && floatingCamera) {
      const target = new THREE.Vector3(0, 0, 0);
      camref.current.translateOnAxis(camref.current.worldToLocal(target), 0.1);
      // camref.current.lookAt(target);
    }
  });

  return <PerspectiveCamera ref={camref} makeDefault fov={65} />;
};

export default MainCamera;
