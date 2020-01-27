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
                {/* TODO: If on MacOS put the word return in brackets next to enter. */}
                <div className="has-text-centered"><i>Hint: Press enter to search</i></div>
                <br />
                <br />
                <div className="has-text-centered">
                    <a className="button is-medium" style={{ border: "none", cursor: "default" }}>Choose your service:</a>
                    <a className="button is-medium">A dropdown button</a>
                    {/* I'm drunk on Apple Juice, this is awful and I don't deserve to know anything about anything because of this */}
                    <a className="button is-medium" style={{ border: "none", color: "white", cursor: "default" }}>Choose your service:</a>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    </section>
);

export default Index;
