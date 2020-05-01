import React from 'react';
import DefaultLayout from '../layouts/default';

import Header from '../components/header/Header';
import FeaturesBar from '../components/featuresBar/FeaturesBar';
import RealTimeList from '../components/realTime/RealTimeList';

const Index = () => {
  return (
    <DefaultLayout title="Home">
      <Header/>
      <FeaturesBar/>
      <RealTimeList/>
    </DefaultLayout>
  );
}

export default Index;
