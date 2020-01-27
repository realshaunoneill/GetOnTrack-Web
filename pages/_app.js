import React, { useEffect } from "react";
import feather from "feather-icons";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

const App = ({ Component, pageProps }) => {
    useEffect(feather.replace);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default App;
