import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";

import styles from '../assets/styles/styles.scss';
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const NoHeaderLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        <Navbar className="styledBackground"/>
        {children}
        <Footer/>
    </Fragment>
);

NoHeaderLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NoHeaderLayout;