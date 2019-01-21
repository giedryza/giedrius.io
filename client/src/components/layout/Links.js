import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ drawerClose }) => {
    const links = [
        { label: 'Portfolio', linkto: '/portfolio' },
        { label: 'Contacts', linkto: '/contacts' }
    ];

    const renderLinks = () =>
        links.map(link => (
            <li key={link.label}>
                <NavLink
                    to={link.linkto}
                    className="nav__link"
                    activeClassName="nav__link--selected"
                    onClick={drawerClose}
                >
                    {link.label}
                </NavLink>
            </li>
        ));

    return <ul className="nav__list">{renderLinks()}</ul>;
};

export default Links;
