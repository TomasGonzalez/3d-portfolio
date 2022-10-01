import React, { useRef } from 'react';

import './index.scss';

function ScrollReminderPage() {
  const ref = useRef(null);

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
