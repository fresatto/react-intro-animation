import React from 'react';
import GlobalStyles from './styles/global';

import Home from './components/Home';
import IntroAnimation from './components/IntroAnimation';

function App() {
  return (
    <>
      <GlobalStyles />
      <IntroAnimation />
      <Home />
    </>
  );
}

export default App;
