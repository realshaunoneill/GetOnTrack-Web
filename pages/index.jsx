import React from 'react'
import DefaultLayout from "../layouts/default";

const Index = () => (
  <DefaultLayout title="Home">
    <div className="columns">
      <div className="column is-one-third">
          <h1 className="title">Welcome to GetOnTrack</h1>
      </div>
      <div className="column is-two-thirds is-hidden-mobile">

      </div>
    </div>
  </DefaultLayout>
);

export default Index;