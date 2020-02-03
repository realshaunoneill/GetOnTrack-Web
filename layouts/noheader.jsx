import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";

import styles from '../assets/styles/styles.scss';
import Navbar from "../components/navbar/Navbar";

const NoHeaderLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        <Navbar className="styledBackground"/>
        {children}
    </Fragment>
);

NoHeaderLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default NoHeaderLayout;