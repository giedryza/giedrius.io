import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { login } from '../../actions/authActions';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(userData, () => {
            this.props.history.push('/admin');
        });
    };

    render() {
        if (this.props.authenticated) {
            return <Redirect to="/portfolio" />;
        }

        return (
            <section className="admin">
                <form onSubmit={this.onSubmit} className="form">
                    <TextInput
                        className="form__input"
                        placeholder="email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                    <TextInput
                        className="form__input"
                        placeholder="password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />

                    <Button
                        type="submit"
                        value="Login"
                        className="form__button"
                    />
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
