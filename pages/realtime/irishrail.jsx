import React from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import irishRail from "../../assets/img/rail.svg";

const fakeResults = [
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
];

const DublinBus = () => (
    <DefaultLayout title="Search Results">
        <RealTime type="Irish Rail" colour={"#00713D"} icon={irishRail} stopID="Heuston"
                  results={fakeResults}/>
    </DefaultLayout>
);

export default DublinBus;