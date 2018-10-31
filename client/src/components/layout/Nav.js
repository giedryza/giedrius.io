import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from '../common/Icon';

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__list">
                <Icon name="Code" className="nav__icon" />
                <div className="nav__branding">Giedrius Blažulionis</div>
            </div>

            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink
                        to="/portfolio"
                        className="nav__link"
                        activeClassName="nav__selected"
                    >
                        Portfolio
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/about"
                        className="nav__link"
                        activeClassName="nav__selected"
                    >
                        About
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/contacts"
                        className="nav__link"
                        activeClassName="nav__selected"
                    >
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
