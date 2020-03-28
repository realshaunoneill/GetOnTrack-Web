import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Meta from '../components/Meta';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

import styles from '../assets/styles/styles.scss';

const DefaultLayout = ({ title, children }) => {
  return (
    <Fragment>
      <Meta title={title}/>
      <Navbar/>
      {children}
      <Footer/>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
