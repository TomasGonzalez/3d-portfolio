import { Image } from '@react-three/drei';

const ImageSection = ({ imageList }) => {
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
            onClick={() => item.websiteURL && window.open(item.websiteURL)}
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
