import React from 'react';
import Links from './Links';

const Drawer = ({ show, drawerClose }) => {
    return (
        <nav className={show ? 'drawer open' : 'drawer'}>
            <Links drawerClose={drawerClose} />
        </nav>
    );
};

export default Drawer;