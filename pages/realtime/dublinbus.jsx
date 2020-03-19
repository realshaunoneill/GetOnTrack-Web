import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import DefaultLayout from '../../layouts/default';
import RealTime from '../../components/realTime/RealTime';

import busIcon from '../../assets/img/bus.svg';
import { DUBLIN_BUS_YELLOW } from '../../assets/Colours';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const DublinBus = ({ query }) => {
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
    try {
      clearState();

      // TODO Should save this to local storage
      if (allRoutes.length === 0) {
        const allRoutes = await (await fetch(`${API_URL}/graphql`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: '{ busStop { stopid, shortname } }' })
        })).json();
        setAllRoutes(allRoutes.data.busStop);
        console.debug({ allRoutes });
      }

      if (!stopID) return null;
      setStopID(stopID);

      // GraphQL Query
      const apiResponse = (await (await fetch(`${API_URL}/graphql`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: `{ busStop(stopid: "${stopID}") { shortname, latitude, longitude, live {route, duetime, destination, origin, late} } }` })
      })).json()).data.busStop[0];
      console.debug({ apiResponse });
      setStopLocationName(apiResponse.shortname);
      setStopCoords({ lat: apiResponse.latitude, lng: apiResponse.longitude });

      if (!apiResponse.live || apiResponse.live.length === 0) return setApiResults(true);
      setApiResults(apiResponse.live); // TODO Make sure this returns correctly
    } catch (err) {
      console.error(`Unable to fetch API response for Dublin Bus: ${err.stack}`);
      setApiResults(true);
    }
  };

  useEffect(() => {
    fetchData(query.stop).catch(err => {
      // Show Error Message
    });
  }, [setAllRoutes, setStopID, setStopLocationName, setStopCoords, setApiResults]);

  return (
    <DefaultLayout title="Search Results">
      <RealTime
        type="Dublin Bus"
        colour={DUBLIN_BUS_YELLOW}
        icon={busIcon}
        stopID={stopID}
        stopLocation={stopLocationName}
        results={apiResults}
        stopCoords={stopCoords}
        availableOptions={allRoutes.map(item => (`${item.shortname} - ${item.stopid}`))}
        changeValue={(stop) => {
          if (stop.split('-').length > 1) stop = stop.split('-')[1].trim();
          Router.push(Router.pathname, `/realtime/dublinbus?stop=${stop}`, { shallow: true });
          fetchData(stop);
        }}/>
    </DefaultLayout>
  );
};

DublinBus.getInitialProps = ({ query }) => {
  return { query };
};

export default DublinBus;
