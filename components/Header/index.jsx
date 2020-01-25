import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const sizes = [1, 2, 3, 4, 5, 6];

const Header = ({ size, upperCase, children }) => {
    const HeadingTag = `h${size}`;
    const fontSize = `${sizes[size - 1]}rem`;

    return <HeadingTag className="headerComponent title" style={{ fontSize, textTransform: upperCase ? "uppercase" : "none" }}>{children}</HeadingTag>;
}

Header.propTypes = {
    size: PropTypes.oneOf(sizes),
    upperCase: PropTypes.bool,
    chidlren: PropTypes.node.isRequired,
};

Header.defaultProps = {
    size: 3,
    upperCase: false,
};

export default Header;
