import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

import Meta from "../components/Meta";

import styles from '../assets/styles/styles.scss';
import Navbar from "../components/navbar/Navbar";
import AuthContext from "../components/AuthContext";

const DefaultLayout = ({title, children}) => {
    const [authUser, setAuthUser] = useState(null);

    return (
        <Fragment>
            <Meta title={title}/>
            <AuthContext.Provider value={{
                authUser: authUser,
                setAuthUser: setAuthUser
            }}>
                <Navbar/>
                {children}
            </AuthContext.Provider>
        </Fragment>
    );
};

DefaultLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default DefaultLayout;