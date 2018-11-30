import React from 'react';
import { Link } from 'react-router-dom';

import MenuButton from './MenuButton';
import Links from './Links';

const Navbar = ({ drawerToggle }) => (
    <header className="nav">
        <Link to="/" className="nav__link">
            Giedrius Blažulionis
        </Link>

        <nav className="nav__bar">
            <Links />
        </nav>

        <MenuButton drawerToggle={drawerToggle} />
    </header>
);

export default Navbar;
