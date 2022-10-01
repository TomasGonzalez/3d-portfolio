import React from 'react';
import { ThemeProvider } from 'styled-components';

import MainScene from './mainScene';
import theme from '~/src/theme';
import NavBar from './components/navBar';
import UIControls from './components/uiControls';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <UIControls />
      <MainScene />
    </ThemeProvider>
  );
}

export default App;
