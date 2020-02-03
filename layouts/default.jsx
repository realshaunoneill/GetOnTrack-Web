import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";
import Header from "../components/header/Header";

import styles from '../assets/styles/styles.scss';
import Navbar from "../components/navbar/Navbar";

const DefaultLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        <div className="hero is-fullheight">
            <div className="hero-head">
                <Navbar/>
            </div>
            <div className="hero-body">
                {children}
            </div>
        </div>
    </Fragment>
);

DefaultLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default DefaultLayout;