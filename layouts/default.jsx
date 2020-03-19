import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Meta from '../components/Meta';

import styles from '../assets/styles/styles.scss';
import Navbar from '../components/navbar/Navbar';
import AuthProvider from '../components/AuthContext';

const DefaultLayout = ({ title, children }) => {
  return (
    <Fragment>
      <Meta
        title={title}/>
      <AuthProvider>
        <Navbar/>
        {children}
      </AuthProvider>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
