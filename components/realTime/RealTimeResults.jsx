import React from 'react';
import Loader from 'react-loader-spinner';

import RealTimeResultItem from "./RealTimeResultItem";

const displayResults = (type, results) => {
    if (results.length === 0 || !Array.isArray(results)) return <Loader
        className="loading has-text-centered"
        type="Puff"
        color="#000000"
        height={"15rem"}
        width={"15rem"}
    />;
    return results.map(({number, name, departure, arrival, late}) => (
        <RealTimeResultItem type={type} number={number} name={name} departure={departure} arrival={arrival}
                            late={late}/>
    ))
};

const RealTimeResults = ({type, results}) => (
    <div className="realTimeResults">
        <h1><b>{type}</b> Results:</h1>
        {displayResults(type, results)};
    </div>
);

export default RealTimeResults;