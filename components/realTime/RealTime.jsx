import React from 'react';
import RealTimeHeader from "./RealTimeHeader";
import RealTimeResults from "./RealTimeResults";
import GoogleMap from "../map/GoogleMap";

const RealTime = ({type, colour, icon, results}) => (
    <div className="columns realTime">
        <div className="column">
            <RealTimeHeader type={type} icon={icon} colour={colour}/>
            <br/><br/>
            <RealTimeResults type={type} results={results}/>
        </div>
        <div className="column is-one-third">
            <GoogleMap/>
        </div>
    </div>
);

export default RealTime;