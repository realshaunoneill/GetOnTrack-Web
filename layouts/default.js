import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Meta from "../components/Meta";

const DefaultLayout = ({title, children}) => (
    <Fragment>
        <Meta title={title}/>
        {children}
    </Fragment>
);

export default DefaultLayout;