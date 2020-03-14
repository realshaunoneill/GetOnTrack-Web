import React from 'react';
import RealTimeHeader from "./RealTimeHeader";
import RealTimeResults from "./RealTimeResults";
import GoogleMap from "../map/GoogleMap";
import Notification from "../notifications/Notification";

const RealTime = ({type, colour, icon, stopID, stopLocation, stopCoords, results, availableOptions, changeValue}) => (
    <div className="columns realTime">
        <div className="column">
            <RealTimeHeader type={type} icon={icon} colour={colour} stopID={stopID} stopLocation={stopLocation} availableOptions={availableOptions} changeValue={changeValue}/>
            <br/>
            {stopID ? <RealTimeResults type={type} colour={colour} results={results}/> : <Notification message="No stop selected"/>}

        </div>
        <div className="column map is-one-third"
             style={{border: `3px solid ${colour ? colour : "black"}`}}>
            <GoogleMap center={stopCoords}/>
        </div>
    </div>
);

export default RealTime;