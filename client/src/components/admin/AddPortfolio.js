import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormButton from '../../utils/form/FormButton';
import FileUpload from '../../utils/form/FileUpload';
import FormField from '../../utils/form/FormField';
import {
    updateField,
    generateData,
    isFormValid,
    resetFields
} from '../../utils/form/formActions';
import { addPortfolio } from '../../actions/portfolioActions';
import AdminLayout from './AdminLayout';
import requireAuth from '../../utils/auth/requireAuth';

class AddPortfolio extends Component {
    state = {
        formSuccess: false,
        formError: false,
        formErrorMessage: 'Oops! Something went wrong',
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    label: 'name',
                    name: 'name',
                    type: 'text',
                    placeholder: 'name'
                },
                showLabel: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            description: {
                element: 'textarea',
                value: '',
                config: {
                    label: 'description',
                    name: 'description',
                    placeholder: 'description',
                    rows: 10
                },
                showLabel: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            techStack: {
                element: 'input',
                value: '',
                config: {
                    label: 'techStack',
                    name: 'techStack',
                    type: 'text',
                    placeholder: 'techStack'
                },
                showLabel: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            web: {
                element: 'input',
                value: '',
                config: {
                    label: 'web',
                    name: 'web',
                    type: 'text',
                    placeholder: 'web'
                },
                showLabel: true,
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            },
            github: {
                element: 'input',
                value: '',
                config: {
                    label: 'github',
                    name: 'github',
                    type: 'text',
                    placeholder: 'github'
                },
                showLabel: true,
                validation: {
                    required: false
                },
                valid: true,
                touched: false,
                errorMessage: ''
            },
            img: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMessage: ''
            }
        }
    };

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
            this.props.addPortfolio(dataToSubmit, this.resetFieldHandler);
        } else {
            this.setState({
                formError: true
            });
        }
    };

    resetFieldHandler = () => {
        const newFormData = resetFields(this.state.formdata);

        this.setState({
            formdata: newFormData,
            formSuccess: true,
            formError: false
        });
        setTimeout(() => {
            this.setState({
                formSuccess: false
            });
        }, 2500);
    };

    imagesHandler = image => {
        const newFormData = {
            ...this.state.formdata
        };

        newFormData['img'].value = image.url;
        newFormData['img'].valid = true;

        this.setState({
            formdata: newFormData
        });
    };

    renderError = () =>
        this.state.formError && (
            <div className="form__error">{this.state.formErrorMessage}</div>
        );

    render() {
        return (
            <AdminLayout>
                <form onSubmit={e => this.onSubmit(e)} className="form">
                    <FileUpload
                        imagesHandler={image => this.imagesHandler(image)}
                        reset={this.state.formSuccess}
                    />

                    <FormField
                        id={'name'}
                        fieldData={this.state.formdata.name}
                        change={element => this.updateForm(element)}
                    />
                    <FormField
                        id={'description'}
                        fieldData={this.state.formdata.description}
                        change={element => this.updateForm(element)}
                    />
                    <FormField
                        id={'techStack'}
                        fieldData={this.state.formdata.techStack}
                        change={element => this.updateForm(element)}
                    />
                    <FormField
                        id={'web'}
                        fieldData={this.state.formdata.web}
                        change={element => this.updateForm(element)}
                    />
                    <FormField
                        id={'github'}
                        fieldData={this.state.formdata.github}
                        change={element => this.updateForm(element)}
                    />

                    {this.state.formSuccess ? <div>Success</div> : null}

                    {this.renderError()}

                    <FormButton type="submit" value="Add" />
                </form>
            </AdminLayout>
        );
    }
}

export default requireAuth(
    connect(
        null,
        { addPortfolio }
    )(AddPortfolio)
);
