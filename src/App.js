import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import OffersPage from './pages/OffersPage';
import OfferDetails from './pages/OfferDetailsPage';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    background-color: #1B1B1E;
    color: #E7E7E7;
  }

  p {
    margin: 0;
    padding: 0;
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
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/sign-in' component={SignInPage} />
        <Route exact path='/sign-up' component={SignUpPage} />
        <Route exact path='/offers' component={OffersPage} />
        <Route exact path='/offer-details' component={OfferDetails} />
      </Switch>
    </BrowserRouter>
  </StyledApp>
)

export default App;
