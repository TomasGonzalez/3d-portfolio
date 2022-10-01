import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import useStore from '../../context/mainStore';
import configs from '../../configs';

const { relevantStops } = configs;

const MainControlerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  height: 40px;
  padding: 0px 40px;
  z-index: 19999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  font-size: 25px;
  font-weight: bold;
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  border-top: 0px solid ${(props) => props.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  height: 50px;
  z-index: 99999;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 1px;
  /* border: 1px solid ${(props) => props.theme.colors.primary}; */
  width: 100%;
  bottom: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  color: ${(props) => props.theme.colors.dark};
  font-size: 29px;
  font-weight: bold;
  border-image-source: ${(props) =>
    `linear-gradient(to left, transparent, ${props.theme.colors.primary}, transparent)`};

  &:hover {
    opacity: 1;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: 0.2;
  z-index: -1;
  width: ${(props) => props.progress * 100}%;
`;

function UIControls() {
  const { floatingCamera, setFloatingCamera, scrollElement } = useStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scrollElement) {
      scrollElement.onscroll = () => {
        const { scrollTop, scrollHeight } = scrollElement;
        setProgress((scrollTop * 1.125) / scrollHeight);
      };
    }
  }, [scrollElement]);

  const scrollTo = useCallback(
    (index = 0) =>
      scrollElement?.scroll({
        top: index * scrollElement.scrollHeight,
        behavior: 'smooth',
      }),
    [scrollElement]
  );

  const onGoPrev = () => {
    let targetPosition = Math.floor(progress * relevantStops.length - 0.3);

    //Is this not elegant enought? The other option would be to map every position to every scroll percentage. No thnks...
    if (progress * relevantStops.length === 8) {
      targetPosition = 6;
    }

    if (targetPosition >= 0) scrollTo(relevantStops[targetPosition].position);
  };

  const onGoNext = () => {
    let targetPosition = Math.ceil(progress * relevantStops.length + 0.69);
    if (targetPosition <= relevantStops.length) {
      scrollTo(relevantStops[targetPosition].position);
    }
  };

  if (floatingCamera)
    return (
      <MainContainer onClick={() => setFloatingCamera(false)}>
        <div />
        <div>Go Back.</div>
        <div />
      </MainContainer>
    );

  return (
    <MainControlerContainer>
      <div />
      <Button onClick={onGoPrev} className='controls'>
        Prev page
      </Button>
      <Button onClick={onGoNext} className='controls'>
        Next page
      </Button>
      <div />
      <ProgressBar progress={progress} />
    </MainControlerContainer>
  );
}

export default UIControls;
