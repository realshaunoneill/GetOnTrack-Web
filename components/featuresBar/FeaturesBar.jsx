import React from 'react';

const FeatureItem = ({title, subtitle, columnSize}) => (
  <div className={`column has-text-centered ${columnSize || null}`}>
    <div className="feature-item">
      <p className="heading">{title}</p>
      <p className="title">{subtitle}</p>
    </div>
  </div>
);

const FeaturesBar = () => (
  <div className="columns is-centered features-bar">
    <FeatureItem title="Feature 1" subtitle="Loads" columnSize="is-one-fifth"/>
    <FeatureItem title="Feature 1" subtitle="Loads" columnSize="is-one-third"/>
    <FeatureItem title="Feature 1" subtitle="Loads" columnSize="is-one-fifth"/>
  </div>
);

export default FeaturesBar;
