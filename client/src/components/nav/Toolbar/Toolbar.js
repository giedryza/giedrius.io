import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Links from '../Links/Links';

const Toolbar = props => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo">
                    <a href="/">THE LOGO</a>
                </div>
                <div className="spacer" />
                <div className="toolbar__navigation-items">
                    <Links />
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;
