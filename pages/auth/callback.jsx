import React, { useEffect } from 'react';
import Router from 'next/router';
import jwt from 'jsonwebtoken';

import { ReducerKeys, useAuth } from '../../components/AuthContext';
import Loading from '../../components/notifications/Loading';
import DefaultLayout from '../../layouts/default'; // TODO Needed for some reason

const AuthCallback = ({ query }) => {
  const jwtToken = query.token;
  if (!jwtToken) return ErrorNotification('No token supplied');

  let decodedJwt;
  try {
    decodedJwt = jwt.decode(jwtToken);
  } catch (err) {
    return ErrorNotification('Unable to decode JWT');
  }

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useAuth();
  useEffect(() => {
    dispatch({
      type: ReducerKeys.setUser,
      payload: {
        userObject: decodedJwt
      }
    });
    console.debug('Saving user state on login', decodedJwt);
    Router.push('/');
  }, [jwtToken]);

  return (
    <Loading/>
  );
};

AuthCallback.getInitialProps = ({ query }) => {
  return { query };
};

const ErrorNotification = (message) => (
  <div>An error occurred: {message}</div>
);

export default AuthCallback;
