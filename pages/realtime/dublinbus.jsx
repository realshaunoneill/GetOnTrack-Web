import React, {useEffect, useState} from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";
import {DUBLIN_BUS_YELLOW} from '../../assets/Colours';

const DublinBus = ({query}) => {
    const [stopID, setStopID] = useState(query.stop);
    const [stopLocation, setStopLocation] = useState("...");
    const [apiResults, setApiResults] = useState([]);

    const fetchData = async (stopID) => {
        if (!stopID) return null;

        const data = await (await fetch(`https://api.getontrack.ie/dublinbus/live?stopid=${stopID}`)).json();
        if (data.errorcode === "0") {
            console.log(data)
            setApiResults(data.results)
        } else if (data.errorcode === "1") {

        }
    };

    useEffect(() => {
        fetchData(query.stop).catch(err => {
            // Show Error Message
        });
    }, [setStopID, setStopLocation, setApiResults]);

    return (
        <DefaultLayout title="Search Results">
            <RealTime type="Dublin Bus" colour={DUBLIN_BUS_YELLOW} icon={busIcon} stopID={stopID}
                      stopLocation={stopLocation}
                      results={apiResults} stopCoords={{"lat": 52.35, "lng": -6.40}}/>
        </DefaultLayout>
    );
};

DublinBus.getInitialProps = ({query}) => {
    return {query}
};


export default DublinBus;