import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ drawerClose }) => {
    const links = [
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Contacts', href: '/contacts' }
    ];

    const renderLinks = () =>
        links.map(link => (
            <NavLink
                key={link.label}
                to={link.href}
                className="nav__link"
                activeClassName="nav__selected"
                onClick={drawerClose}
            >
                {link.label}
            </NavLink>
        ));

    return <ul className="nav__list">{renderLinks()}</ul>;
};

export default Links;
