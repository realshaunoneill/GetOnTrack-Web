import React from 'react';
import DefaultLayout from '../layouts/default';
import GoogleMap from '../components/map/GoogleMap';
import TransportFooter from '../components/transportFooter/TransportFooter';
import SearchBox from '../components/search/SearchBox';
import FeaturesBar from '../components/featuresBar/FeaturesBar';
import RealTimeList from '../components/realtimeList/RealtimeList';

const Index = () => (
  <DefaultLayout title="Home">
    <section className="hero is-fullheight is-dark">
      <div className="hero-body">
        <div className="header-container">
          <div className="columns is-gapless">
            <div className="column columnInfo">
              <div className="info-container">
                <h1 className="title is-1">
                <span className="header-title">
                  Welcome to <br/><b>GetOnTrack</b>
                </span>
                </h1>
                <h2 className="is-4 subtitle">
                  Your one stop solution to move and commute around Dublin
                </h2>
                <SearchBox
                  changeValue={(e) => {

                  }}/>
              </div>
            </div>
            <div className="column is-three-fifths is-hidden-mobile columnMap">
              <GoogleMap/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FeaturesBar/>
    <RealTimeList/>
  </DefaultLayout>
);

export default Index;
