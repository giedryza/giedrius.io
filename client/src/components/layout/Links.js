import React from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../utils/links';

const Links = ({ drawerClose }) => {
    const navLinks = links.map(link => (
        <li className="nav__item" key={link.label}>
            <NavLink
                to={link.href}
                className="nav__link"
                activeClassName="nav__selected"
                onClick={drawerClose}
            >
                {link.label}
            </NavLink>
        </li>
    ));

    return <ul className="nav__list">{navLinks}</ul>;
};

export default Links;
