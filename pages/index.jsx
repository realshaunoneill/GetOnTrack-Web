import React from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

const Emphasise = ({ text, colour = "blue" }) => (
    <b class={`underline-look ${colour}`} style={{ fontFamily: "Noto Serif", fontSize: "2.1rem" }}>{text}</b>
);

const Index = () => (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <Header size={2}>
                    Welcome to <Emphasise text="GetOnTrack" />.<span className="is-hidden-mobile"> The <Emphasise text="simple" colour="green" />, <Emphasise text="intuitive" colour="orange" /> and <Emphasise text="reliable" colour="red" /> public transport app.</span>
                </Header>
                <br />
                <br />
                <SearchBox />
                <br />
                <br />
                <br />
                <div className="columns searchColumns">
                    <div className="column is-two-fifths has-text-right">
                        <a className="button is-medium" style={{ border: "none", paddingRight: 0, cursor: "default" }}>Choose your service:</a>
                    </div>
                    <div className="column">
                        <a className="button is-medium">A dropdown button</a>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    </section>
);

export default Index;
