import React from 'react';
import Links from './Links';

const Drawer = ({ show, onClick }) => (
    <nav className={show ? 'drawer open' : 'drawer'}>
        <Links drawerClose={onClick} />
    </nav>
);

export default Drawer;
