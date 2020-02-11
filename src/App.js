import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Landing from './pages/Landing';
import GlobalStyle from './theme/GlobalStyle';
import { lightTheme, darkTheme } from './theme/themes';
import ThemeButton from './theme/ThemeButton';

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const handleTheme = () => {
    theme.name === 'light' ? setTheme(darkTheme) : setTheme(lightTheme)
  };
  return (
    <ThemeProvider theme={theme}>
      <ThemeButton handleTheme={handleTheme} />
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  )
}

export default App;
