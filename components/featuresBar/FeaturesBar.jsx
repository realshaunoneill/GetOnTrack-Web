import React from 'react';

const FeatureItem = ({title, subtitle}) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">{title}</p>
      <p className="title">{subtitle}</p>
    </div>
  </div>
);

const FeaturesBar = () => (
  <div className="level">
    <FeatureItem title="Feature 1" subtitle="Loads" />
    <FeatureItem title="Feature 1" subtitle="Loads" />
    <FeatureItem title="Feature 1" subtitle="Loads" />
  </div>
);

export default FeaturesBar;