import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const Loading = ({ colour = 'black' }) => (
  <div className="has-text-centered">
    <Loader
      className="loading has-text-centered"
      type="Puff"
      color={colour}
      height={200}
      width={200}
    />
    <br/>
    <p className="loading-text">Loading.....</p>
  </div>
);

Loading.propTypes = {
  colour: PropTypes.string
};

export default Loading;
