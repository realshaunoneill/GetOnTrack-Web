import React from 'react';
import Navbar from "./Navbar";

const Header = () => (
    <section className="hero is-large styledBackground">
        <div className="hero-head">
            <Navbar/>
        </div>
        <div className="hero-body">
            <div className="container">
                <div className="header">
                    <h1 className="header-title">
                        Get OnTrack
                    </h1>
                    <h2 className="header-subtitle">
                        &bull;&nbsp;Your premium resource for public transport information
                    </h2>
                </div>
            </div>
        </div>
    </section>
);

export default Header;