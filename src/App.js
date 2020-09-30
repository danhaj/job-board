import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import LandingPage from './pages/LandingPage';
import OffersPage from './pages/OffersPage';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    background-color: #1B1B1E;
    color: #E7E7E7;

    * {
      box-sizing: border-box;
    }
  }
`;

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`;

const App = () => (
  <StyledApp>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/offers'>
          <OffersPage />
        </Route>
      </Switch>
    </BrowserRouter>
  </StyledApp>
)

export default App;
