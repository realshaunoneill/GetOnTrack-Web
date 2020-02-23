import React from 'react';

const RealTimeResultItem = ({type, number, name, departure, arrival, late}) => (
    <nav className="level realTimeResultItem">
        <div className="level-item has-text-centered">
            <div>
                <p className="heading">{type} NO</p>
                <p className="title">{number}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <p className="heading">Destination</p>
                <p className="title">{name}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <p className="heading">Departure</p>
                <p className="title">{departure}</p>
            </div>
        </div>
        <div className="level-item has-text-centered">
            <div>
                <p className="heading">Arriving</p>
                <p className="title">{`${arrival} + ${late} mins`}</p>
            </div>
        </div>
    </nav>
);

export default RealTimeResultItem;