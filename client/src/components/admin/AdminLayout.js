import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';

class AdminLayout extends Component {
    state = {
        links: [
            {
                name: 'Add portfolio',
                linkto: '/admin/portfolio/add'
            },
            {
                name: 'Edit portfolio',
                linkto: '/admin/portfolio'
            },
            {
                name: 'Logout',
                linkto: '/'
            }
        ]
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logout();
    };

    renderLinks = () =>
        this.state.links.map((link, i) => (
            <Link
                key={i}
                to={link.linkto}
                className="admin__btn"
                onClick={link.name === 'Logout' ? this.onLogoutClick : null}
            >
                {link.name}
            </Link>
        ));

    render() {
        return (
            <section className="admin">
                <div className="admin-left">{this.renderLinks()}</div>
                <div className="admin-right">{this.props.children}</div>
            </section>
        );
    }
}

export default connect(
    null,
    { logout }
)(AdminLayout);
