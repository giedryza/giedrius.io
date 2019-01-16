import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import Links from './Links';

const Navbar = ({ drawerToggle }) => (
    <header className="nav">
        <Link to="/" className="nav__link">
            Giedrius Blažulionis
        </Link>

        <nav className="nav__bar">
            <Links />
        </nav>

        <Hamburger onClick={drawerToggle} />
    </header>
);

export default Navbar;
