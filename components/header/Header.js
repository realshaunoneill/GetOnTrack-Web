import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar";

const Header = () => (
    <section className="hero is-fullheight gradient">
        <div className="hero-head">
            <Navbar/>
        </div>
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="tile">
                    <span className="header-title">

                    </span>
                </h1>
            </div>
        </div>
    </section>
);

export default Header;