import React from 'react';
import { ThemeProvider } from 'styled-components';

import MainScene from './mainScene';
import theme from '~/src/theme';
import NavBar from './components/navBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <MainScene />
    </ThemeProvider>
  );
}

export default App;
