import React from 'react';

const TransportItem = ({type, icon, color}) => (
    <div className="column transportItem has-text-centered" style={{backgroundColor: color}}>
        <div className="columns">
            <div className="column">
                <img src={icon}/>
            </div>
            <div className="column">
                <b>{type}</b><br/>
                <span>2 stops </span>
            </div>
            <div className="column">
                icon
            </div>
        </div>
    </div>
);

export default TransportItem;