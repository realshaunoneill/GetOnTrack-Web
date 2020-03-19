import React from 'react';
import DefaultLayout from '../layouts/default';
import GoogleMap from '../components/map/GoogleMap';
import TransportFooter from '../components/transportFooter/TransportFooter';
import SearchBox from '../components/search/SearchBox';

const Index = () => (
  <DefaultLayout
    title="Home">
    <div
      className="columns">
      <div
        className="column columnInfo">
        <h1
          className="title is-1">
          <span
            className="header-title">
                        Welcome to <br/><b>GetOnTrack</b>
          </span>
        </h1>
        <h2
          className="is-4 subtitle">
                    Your one stop solution to move and commute around Dublin
        </h2>
        <SearchBox
          changeValue={(e) => {

          }}/>
      </div>
      <div
        className="column is-three-fifths is-hidden-mobile columnMap">
        <GoogleMap/>
      </div>
      <TransportFooter/>
    </div>
  </DefaultLayout>
);

export default Index;
