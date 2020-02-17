import React, {useEffect, useState} from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";
import {DUBLIN_BUS_YELLOW} from '../../assets/Colours';

const fakeResults = [
    {number: 120, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 123, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 124, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
    {number: 126, name: "Cork", departure: "18:00", arrival: "19:00", late: "6 mins"},
];

const DublinBus = () => {
    const [apiResults, setApiResults] = useState([]);

    useEffect(() => {
        try {
            setTimeout(() => {
                setApiResults(fakeResults);
            }, 5000)
        } catch (err) {

        }
    });

    return (
        <DefaultLayout title="Search Results">
            <RealTime type="Dublin Bus" colour={DUBLIN_BUS_YELLOW} icon={busIcon} stopID={123} stopLocation="Blanchardstown"
                      results={apiResults} stopCoords={{"lat": 52.35, "lng": -6.40}}/>
        </DefaultLayout>
    );
};

export default DublinBus;