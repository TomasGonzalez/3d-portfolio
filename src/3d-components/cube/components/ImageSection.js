import React from 'react';
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
          zIndexRange={[0, 10]}
          style={{
            height: webViewer.height,
            width: webViewer.width,
            backgroundColor: 'gray',
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: 0,
              top: '50%',
              left: '50%',
              fontSize: 24,
              fontWeight: 'bold',
            }}
          >
            Loading...
          </div>
          <iframe
            title={'Description'}
            style={{
              height: '100%',
              width: '100%',
              zIndex: 100,
              position: 'absolute',
            }}
            src={displayWebSite}
          />
        </Html>
      )}
    </group>
  );
};

export default ImageSection;
