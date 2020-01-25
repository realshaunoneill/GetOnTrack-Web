import React from "react";
import PropTypes from "prop-types";

const ServiceBox = ({ title, type }) => (
    <div className={`${type} column serviceBox`}>
        <span className="service-title">
            {title}
        </span>
    </div>
);

ServiceBox.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["dublinBus", "irishRail", "luas", "dublinBikes"])
};

export default ServiceBox;