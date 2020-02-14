import React from 'react';
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

const TransportItem = ({type, icon, color, link, isLight = false}) => (
    <Link href={link}>
        <a className={`column transportItem has-text-centered ${isLight ? 'light' : ''}`} title={`Real Time Information - ${type}`} style={{backgroundColor: color}}>
            <div className="columns is-vcentered is-gapless">
                <div className="column is-3">
                    <img src={icon} alt={type}/>
                </div>
                <div className="column">
                    <b>{type}</b><br/>
                    <span>2 stops </span>
                </div>
                <div className="column is-2">
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
            </div>
        </a>
    </Link>
);

export default TransportItem;