import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faClock, faMobileAlt, faBookmark} from "@fortawesome/free-solid-svg-icons";

const FeatureItem = ({title, icon, columnSize}) => (
  <div className={`column has-text-centered ${columnSize || null}`}>
    <div className="feature-item">
      <FontAwesomeIcon className="icon is-large" icon={icon}/>
      <p className="subtitle">{title}</p>
    </div>
  </div>
);

const FeaturesBar = () => (
  <div className="features-bar">
    <div className="columns is-centered">
      <FeatureItem title="Live up-to-date arrival times!" icon={faClock} columnSize="is-one-fifth"/>
      <FeatureItem title="Check out the easy to use mobile app" icon={faMobileAlt} columnSize="is-one-third"/>
      <FeatureItem title="Bookmark your favourite stops!" icon={faBookmark} columnSize="is-one-fifth"/>
    </div>
  </div>
);

export default FeaturesBar;
