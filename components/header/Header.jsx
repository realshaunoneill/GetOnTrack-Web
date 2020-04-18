import React from 'react';
import SearchBox from '../search/SearchBox';
import GoogleMap from '../map/GoogleMap';

const Header = () => (
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
              <h2 className="is-4 header-subtitle">
                Your one stop solution to move and commute around Dublin
              </h2>
              <br/><br/>
              <SearchBox
                changeValue={(e) => {

                }}/>
            </div>
          </div>
          <div className="column is-three-fifths is-hidden-mobile is-hidden-tablet columnMap">
            <GoogleMap/>
          </div>
        </div>
      </div>
    </div>
    <div className="design-container">
      <div className="design"/>
    </div>
  </section>
);

export default Header;
