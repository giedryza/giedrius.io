import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormButton from '../../utils/form/FormButton';
import FileUpload from '../../utils/form/FileUpload';
import FormField from '../../utils/form/FormField';
import {
    updateField,
    generateData,
    isFormValid,
    populateFields
} from '../../utils/form/formActions';
import { editPortfolio } from '../../actions/portfolioActions';
import AdminLayout from './AdminLayout';
import requireAuth from '../../utils/auth/requireAuth';

class EditPortfolio extends Component {
    state = {
        formError: false,
        formSuccess: false,
        formdata: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name',
                    type: 'text',
                    placeholder: 'name'
                },
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
                    name: 'description',
                    placeholder: 'description',
                    rows: 10
                },
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
                    name: 'techStack',
                    type: 'text',
                    placeholder: 'techStack'
                },
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
                    name: 'web',
                    type: 'text',
                    placeholder: 'web'
                },
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
                    name: 'github',
                    type: 'text',
                    placeholder: 'github'
                },
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

    componentDidMount = () => {
        if (this.props.portfolio.works.length > 0) {
            const portfolioData = this.props.portfolio.works.filter(
                work => work._id === this.props.match.params.id
            );
            const newFormData = populateFields(
                this.state.formdata,
                portfolioData[0]
            );

            this.setState({
                formdata: newFormData
            });
        } else {
            this.props.history.push('/');
        }
    };

    updateForm = element => {
        const newFormdata = updateField(element, this.state.formdata);
        this.setState({
            formError: false,
            formdata: newFormdata
        });
    };

    successHandler = () => {
        this.setState({
            formSuccess: true,
            formError: false
        });
        setTimeout(() => {
            this.setState({
                formSuccess: false
            });
        }, 2500);
    };

    onSubmit = e => {
        e.preventDefault();

        let dataToSubmit = generateData(this.state.formdata);
        let formIsValid = isFormValid(this.state.formdata);

        if (formIsValid) {
            this.props.editPortfolio(
                dataToSubmit,
                this.props.match.params.id,
                this.successHandler
            );
        } else {
            this.setState({
                formError: true
            });
        }
    };

    renderError = () => {
        if (this.state.formError) {
            return (
                <div className="form__error">Oops! Something went wrong.</div>
            );
        } else {
            return null;
        }
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

                    <FormButton type="submit" value="Update" />
                </form>
            </AdminLayout>
        );
    }
}

const mapStateToProps = state => ({
    portfolio: state.portfolio
});

export default requireAuth(
    connect(
        mapStateToProps,
        { editPortfolio }
    )(EditPortfolio)
);
