import React from 'react';
import PropTypes from 'prop-types';

const RealTimeResultItem = ({ type, route, origin, destination, arrival, late }) => (
  <nav className="level realTimeResultItem">
    {route && (
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">{type} ROUTE</p>
          <p className="title">{route}</p>
        </div>
      </div>
    )}
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Origin</p>
        <p className="title">{origin}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Destination</p>
        <p className="title">{destination}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Arriving</p>
        <p className="title">{(arrival ? `${arrival} (${late})` : null)}</p>
      </div>
    </div>
  </nav>
);

RealTimeResultItem.propTypes = {
  type: PropTypes.string,
  route: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  arrival: PropTypes.string,
  late: PropTypes.number
};

export default RealTimeResultItem;
