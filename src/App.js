import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/actions';
import styled, { createGlobalStyle } from 'styled-components';
import { auth } from './services/firebase';

import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import OffersPage from './pages/OffersPage';
import OfferDetailsPage from './pages/OfferDetailsPage';
import NewOfferPage from './pages/NewOfferPage';
import MyOffersPage from './pages/MyOffersPage';
import EditOfferPage from './pages/EditOfferPage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

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

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if(user?.uid) {
        dispatch(setCurrentUser({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName
        }));
      } else {
        dispatch(setCurrentUser(null));
      }
    })

    return () => {
      unsubscribe();
    }
  })
  
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
          <PrivateRoute exact path='/new-offer' component={NewOfferPage} />
          <PrivateRoute exact path='/my-offers' component={MyOffersPage} />
          <PrivateRoute exact path='/edit-offer' component={EditOfferPage} />
        </Switch>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App;
