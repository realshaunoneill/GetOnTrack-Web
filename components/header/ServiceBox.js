import React from 'react';
import PropTypes from 'prop-types';

const ServiceBox = ({title, url, type}) => (
    <a className={`${type} column serviceBox`} title={title}>
        <span className="service-title">
            {title}
        </span>

    </a>
);

ServiceBox.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    type: PropTypes.oneOf(["dublinBus", "irishRail", "luas", "dublinBikes"])
}

export default ServiceBox;