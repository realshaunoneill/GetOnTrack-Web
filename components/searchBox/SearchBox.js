import React, {useState} from 'react';
import ServiceBox from "../header/ServiceBox";

const SearchBox = () => {
    const [currentMode, setCurrentMode] = useState("dublinBus");

    return (
        <section className="searchBox hero is-medium styledBackgroundReverse">
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
            <div className="hero-body">
                <div className="container">
                    <div className="field has-addons has-text-centered">
                        <div className="control">
                            <span className="select is-large">
                                <select>
                                    <option selected={true}>Dublin Bus</option>
                                    <option>Irish Rail</option>
                                    <option>Luas</option>
                                    <option>Dublin Bikes</option>
                                </select>
                            </span>
                        </div>
                        <div className="control is-expanded">
                            <input className="input is-large" placeholder="Start typing to search..." type="text"/>
                        </div>
                        <div className="control">
                            <a className="button is-info is-large">Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBox;