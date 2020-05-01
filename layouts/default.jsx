import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';

import Meta from '../components/Meta';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

import {ReducerKeys, useData} from '../components/DataContext';

import styles from '../assets/styles/styles.scss';

const API_URL = (process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://api.getontrack.ie');

const DefaultLayout = ({title, children}) => {
  const [state, dispatch] = useData();

  const fetchData = async () => {
    console.debug('Starting to fetch all stop information..');
    const apiData = await (await fetch(`${API_URL}/graphql`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: '{ busStop { stopid, shortname, latitude, longitude }, trainStation { StationId, StationDesc, StationLatitude, StationLongitude}, luasStops {shortName, coordinates {latitude, longitude}}, bikeStation {name, position {lat, lng}} }'})
    })).json();
    console.debug('Fetched API stop information', apiData);
    dispatch({
      type: ReducerKeys.setStops,
      payload: {
        dublinBusStops: apiData.data.busStop,
        irishRailStops: apiData.data.trainStation,
        luasStops: apiData.data.luasStops,
        dublinBikesStops: apiData.data.bikeStation
      }
    });
  };

  useEffect(() => {
    fetchData().catch(err => {
      console.error('Unable to fetch API data', err);
    });
  }, []);

  return (
    <Fragment>
      <Meta title={title}/>
      <Navbar/>
      {children}
      <Footer/>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
