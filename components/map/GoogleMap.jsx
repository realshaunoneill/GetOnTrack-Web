import React from 'react';
import GoogleMapReact from 'google-map-react';
import {usePosition} from 'use-position';
import {useData} from '../DataContext';

const Point = ({text, lat, lng, colour}) => (
  <div
    style={{
      color: 'black',
      background: `${colour}`,
      padding: '5px 5px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
    {text}
  </div>
);

const getAllPoints = ({dublinBusStops, irishRailStops, luasStops, dublinBikesStops}) => {
  try {
    console.debug({irishRailStops});
    const busPoints = dublinBusStops.map((busStop, x) => (
      (x < 300 && <Point
        key={busStop.stopid}
        text={busStop.stopid}
        lat={busStop.latitude}
        lng={busStop.longitude}
        colour={'#ffcf00'}/>)
    ));

    const trainPoints = irishRailStops.map((station, x) => (
      (x < 100 && <Point
        key={station.StationId}
        text={station.StationId}
        lat={station.StationLatitude}
        lng={station.StationLongitude}
        colour={'#05ff0c'}
      />)
    ));

    return [...busPoints];
  } catch (err) {
    console.error('Unable to get all stop points', err);
  }
};

const GoogleMap = ({center, colour}) => {
  const {latitude, longitude, timestamp, accuracy, error} = usePosition();
  const [state, dispatch] = useData();

  const allPoints = getAllPoints(state);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: 'AIzaSyBk7cQco6GEd2AfR3Ybq5Ppd-Fs9zbBbG8'}}
      defaultCenter={{lat: 53.35, lng: -6.40}}
      defaultZoom={11}
    >
      {allPoints}
    </GoogleMapReact>
  );
};

export default GoogleMap;
