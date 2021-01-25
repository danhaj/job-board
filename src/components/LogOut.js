import React from 'react';
import { auth } from '../services/firebase';

const LogOut = () => (
    <button onClick={() => auth().signOut()}>Log out</button>
)

export default LogOut;