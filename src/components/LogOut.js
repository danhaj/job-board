import React from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../services/firebase';

const LogOut = () => {
  const history = useHistory();

  const handleClick = async () => {
    await auth.signOut();
    history.push('/');
  };

  return (
    <button type='button' onClick={handleClick}>
      Log out
    </button>
  );
};

export default LogOut;
