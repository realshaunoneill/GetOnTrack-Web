import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import "./style.scss";

const NavbarLink = ({ href, minor = false, children }) => {
    const router = useRouter();
    const isCurrentPath = router.pathname === href;
    const ItemWrapper = isCurrentPath ? "span" : "a";
    let wrapperProps = {};
    if (!isCurrentPath) wrapperProps.href = href;
    return (
        <ItemWrapper {...wrapperProps} className={`navbar-item${minor ? " minor-nav-item" : ""}${isCurrentPath ? " is-active" : ""}`}>
            {children}
        </ItemWrapper>
    );
}

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = useCallback(() => setIsDropdownOpen(!isDropdownOpen));
    return (
        <nav className="navbar is-fixed-top is-white is-spaced">
            <div className="navbar-head">
                <NavbarLink href="/">
                    <Header size={3}>GetOnTrack</Header>
                </NavbarLink>
                <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" onClick={toggleDropdown}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu${isDropdownOpen ? " is-active" : ""}`}>
                <div className="navbar-end">
                    <NavbarLink minor={true} href="/timetables">
                        timetables
                    </NavbarLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;