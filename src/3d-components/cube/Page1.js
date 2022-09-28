import React, { useRef, useState } from 'react';
import { Html } from '@react-three/drei';

function Page1(props) {
  return (
    <Html
      className='content'
      rotation-x={-Math.PI / 2}
      rotation-y={0}
      rotation-z={0}
      position={[0, 0.05, -0.09]}
      transform
      {...props}
    >
      <div
        style={{
          borderColor: 'yellow',
          borderStyle: 'solid',
          borderWidth: 5,
          backgroundColor: 'red',
          height: 1080,
          width: 1080,
        }}
      ></div>
    </Html>
  );
}

export default Page1;
