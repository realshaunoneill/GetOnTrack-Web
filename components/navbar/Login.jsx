import React  from 'react';
import { useAuth } from '../AuthContext';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const Login = () => {
  const [state] = useAuth();
  console.log(state);

  // Check if ID is real then we're logged in
  if (!state.userID) {
    return <a href={`${API_URL}/auth/login`} className="button loginButton is-info" title="Login to user profile"><b>Login</b></a>;
  }

  return (
    <span title="Logout">{state.userName}</span>
  );
};

export default Login;
