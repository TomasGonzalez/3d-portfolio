import { Image } from '@react-three/drei';
import useStore from '../../../context/mainStore';

const ImageSection = ({ imageList }) => {
  const { setFloatingCamera } = useStore((state) => state);

  if (!imageList) {
    return null;
  }

  const { rows, separation, scale, leftPadding, topPadding, items } = imageList;

  return (
    <group>
      {items?.map((item, index) => {
        const calculateAmountOfRows =
          leftPadding + Math.floor(index / rows) / separation;
        const calculateColumns =
          topPadding + Math.floor(index / rows) - index / rows;

        return (
          <Image
            onClick={() => {
              if (item.websiteURL) {
                return setFloatingCamera(true);
              }
            }}
            key={item.url}
            transparent
            scale={scale}
            position={[calculateAmountOfRows, calculateColumns, 0.02]}
            url={item.url}
          />
        );
      })}
    </group>
  );
};

export default ImageSection;
