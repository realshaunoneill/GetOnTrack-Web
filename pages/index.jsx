import React, { Fragment } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import "../styles/global.scss";

const Index = () => {
    return (
        <>
            <Navbar />
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <Header size={2}>GetOnTrack</Header>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Index;