import React from 'react';
import { Text } from '@react-three/drei';
import theme from '~/src/theme';

const InfoSection = ({ infos }) => {
  if (!infos) return null;

  return (
    <group>
      {infos?.map((info, index) => (
        <Text
          key={info}
          position={[0, 0.29 - index / 3.7, 0.01]}
          maxWidth={1.0}
          fontSize={0.05}
          color={theme.colors.light}
        >
          {info}
        </Text>
      ))}
    </group>
  );
};

export default InfoSection;
