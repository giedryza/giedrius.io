import React from 'react';

import Links from './Links';

const Drawer = ({ show, drawerClose }) => {
    let drawerClass = 'drawer';
    if (show) {
        drawerClass = 'drawer open';
    }

    return (
        <nav className={drawerClass}>
            <Links drawerClose={drawerClose} />
        </nav>
    );
};

export default Drawer;
