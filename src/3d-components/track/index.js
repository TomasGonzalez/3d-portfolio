import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

import useStore from '../../context/mainStore';
import pathCurve, { rotationTrail } from './pathCurve';
import calculateCameraRotation from '../../utils/calcualteCameraRotation';

//TODO: Instead of getting the reference of the camera and calculating it's position/rotation here,
//get the referance of the track and calculate position/rotation inside of the camera component

//I forgot how this works, touch at your own risk. If anyone has a good way to implement smooth stop points in the track please let me know
// Regarding the comment above, I did found a better way. Next time dont make the camera movement algorithmically just attach it to some vecor in the animation and animate the path in blender instead (Facepalm)

const SLOWDOWN_FACTOR = 7; // the lower the slower it goes
const STOP_POINTS = [0.114, 0.211, 0.3015, 0.412, 0.5143, 0.625]; // they have to be separated by one SMOOTH_AMOUNT unit for example if smooth amount is 0.1 and the first stop point is 0.1 the second o stop_point has to be > 0.2
const SMOOTH_AMOUNT = 0.1; // how much time the smooth takes

function Knot() {
  const [translateToCamera, setTranslateToCamera] = useState(true);
  const tubeGeometry = useRef();
  const scroll = useScroll();
  const {
    setIsNavVisible,
    isNavVisible,
    cameraRef,
    floatingCamera,
    setScrollElement,
  } = useStore((state) => state);

  useEffect(() => {
    setTimeout(() => setTranslateToCamera(false), 1900);
  }, []);

  useEffect(() => {
    if (scroll.el) {
      setScrollElement(scroll.el);
    }
  }, [scroll.el, setScrollElement]);

  useEffect(() => {
    if (floatingCamera) setTranslateToCamera(true);
    else setTimeout(() => setTranslateToCamera(false), 1200);
  }, [floatingCamera]);

  let prevOffset = scroll.offset;

  useFrame(() => {
    //Set the visibility of the nav bar (Maby not the best place to do it but...)
    if (prevOffset > scroll.offset && !isNavVisible) {
      setIsNavVisible(true);
    }
    if (prevOffset < scroll.offset && isNavVisible) {
      setIsNavVisible(false);
    }

    prevOffset = scroll.offset;
    //This took me a week to nail down.
    const totalSmooth = STOP_POINTS.reduce((prev, current) => {
      const smoothRange = scroll.range(current, SMOOTH_AMOUNT);
      const smoothCurve = scroll.curve(current, SMOOTH_AMOUNT);

      return (
        prev + smoothRange / (10 + SLOWDOWN_FACTOR * (1 - smoothCurve / 1.3))
      );
    }, 0);

    const calculatedCurrentScroll =
      (scroll?.offset - totalSmooth) /
      (1 - (1 / (10 + SLOWDOWN_FACTOR)) * STOP_POINTS.length);

    const currentScroll =
      calculatedCurrentScroll > 0.9999999 ? 0.999999 : calculatedCurrentScroll;

    if (tubeGeometry.current && cameraRef) {
      const { path: tubePath } = tubeGeometry.current.parameters;
      const currentPosition = tubePath?.getPointAt(currentScroll);

      //set camera rotation
      if (!floatingCamera) {
        cameraRef.setRotationFromQuaternion(
          calculateCameraRotation(currentScroll, rotationTrail)
        );

        //set camera position
        if (translateToCamera) {
          cameraRef.translateOnAxis(
            cameraRef.worldToLocal(currentPosition),
            0.1
          );
        } else {
          cameraRef.position.set(
            currentPosition.x,
            currentPosition.y,
            currentPosition.z
          );
        }
      }
    }
  });

  return (
    <mesh scale={[1, 1, 1]} position={[0, 0, 0]}>
      <meshBasicMaterial visible={false} color='transparent' wireframe />
      <tubeBufferGeometry
        ref={tubeGeometry}
        args={[pathCurve, 202, 3, 5, false]}
      />
    </mesh>
  );
}

const Track = () => {
  return <Knot />;
};

export default Track;
