import React, { Fragment } from 'react';
import RealTimeResultItem from '../realTime/RealTimeResultItem';
import Notification from './Notification';

const NoResultsFound = ({ type }) => (
  <Fragment>
    <Notification
      message="No results found"/>
    <br/>
    <div
      className="realTimeResults">
      <RealTimeResultItem
        type={type}/>
      <RealTimeResultItem
        type={type}/>
      <RealTimeResultItem
        type={type}/>
      <RealTimeResultItem
        type={type}/>
      <RealTimeResultItem
        type={type}/>
      <RealTimeResultItem
        type={type}/>
    </div>
  </Fragment>
);

export default NoResultsFound;
