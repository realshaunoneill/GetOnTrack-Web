import React, {useEffect, useState} from 'react'
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";
import {DUBLIN_BUS_YELLOW} from '../../assets/Colours';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const DublinBus = ({query}) => {
    const [allStops, setAllStops] = useState([]);
    const [stopID, setStopID] = useState(query.stop);
    const [stopLocationName, setStopLocationName] = useState("...");
    const [stopCoords, setStopCoords] = useState({});
    const [apiResults, setApiResults] = useState([]);

    const fetchData = async (stopID) => {
        // TODO Should save this to local storage
        if (allStops.length === 0) {
            const allStops = await (await fetch(`${API_URL}/graphql`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query: '{ busStop { stopid, shortname } }'})
            })).json();
            setAllStops(allStops);
            console.debug(allStops);
        }

        if (!stopID) return null;
        const stopData = await (await fetch(`${API_URL}/dublinbus/stops?stopid=${stopID}`)).json();
        console.debug({stopData});
        if (stopData.errorcode === "0" && stopData.results.length > 0) {
            setStopLocationName(stopData.results[0].shortname);
            setStopCoords({lat: stopData.results[0].latitude, lng: stopData.results[0].longitude});
        }

        const realtimeData = await (await fetch(`${API_URL}/dublinbus/live?stopid=${stopID}`)).json();
        console.debug({realtimeData})
        if (realtimeData.errorcode === "0") {
            setApiResults(realtimeData.results)
        } else if (realtimeData.errorcode === "1") {
            // No Results Found
            setApiResults(true);
        }
    };

    useEffect(() => {
        fetchData(query.stop).catch(err => {
            // Show Error Message
        });
    }, [setStopID, setStopLocationName, setStopCoords, setApiResults]);

    return (
        <DefaultLayout title="Search Results">
            <RealTime type="Dublin Bus" colour={DUBLIN_BUS_YELLOW} icon={busIcon} stopID={stopID}
                      stopLocation={stopLocationName}
                      results={apiResults} stopCoords={stopCoords}/>
        </DefaultLayout>
    );
};

DublinBus.getInitialProps = ({query}) => {
    return {query}
};


export default DublinBus;