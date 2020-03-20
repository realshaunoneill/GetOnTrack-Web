import React, { useState, useEffect } from 'react';
import DefaultLayout from '../../layouts/default';
import RealTime from '../../components/realTime/RealTime';
import Router from 'next/router';

import irishRail from '../../assets/img/rail.svg';
import { IRISH_RAIL_GREEN } from '../../assets/Colours';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const IrishRail = ({ query }) => {
  const [allRoutes, setAllRoutes] = useState([]);
  const [stopID, setStopID] = useState(query.stop);
  const [stopLocationName, setStopLocationName] = useState('...');
  const [stopCoords, setStopCoords] = useState({});
  const [apiResults, setApiResults] = useState([]);

  const clearState = () => {
    setStopID(null);
    setStopLocationName('');
    setStopCoords({});
    setApiResults([]);
  };

  const fetchData = async (stopID) => {
    clearState();

    if (allRoutes.length === 0) {
      const allRoutes = await (await fetch(`${API_URL}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: '{ trainStation { StationCode, StationDesc } }' })
      })).json();
      setAllRoutes(allRoutes.data.trainStation);
      console.debug('Fetched all available Irish Rail stations', allRoutes);
    }

    if (!stopID) return null;
    setStopID(stopID);

    // GraphQL Query
    const apiResponse = (await (await fetch(`${API_URL}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ trainStation(station: "${stopID}") { StationCode, StationDesc, StationLatitude, StationLongitude, live {Destination, Origin, Duein, Late} } }` })
    })).json()).data.trainStation[0];
    console.debug('Fetched Irish Rail live station information', stopID, apiResponse);

    setStopLocationName(apiResponse.StationDesc);
    setStopCoords({ lat: apiResponse.StationLatitude, lng: apiResponse.StationLongitude });

    if (!apiResponse.live || apiResponse.live.length === 0) return setApiResults(true);
    setApiResults(apiResponse.live.map(item => ({
      destination: item.Destination,
      origin: item.Origin,
      duetime: item.Duein,
      late: item.Late
    })));
  };

  useEffect(() => {
    fetchData(query.stop).catch(err => {

    });
  }, [setAllRoutes, setStopID, setStopLocationName, setStopCoords, setApiResults]);

  return (
    <DefaultLayout title="Search Results">
      <RealTime
        type="Irish Rail"
        colour={IRISH_RAIL_GREEN}
        icon={irishRail}
        stopID={stopID}
        stopLocation={stopLocationName}
        stopCoords={stopCoords}
        results={apiResults}
        availableOptions={allRoutes.map(item => `${item.StationDesc} - ${item.StationCode}`)}
        changeValue={(stop) => {
          if (stop.split('-').length > 1) stop = stop.split('-')[1].trim();
          Router.push(Router.pathname, `/realtime/irishrail?stop=${stop}`, { shallow: true });
          fetchData(stop);
        }}/>
    </DefaultLayout>
  );
};

IrishRail.getInitialProps = ({ query }) => {
  return { query };
};

export default IrishRail;
