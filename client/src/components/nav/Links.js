import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ drawerClose }) => {
    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink
                    to="/portfolio"
                    className="nav__link"
                    activeClassName="nav__selected"
                    onClick={drawerClose}
                >
                    Portfolio
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                    to="/about"
                    className="nav__link"
                    activeClassName="nav__selected"
                    onClick={drawerClose}
                >
                    About
                </NavLink>
            </li>
            <li className="nav__item">
                <NavLink
                    to="/contacts"
                    className="nav__link"
                    activeClassName="nav__selected"
                    onClick={drawerClose}
                >
                    Contacts
                </NavLink>
            </li>
        </ul>
    );
};

export default Links;
