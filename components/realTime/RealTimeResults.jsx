import React from 'react';
import RealTimeResultItem from "./RealTimeResultItem";

const RealTimeResults = ({type, results}) => (
    <div className="realTimeResults">
        <h1><b>{type}</b> Results:</h1>
        {results.map(({number, name, departure, arrival, late}) => (
            <RealTimeResultItem type={type} number={number} name={name} departure={departure} arrival={arrival}
                                late={late}/>
        ))};
    </div>
);

export default RealTimeResults;