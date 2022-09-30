import React, { useState } from 'react';
import StarObject from '../starObject';

import configs from '../../configs';

const { stars } = configs;

const STARS_RADIOUS = 480;
const MINIMUM_RADIOUS = 1;
const STARS_AMOUNT = stars.dencity || 900;

function getRandomInt(max, min) {
  const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  return Math.random() * max * plusOrMinus;
}

const calculateRandomPostion = () => {
  const position = Array.from({ length: 3 }, () =>
    getRandomInt(STARS_RADIOUS, MINIMUM_RADIOUS)
  );

  return position;
};

function StarsField(props) {
  const [stars] = useState(
    Array.from({ length: STARS_AMOUNT }, () => ({
      position: calculateRandomPostion(),
    }))
  );

  return (
    <group>
      {stars.map((star) => (
        <StarObject
          key={JSON.stringify(star.position)}
          position={star.position}
        />
      ))}
    </group>
  );
}

export default StarsField;
