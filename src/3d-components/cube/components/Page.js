import React from 'react';
import { Text } from '@react-three/drei';

import ImageSection from './ImageSection';
import configs from '../../../configs';
import theme from '../../../theme';
import InfoSection from './InfoSection';

const { pages } = configs;

function Page() {
  return (
    <group>
      {pages.map(({ scale, rotation, position, ...page }) => (
        <mesh
          className='content'
          scale={scale}
          rotation={rotation}
          position={position}
        >
          <Text position={[0, 0.5, 0.01]} color={theme.colors.light}>
            {page.title}
          </Text>
          <ImageSection imageList={page?.imageList} />
          <InfoSection infos={page.infos} />
        </mesh>
      ))}
    </group>
  );
}

export default Page;
