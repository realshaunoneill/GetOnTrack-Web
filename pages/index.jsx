import React from "react";
import Header from "../components/Header";

const Emphasise = ({ text, colour = "blue" }) => (
    <b class={`underline-look ${colour}`} style={{ fontFamily: "Noto Serif", fontSize: "2.1rem" }}>{text}</b>
);

const Index = () => (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <Header size={2}>
                    Welcome to <Emphasise text="GetOnTrack" />. The <Emphasise text="simple" colour="green" />, <Emphasise text="intuitive" colour="orange" /> and <Emphasise text="reliable" colour="red" /> public transport app.
                </Header>
                <br />
                Some search box here.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    </section>
);

export default Index;
