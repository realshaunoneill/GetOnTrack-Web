import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";
import Header from "../components/header/Header";

import styles from '../assets/styles/styles.scss';
import Footer from "../components/footer/Footer";

const DefaultLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        <Header/>
        {children}
        <Footer/>
    </Fragment>
);

export default DefaultLayout;