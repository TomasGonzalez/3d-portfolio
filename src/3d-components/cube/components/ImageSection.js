import { Image } from '@react-three/drei';

const DISTANCE_VERTICAL = 4;
const DISTANCE_HORIZONTAL = 3;
const LEFT_PADDING = -0.4;
const TOP_PADDING = 0.26;

const ImageSection = ({ imageList }) => {
  if (!imageList) {
    return null;
  }

  return (
    <group>
      {imageList?.map((url, index) => {
        const calculateAmountOfRows =
          LEFT_PADDING +
          Math.floor(index / DISTANCE_HORIZONTAL) / DISTANCE_VERTICAL;
        const calculateColumns =
          TOP_PADDING +
          Math.floor(index / DISTANCE_HORIZONTAL) -
          index / DISTANCE_HORIZONTAL;

        return (
          <Image
            key={url}
            transparent
            scale={0.15}
            position={[calculateAmountOfRows, calculateColumns, 0.02]}
            url={url}
          />
        );
      })}
    </group>
  );
};

export default ImageSection;
