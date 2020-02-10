import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faSearch} from "@fortawesome/free-solid-svg-icons";

const TransportItem = ({type, icon, color}) => (
    <div className="column transportItem has-text-centered" style={{backgroundColor: color}}>
        <div className="columns is-vcentered is-gapless">
            <div className="column is-3">
                <img src={icon}/>
            </div>
            <div className="column">
                <b>{type}</b><br/>
                <span>2 stops </span>
            </div>
            <div className="column is-2">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>
    </div>
);

export default TransportItem;