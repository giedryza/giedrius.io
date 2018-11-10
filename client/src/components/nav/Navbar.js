import React from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Links from './Links';
import Icon from '../common/Icon';

const Navbar = ({ drawerToggle }) => {
    return (
        <nav className="nav">
            <div className="nav__list">
                <Icon name="Code" className="nav__icon" />
                <Link to="/" className="nav__link nav__link--branding">
                    Giedrius Blažulionis
                </Link>
            </div>

            <div className="navbar">
                <Links />
            </div>

            <MenuButton drawerToggle={drawerToggle} />
        </nav>
    );
};

export default Navbar;
