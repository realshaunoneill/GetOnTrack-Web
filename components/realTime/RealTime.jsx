import React from 'react';
import RealTimeHeader from "./RealTimeHeader";
import RealTimeResults from "./RealTimeResults";
import GoogleMap from "../map/GoogleMap";
import Notification from "../notifications/Notification";

const RealTime = ({type, colour, icon, stopID, stopLocation, stopCoords, results}) => (
    <div className="columns realTime">
        <div className="column">
            <RealTimeHeader type={type} icon={icon} colour={colour} stopID={stopID} stopLocation={stopLocation}/>
            <br/>
            {stopID ? <RealTimeResults type={type} colour={colour} results={results}/> : <Notification message="No stop selected"/>}

        </div>
        <div className="column map is-one-third">
            <GoogleMap center={stopCoords}/>
        </div>
    </div>
);

export default RealTime;