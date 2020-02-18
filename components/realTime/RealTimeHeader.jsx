import React from 'react';
import Link from "next/link";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "../search/SearchBox";

const RealTimeHeader = ({type, icon, colour, stopID, stopLocation}) => (
    <div className="realTimeHeader" style={{backgroundColor: colour}}>
        <div className="columns is-multiline is-vcentered">
            <div className="column is-narrow">
                <Link href="/">
                    <a><FontAwesomeIcon icon={faChevronCircleLeft} title="Back to Home"/></a>
                </Link>
            </div>
            <div className="column is-narrow">
                <img src={icon} alt={type}/>
            </div>
            <div className="column">
                <h1><b>{type}</b></h1>
                {stopID && stopLocation ? <span><b>{stopID}</b> / {<i>{stopLocation}</i>}</span> : <span>Search for a stop location...</span>}
            </div>
        </div>
        {!stopID || !stopLocation ? <SearchBox/> : null}
    </div>
);

export default RealTimeHeader;