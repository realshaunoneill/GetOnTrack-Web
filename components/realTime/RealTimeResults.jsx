import React from 'react';

import RealTimeResultItem from "./RealTimeResultItem";
import Loading from "../notifications/Loading";
import Notification from "../notifications/Notification";

const displayResults = (type, colour, results) => {
    if (!Array.isArray(results) || results === true) {
        // Finished loading and there was no results
        return <Notification message="No results found"/>
    }
    if (Array.isArray(results) && results.length === 0) return <Loading colour={colour}/>;

    return results.map(({route, origin, destination, duetime, late}, x) => (
        <RealTimeResultItem key={x} type={type} route={route} origin={origin} destination={destination} arrival={duetime} late={late}/>
    ))
};

const RealTimeResults = ({type, colour, results}) => (
    <div className="realTimeResults">
        <h1><b>{type}</b> Results:</h1>
        {displayResults(type, colour, results)};
    </div>
);

export default RealTimeResults;