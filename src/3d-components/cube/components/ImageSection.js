import { useState } from 'react';
import { Image, Html } from '@react-three/drei';
import useStore from '../../../context/mainStore';

const ImageSection = ({ imageList }) => {
  const [displayWebSite, setDisplayWebsite] = useState(null);
  const { setFloatingCamera, floatingCamera } = useStore((state) => state);

  if (!imageList) {
    return null;
  }

  const { rows, separation, scale, leftPadding, topPadding, items, webViewer } =
    imageList;

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
              console.log(item);
              if (item.websiteURL) {
                if (webViewer) {
                  setDisplayWebsite(item.websiteURL);
                  return setFloatingCamera(true);
                }
                return window.open(item.websiteURL);
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
      {floatingCamera && webViewer && displayWebSite && (
        <Html
          as='div'
          transform
          rotation={webViewer.rotation}
          position={webViewer.position}
          style={{
            height: webViewer.height,
            width: webViewer.width,
            backgroundColor: 'red',
          }}
        >
          <iframe
            title={'Description'}
            style={{ height: '100%', width: '100%' }}
            src={displayWebSite}
          />
        </Html>
      )}
    </group>
  );
};

export default ImageSection;
