import React, { Component } from 'react';

import Navbar from './Navbar';
import Drawer from './Drawer';
import Backdrop from './Backdrop';

class Layout extends Component {
    state = {
        drawerOpen: false
    };

    drawerToggle = () => {
        this.setState(prevState => {
            return { drawerOpen: !prevState.drawerOpen };
        });
    };

    render() {
        return (
            <>
                <Navbar drawerToggle={this.drawerToggle} />

                <Drawer
                    show={this.state.drawerOpen}
                    onClick={this.drawerToggle}
                />

                <Backdrop
                    show={this.state.drawerOpen}
                    onClick={this.drawerToggle}
                />

                <main>{this.props.children}</main>
            </>
        );
    }
}

export default Layout;
