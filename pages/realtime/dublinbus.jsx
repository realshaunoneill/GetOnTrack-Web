import React from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";

const fakeResults = [
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
];

const DublinBus = () => {
    const [apiResults, setApiResults] = fakeResults;

    return (
        <DefaultLayout title="Search Results">
            <RealTime type="Dublin Bus" colour={"#FFCC01"} icon={busIcon} stopID={123} stopLocation="Blanchardstown"
                      results={apiResults} stopCoords={{"lat": 52.35, "lng": -6.40}}/>
        </DefaultLayout>
    );
}

export default DublinBus;