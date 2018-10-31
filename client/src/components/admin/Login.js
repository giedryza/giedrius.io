import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from '../common/TextInput';
import Button from '../common/Button';

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

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        // this.props.addPortfolio(data);

        this.setState({
            email: '',
            password: ''
        });
    };

    render() {
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

export default Login;
