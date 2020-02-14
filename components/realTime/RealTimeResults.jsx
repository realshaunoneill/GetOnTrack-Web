import React from 'react';
import RealTimeResultItem from "./RealTimeResultItem";

const RealTimeResults = ({type, results}) => (
    <div className="realTimeResults">
        <h1><b>{type}</b> Results:</h1>
        <RealTimeResultItem type={type} number={120} name="Dublin" departure="18:00" arrival="19:00" late="6 mins"/>
        <RealTimeResultItem type={type} number={120} name="Dublin" departure="18:00" arrival="19:00" late="6 mins"/>
        <RealTimeResultItem type={type} number={120} name="Dublin" departure="18:00" arrival="19:00" late="6 mins"/>
        <RealTimeResultItem type={type} number={120} name="Dublin" departure="18:00" arrival="19:00" late="6 mins"/>
    </div>
);

export default RealTimeResults;