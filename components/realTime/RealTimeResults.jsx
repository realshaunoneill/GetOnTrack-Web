import React from 'react';

import RealTimeResultItem from "./RealTimeResultItem";
import Loading from "../loading/Loading";

const displayResults = (type, colour, results) => {
    if (results === true) {
        // Finished loading and there was no results
        return <h1 className="has-text-centered title is-1">..No results found..</h1>
    }
    if (results.length === 0 || !Array.isArray(results)) return <Loading colour={colour}/>;

    return results.map(({route, destination, departureduetime, duetime, late}, x) => (
        <RealTimeResultItem key={x} type={type} number={route} name={destination} departure={departureduetime} arrival={duetime}
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