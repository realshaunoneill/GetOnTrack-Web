import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";

import styles from '../assets/styles/styles.scss';
import Navbar from "../components/navbar/Navbar";

const DefaultLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        <Navbar/>
        <div className="columnWrapper">
            {children}
        </div>
    </Fragment>
);

DefaultLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default DefaultLayout;