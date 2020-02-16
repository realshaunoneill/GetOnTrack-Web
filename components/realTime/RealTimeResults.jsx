import React from 'react';
import RealTimeResultItem from "./RealTimeResultItem";

const displayResults = (type, results) => {
    if (results.length === 0 || !Array.isArray(results)) return <span>Loading</span>;
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