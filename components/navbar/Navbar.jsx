import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Login from "../header/Login";

const Navbar = ({className}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = useCallback(() => () => setIsDropdownOpen(!isDropdownOpen), [isDropdownOpen]);

    return (
        <nav className={`${className} navbar is-fixed-top`}>
            <div className="navbar-brand">
                <Link href="/">
                    <a className={`${isDropdownOpen ? 'is-active' : ''} navbar-item navbar-title`}>
                        PlaceHolderNameHere
                    </a>
                </Link>

                <div className="navbar-burger burger" id="burgerToggle" onClick={toggleDropdown}>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </div>
            </div>

            <div className="navbar-menu" id="nav-bar">
                <div className="navbar-end">
                    <Link href="/timetables">
                        <a className="navbar-item">
                            Timetables
                        </a>
                    </Link>
                    <div className="navbar-item">
                        <Link href="/support">
                            <a className="button supportButton is-outlined">
                                Support
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <Login/>
                    </div>
                </div>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    className: PropTypes.string
};

export default Navbar;
