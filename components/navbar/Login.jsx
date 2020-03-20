import React from 'react';
import { ReducerKeys, useAuth } from '../AuthContext';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const Login = () => {
  const [state, dispatch] = useAuth();

  const clearUser = () => {
    dispatch({
      type: ReducerKeys.removeUser, payload: {}
    });
    console.debug('Clearing saved user on Logout', state);
  };

  // Check if ID is real then we're logged in
  if (!state.userObject.id) {
    return <a href={`${API_URL}/auth/login`} className="button loginButton is-info" title="Login to user profile"><b>Login</b></a>;
  }

  return (
    <div title="Logout" onClick={() => clearUser()}><b>{state.userObject.displayName}</b></div>
  );
};

export default Login;
