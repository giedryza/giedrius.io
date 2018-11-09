import React from 'react';

import Links from './Links';

const SideDrawer = ({ show, drawerClose }) => {
    let drawerClass = 'side-drawer';
    if (show) {
        drawerClass = 'side-drawer open';
    }

    return (
        <nav className={drawerClass}>
            <Links drawerClose={drawerClose} />
        </nav>
    );
};

export default SideDrawer;
