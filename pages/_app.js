import React from "react";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
);

export default App;
