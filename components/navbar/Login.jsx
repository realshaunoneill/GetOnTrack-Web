import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const Login = () => {
  const authUser = useContext(AuthContext);

  // Check if ID is real then we're logged in
  if (!authUser.userID) {
    return <a href={`${API_URL}/auth/login`} className="button loginButton is-info" title="Login to user profile"><b>Login</b></a>;
  }

  return (
    <span title="Logout">{authUser.userName}</span>
  );
};

export default Login;
