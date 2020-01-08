import React, {useState} from 'react';
import ServiceBox from "../header/ServiceBox";

const SearchBox = () => {
    const [currentMode, setCurrentMode] = useState("dublinBus");

    return (
        <div className="searchBox hero is-medium styledBackgroundReverse">
            <div className="hero-head">
                <div className="container has-text-centered">
                    <div className="columns">
                        <ServiceBox title="Dublin Bus" type="dublinBus"/>
                        <ServiceBox title="Irish Rail" type="irishRail"/>
                        <ServiceBox title="Luas" type="luas"/>
                        <ServiceBox title="Dublin Bikes" type="dublinBikes"/>
                    </div>
                </div>
            </div>
            <div className="hero-body has-text-centered">
                <div className="field">
                    <input className="input" type="text"/>
                </div>
            </div>
        </div>
    );
};

export default SearchBox;