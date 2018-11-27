import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import FormButton from '../../utils/form/FormButton';
import FormField from '../../utils/form/FormField';
import {
    updateField,
    generateData,
    isFormValid
} from '../../utils/form/formActions';
import { login } from '../../actions/authActions';

class Login extends Component {
    state = {
        formSuccess: false,
        formError: false,
        formErrorMessage: 'Oops! Something went wrong',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email',
                    type: 'text',
                    label: 'email',
                    placeholder: 'email'
                },
                showLabel: true,
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password',
                    type: 'password',
                    label: 'password',
                    placeholder: 'password'
                },
                showLabel: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            }
        }
    };

    static getDerivedStateFromProps(props, state) {
        if (props.auth.errorMessage) {
            return (state = {
                formErrorMessage: props.auth.errorMessage,
                formError: true
            });
        }
        return false;
    }

    updateForm = element => {
        const newFormdata = updateField(element, this.state.formdata);
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    };

    onSubmit = e => {
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata);
        let formIsValid = isFormValid(this.state.formdata);

        if (formIsValid) {
            this.props.login(dataToSubmit);
        } else {
            this.setState({
                formError: true
            });
        }
    };

    renderError = () =>
        this.state.formError ? (
            <div className="form__error">{this.state.formErrorMessage}</div>
        ) : null;

    render() {
        if (this.props.auth.token) {
            return <Redirect to="/admin/portfolio/add" />;
        }

        return (
            <section className="login">
                <form onSubmit={e => this.onSubmit(e)} className="form">
                    <FormField
                        id={'email'}
                        fieldData={this.state.formdata.email}
                        change={element => this.updateForm(element)}
                    />

                    <FormField
                        id={'password'}
                        fieldData={this.state.formdata.password}
                        change={element => this.updateForm(element)}
                    />

                    {this.renderError()}

                    <FormButton type="submit" value="Login" />
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
