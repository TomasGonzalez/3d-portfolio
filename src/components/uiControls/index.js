import React from 'react';
import styled from 'styled-components';

import useStore from '../../context/mainStore';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.contrast};
  opacity: 0.4;
  align-items: center;
  position: fixed;
  width: ${(props) => props.windowWidth - 30}px;
  height: 50px;
  z-index: 19999;
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

function UIControls() {
  const { floatingCamera, setFloatingCamera } = useStore();
  if (floatingCamera)
    return (
      <MainContainer onClick={() => setFloatingCamera(false)}>
        <div />
        <div>Go Back.</div>
        <div />
      </MainContainer>
    );
}

export default UIControls;
