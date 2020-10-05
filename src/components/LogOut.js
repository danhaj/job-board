import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/actions';

const LogOut = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setCurrentUser({}));
        localStorage.removeItem('user');
    }

    return <button onClick={logout}>Log out</button>
}

export default LogOut;