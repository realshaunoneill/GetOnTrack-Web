import React, {useEffect, useState} from 'react'
import Router from 'next/router';
import DefaultLayout from "../../layouts/default";
import RealTime from "../../components/realTime/RealTime";

import busIcon from "../../assets/img/bus.svg";
import {DUBLIN_BUS_YELLOW} from '../../assets/Colours';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const DublinBus = ({query}) => {
    const [allRoutes, setAllStops] = useState([]);
    const [stopID, setStopID] = useState(query.stop);
    const [stopLocationName, setStopLocationName] = useState("...");
    const [stopCoords, setStopCoords] = useState({});
    const [apiResults, setApiResults] = useState([]);

    const fetchData = async (stopID) => {
        // TODO Should save this to local storage
        if (allRoutes.length === 0) {
            const allRoutes = await (await fetch(`${API_URL}/graphql`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({query: '{ busRoute { route } }'})
            })).json();
            setAllStops(allRoutes.data.busRoute);
            console.debug(allRoutes);
        }

        if (!stopID) return null;
        setStopID(stopID);

        const stopData = await (await fetch(`${API_URL}/dublinbus/stops?stopid=${stopID}`)).json();
        console.debug({stopData});
        setStopLocationName(stopData.results[0].shortname);
        setStopCoords({lat: stopData.results[0].latitude, lng: stopData.results[0].longitude});

        const realtimeData = await (await fetch(`${API_URL}/dublinbus/live?stopid=${stopID}`)).json();
        console.debug({realtimeData});
        setApiResults(realtimeData.results);
    };

    useEffect(() => {
        fetchData(query.stop).catch(err => {
            // Show Error Message
        });
    }, [setAllStops, setStopID, setStopLocationName, setStopCoords, setApiResults]);

    return (
        <DefaultLayout title="Search Results">
            <RealTime type="Dublin Bus" colour={DUBLIN_BUS_YELLOW} icon={busIcon} stopID={stopID}
                      stopLocation={stopLocationName}
                      results={apiResults} stopCoords={stopCoords} availableOptions={allRoutes.map(item => (item.route))} changeValue={(stop) => {
                Router.push(Router.pathname, `/realtime/dublinbus?stop=${stop}`, {shallow: true});
                fetchData(stop);
            }}/>
        </DefaultLayout>
    );
};

DublinBus.getInitialProps = ({query}) => {
    return {query}
};


export default DublinBus;