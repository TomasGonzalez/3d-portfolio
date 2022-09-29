import { Text } from '@react-three/drei';
import theme from '~/src/theme';

const InfoSection = ({ infos }) => {
  if (!infos) return null;

  return (
    <group>
      {infos?.map((info, index) => (
        <Text
          key={info}
          position={[0, 0.23 - index / 5, 0.01]}
          maxWidth={0.9}
          fontSize={0.04}
          color={theme.colors.light}
        >
          {info}
        </Text>
      ))}
    </group>
  );
};

export default InfoSection;
