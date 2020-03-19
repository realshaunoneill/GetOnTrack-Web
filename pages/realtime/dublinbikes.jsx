import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layouts/default';
import RealTime from '../../components/realTime/RealTime';

import bikeIcon from '../../assets/img/bike.svg';
import { DUBLIN_BIKES_BLUE } from '../../assets/Colours';

const fakeResults = [
  { number: 120, name: 'Cork', departure: '18:00', arrival: '19:00', late: '6 mins' },
  { number: 123, name: 'Cork', departure: '18:00', arrival: '19:00', late: '6 mins' },
  { number: 124, name: 'Cork', departure: '18:00', arrival: '19:00', late: '6 mins' },
  { number: 126, name: 'Cork', departure: '18:00', arrival: '19:00', late: '6 mins' }
];

const DublinBikes = ({ query }) => {
  const [apiResults, setApiResults] = useState([]);

  const fetchData = async (stopID) => {

  };

  useEffect(() => {
    try {
      setTimeout(() => {
        setApiResults(fakeResults);
      }, 5000);
    } catch (err) {

    }
  });

  return (
    <DefaultLayout title="Search Results">
      <RealTime
        type="Dublin Bikes"
        colour={DUBLIN_BIKES_BLUE}
        icon={bikeIcon}
        stopID={123}
        stopLocation="Blanchardstown"
        results={apiResults}
        stopCoords={{ lat: 52.35, lng: -6.40 }}/>
    </DefaultLayout>
  );
};

DublinBikes.getInitialProps = ({ query }) => {
  return { query };
};

export default DublinBikes;
