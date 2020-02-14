import React from 'react';
import SearchBox from "../search/SearchBox";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const RealTimeHeader = ({type, icon, colour}) => (
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
                <span>Stop ID / Stop Location</span>
            </div>
        </div>
        <SearchBox/>
    </div>
);

export default RealTimeHeader;