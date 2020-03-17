import React from 'react';
import GoogleMapReact from 'google-map-react';
import { usePosition } from 'use-position';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
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

const GoogleMap = ({ center, colour }) => {
  const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBk7cQco6GEd2AfR3Ybq5Ppd-Fs9zbBbG8' }}
      defaultCenter={{ lat: 53.35, lng: -6.40 }}
      defaultZoom={11}
    >
      <AnyReactComponent
        lat={center ? center.lat : latitude}
        lng={center ? center.lng : longitude}
        text="Current Location"
      />
    </GoogleMapReact>
  );
};

export default GoogleMap;
