import React from 'react';
import {ReducerKeys, useAuth} from '../AuthContext';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const Login = () => {
  const [state, dispatch] = useAuth();

  // Check if ID is real then we're logged in
  if (!state.userObject.id) {
    return <a href={`${API_URL}/auth/login`} className="button loginButton is-info" title="Login to user profile"><b>Login</b></a>;
  }

  return (
    <a className="button">
      <img className="login-picture" alt="Profile Picture" src={state.userObject.picture}/>&nbsp;
      <b>{state.userObject.displayName}</b>
    </a>
  );
};

export default Login;
