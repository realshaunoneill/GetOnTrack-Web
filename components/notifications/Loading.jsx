import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({colour}) => (
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

export default Loading;