import React, { useCallback } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import useStore from '~/src/context/mainStore';
import configs from '../../configs';

const { relevantStops } = configs;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  border-top: 0px solid ${(props) => props.theme.colors.primary};
  border-left-width: 0px;
  border-right-width: 0px;
  flex: 1;
  width: 90%;
  color: ${(props) => props.theme.colors.light};
  font-size: 12px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const NavModal = (props) => {
  const { floatingCamera, scrollElement, setFloatingCamera } = useStore(
    (state) => state
  );

  const scrollTo = useCallback(
    (index = 0) => {
      scrollElement?.scroll({
        top: index * scrollElement.scrollHeight,
        behavior: 'smooth',
      });
      props?.onRequestClose();
    },
    [scrollElement, props]
  );

  return (
    <Modal
      ariaHideApp={false}
      closeTimeoutMS={500}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 1,
        },
        content: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          backgroundColor: 'rgba(0,0,0,0.0)',
          height: '80%',
        },
      }}
      {...props}
    >
      {/* <Button onClick={() => setFloatingCamera(!floatingCamera)}>
        {isMobile ? 'phone' : 'desktop'}
      </Button> */}
      {relevantStops.map((stop) => (
        <Button onClick={() => scrollTo(stop.position)}>{stop.name}</Button>
      ))}
    </Modal>
  );
};

export default NavModal;
