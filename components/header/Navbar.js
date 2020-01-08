import React, {useCallback, useState} from 'react';
import Link from 'next/link'
import Login from "./Login";

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = useCallback(() => () => setIsDropdownOpen(!isDropdownOpen), [isDropdownOpen]);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className={`${isDropdownOpen ? 'is-active' : ''} navbar-item navbar-title`}>
                            Transport Ireland+
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
                        <div className="navbar-item">
                            <Login/>
                        </div>
                        <div className="navbar-item">
                            <Link href="/support">
                                <a className="button supportButton is-outlined">
                                    Support
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
