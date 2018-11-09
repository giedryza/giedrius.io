import React, { Component } from 'react';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

class Nav extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggle = () => {
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    drawerClose = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        const { sideDrawerOpen } = this.state;

        return (
            <>
                <Toolbar drawerToggle={this.drawerToggle} />
                <SideDrawer
                    show={sideDrawerOpen}
                    drawerClose={this.drawerClose}
                />
                {sideDrawerOpen && <Backdrop drawerClose={this.drawerClose} />}
            </>
        );
    }
}

export default Nav;
