import React from 'react';
import GoogleMapReact from 'google-map-react';

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

const GoogleMap = () => (
    <GoogleMapReact
        defaultCenter={{"lat": 53.35, "lng": -6.40}}
        defaultZoom={11}
    >

        <AnyReactComponent
            lat={53.35}
            lng={-6.40}
            text="My Marker"
        />
    </GoogleMapReact>
);

export default GoogleMap;