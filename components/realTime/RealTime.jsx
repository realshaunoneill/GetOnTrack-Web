import React from 'react';
import RealTimeHeader from "./RealTimeHeader";
import RealTimeResults from "./RealTimeResults";
import GoogleMap from "../map/GoogleMap";

const RealTime = ({type, colour, icon, stopID, stopLocation, stopCoords, results}) => (
    <div className="columns realTime">
        <div className="column">
            <RealTimeHeader type={type} icon={icon} colour={colour} stopID={stopID} stopLocation={stopLocation}/>
            <br/>
            <RealTimeResults type={type} results={results}/>
        </div>
        <div className="column is-one-third">
            <GoogleMap center={stopCoords}/>
        </div>
    </div>
);

export default RealTime;