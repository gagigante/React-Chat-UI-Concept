import React from 'react';
import { BrowserRouter as Browser } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Browser>
    <Routes />

    <GlobalStyle />
  </Browser>
);

export default App;
