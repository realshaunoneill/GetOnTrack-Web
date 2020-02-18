import React from 'react';
import Loader from 'react-loader-spinner';

import RealTimeResultItem from "./RealTimeResultItem";

const displayResults = (type, colour, results) => {
    if (results.length === 0 || !Array.isArray(results)) return <Loader
        className="loading has-text-centered"
        type="Puff"
        color={colour}
        height={200}
        width={200}
    />;
    return results.map(({number, name, departure, arrival, late}, x) => (
        <RealTimeResultItem key={x} type={type} number={number} name={name} departure={departure} arrival={arrival}
                            late={late}/>
    ))
};

const RealTimeResults = ({type, colour, results}) => (
    <div className="realTimeResults">
        <h1><b>{type}</b> Results:</h1>
        {displayResults(type, colour, results)};
    </div>
);

export default RealTimeResults;