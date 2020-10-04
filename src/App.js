import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/actions';
import styled, { createGlobalStyle } from 'styled-components';

import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import OffersPage from './pages/OffersPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import NewOfferPage from './pages/NewOfferPage';
import MyOffersPage from './pages/MyOffersPage';
import Header from './components/Header';

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
  padding-top: 60px;
`;

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  
  if(user) {
    dispatch(setCurrentUser(user));
  }

  return (
    <StyledApp>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/sign-in' component={SignInPage} />
          <Route exact path='/sign-up' component={SignUpPage} />
          <Route exact path='/offers' component={OffersPage} />
          <Route exact path='/offer-details' component={OfferDetailsPage} />
          <Route exact path='/new-offer' component={NewOfferPage} />
          <Route exact path='/my-offers' component={MyOffersPage} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App;
