import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Meta from "../oldStuff/components/Meta";
import Header from "../oldStuff/components/header/Header";

import styles from "../assets/styles/styles.scss";
import Footer from "../oldStuff/components/footer/Footer";

const DefaultLayout = ({ title, children }) => (
    <Fragment>
        <Meta title={title} />
        <Header />
        {children}
        <Footer />
    </Fragment>
);

DefaultLayout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default DefaultLayout;