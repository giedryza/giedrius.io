import React from 'react';

import './SideDrawer.css';
import Links from '../Links/Links';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <Links click={props.click} />
        </nav>
    );
};

export default SideDrawer;
