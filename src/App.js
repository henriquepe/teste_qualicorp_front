import React from 'react';

import GlobalStyle from './styles/global';

import Routes from './router';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
