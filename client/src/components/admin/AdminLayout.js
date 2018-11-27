import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';

class AdminLayout extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <section className="admin">
                <div className="admin-left">
                    <Link to="/admin/portfolio" className="admin-right__btn">
                        Portfolios list
                    </Link>
                    <Link
                        to="/admin/portfolio/add"
                        className="admin-right__btn"
                    >
                        Add portfolio
                    </Link>

                    <a
                        href="/"
                        className="admin-right__btn"
                        onClick={this.onLogoutClick}
                    >
                        Logout
                    </a>
                </div>

                <div className="admin-right">{this.props.children}</div>
            </section>
        );
    }
}

export default connect(
    null,
    { logout }
)(AdminLayout);
