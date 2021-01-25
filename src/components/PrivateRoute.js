import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {
    const user = useSelector(state => state.currentUser);
    
    if(user) return <Route {...props} />;
    return <Redirect to='/sign-in' />
}

export default PrivateRoute;