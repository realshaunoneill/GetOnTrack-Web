import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Meta from '../components/Meta';
import Navbar from '../components/navbar/Navbar';

import styles from '../assets/styles/styles.scss';

const DefaultLayout = ({title, children}) => {
  return (
    <Fragment>
      <Meta title={title}/>
      <Navbar/>
      {children}
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
