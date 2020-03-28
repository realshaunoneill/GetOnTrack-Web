import React from 'react';

const FeatureItem = ({title, subtitle}) => (
  <div className="column has-text-centered">
    <div className="feature-item">
      <p className="heading">{title}</p>
      <p className="title">{subtitle}</p>
    </div>
  </div>
);

const FeaturesBar = () => (
  <div className="columns features-bar">
    <FeatureItem title="Feature 1" subtitle="Loads"/>
    <FeatureItem title="Feature 1" subtitle="Loads"/>
    <FeatureItem title="Feature 1" subtitle="Loads"/>
  </div>
);

export default FeaturesBar;