import React, { useRef, useState } from 'react';
import { useScroll } from '@react-three/drei';

import './index.scss';
import { useFrame } from '@react-three/fiber';

function ScrollReminderPage() {
  const scroll = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useFrame(() => {
    if (isVisible) {
      ref.current.style.opacity = 1 - scroll.range(0, 0.06);
    }

    if (isVisible && !scroll.visible(0, 0.04)) {
      // setIsVisible(false);
      // localStorage.setItem('show-scroll-reminder-helper', 'false');
    }
  });

  // if (!isVisible) return null;

  return (
    <div
      ref={ref}
      style={{ color: 'white', display: 'flex', flexDirection: 'column' }}
      className='container'
    >
      Scroll down
      <div className='field'>
        <div className='mouse' />
      </div>
    </div>
  );
}

export default ScrollReminderPage;
