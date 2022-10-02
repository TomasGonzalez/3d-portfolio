import React from 'react';
import { Text } from '@react-three/drei';
import theme from '~/src/theme';

const Footer = ({ footer }) => {
  if (!footer) return null;

  return (
    <Text
      fontSize={0.05}
      position={[0, -0.59, 0.01]}
      color={theme.colors.light}
    >
      {footer}
    </Text>
  );
};

export default Footer;
