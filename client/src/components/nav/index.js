import React, { Component } from 'react';

import Navbar from './Navbar';
import Drawer from './Drawer';
import Backdrop from './Backdrop';

class Nav extends Component {
    state = {
        drawerOpen: false
    };

    drawerToggle = () => {
        this.setState(prevState => {
            return { drawerOpen: !prevState.drawerOpen };
        });
    };

    drawerClose = () => {
        this.setState({ drawerOpen: false });
    };

    render() {
        const { drawerOpen } = this.state;

        return (
            <>
                <Navbar drawerToggle={this.drawerToggle} />
                <Drawer show={drawerOpen} drawerClose={this.drawerClose} />
                {drawerOpen && <Backdrop drawerClose={this.drawerClose} />}
            </>
        );
    }
}

export default Nav;
