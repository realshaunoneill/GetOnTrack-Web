import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const sizes = [1, 2, 3, 4, 5, 6];

const Header = ({ size, children }) => {
    const HeadingTag = `h${size}`;
    const fontSize = `${sizes[size - 1]}rem`;
    return <HeadingTag className="headerComponent title" style={{ fontSize }}>{children}</HeadingTag>;
}

Header.propTypes = {
    size: PropTypes.oneOf(sizes),
    chidlren: PropTypes.node.isRequired,
};

Header.defaultProps = {
    size: 3,
};

export default Header;
