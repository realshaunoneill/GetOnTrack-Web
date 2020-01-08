import React from 'react';
import Navbar from "./Navbar";
import ServiceBox from "./ServiceBox";

const Header = () => (
    <section className="hero is-fullheight gradient">
        <div className="hero-head">
            <Navbar/>
        </div>
        <div className="hero-body">
            <div className="container">
                <div className="header">
                    <h1 className="header-title">
                        Transport Ireland+
                    </h1>
                    <h2 className="header-subtitle">
                        &bull;&nbsp;Your premium resource for public transport information
                    </h2>
                </div>
            </div>
        </div>
        <div className="hero-foot">
            <div className="container has-text-centered">
                <div className="columns">
                    <ServiceBox title="Dublin Bus" type="dublinBus"/>
                    <ServiceBox title="Irish Rail" type="irishRail"/>
                    <ServiceBox title="Luas" type="luas"/>
                    <ServiceBox title="Dublin Bikes" type="dublinBikes"/>
                </div>
            </div>
        </div>
    </section>
);

export default Header;