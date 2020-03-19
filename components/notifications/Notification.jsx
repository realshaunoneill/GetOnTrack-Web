import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <h1
    className="notificationMessage has-text-centered is-1" style={{ fontSize: '3rem' }}>{message}</h1>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
