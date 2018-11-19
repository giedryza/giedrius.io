import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextArea from '../common/TextArea';
import TextInput from '../common/TextInput';
import Button from '../common/Button';

import requireAuth from '../../utils/requireAuth';
import { addPortfolio } from '../../actions/portfolioActions';
import { logout } from '../../actions/authActions';

class Add extends Component {
    state = {
        name: '',
        img: '',
        description: '',
        techStack: '',
        web: '',
        github: '',
        youtube: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const portfolioData = {
            name: this.state.name,
            img: this.state.img,
            description: this.state.description,
            techStack: this.state.techStack,
            web: this.state.web,
            github: this.state.github,
            youtube: this.state.youtube
        };

        this.props.addPortfolio(portfolioData, () => {
            this.props.history.push('/portfolio');
        });
    };

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logout();
    };

    render() {
        return (
            <section className="admin">
                <div className="card">a</div>

                <form onSubmit={this.onSubmit} className="form">
                    <TextInput
                        placeholder="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <TextInput
                        placeholder="img"
                        name="img"
                        value={this.state.img}
                        onChange={this.onChange}
                    />
                    <TextArea
                        placeholder="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                    <TextInput
                        placeholder="techStack"
                        name="techStack"
                        value={this.state.techStack}
                        onChange={this.onChange}
                    />
                    <TextInput
                        placeholder="web"
                        name="web"
                        value={this.state.web}
                        onChange={this.onChange}
                    />
                    <TextInput
                        placeholder="github"
                        name="github"
                        value={this.state.github}
                        onChange={this.onChange}
                    />
                    <TextInput
                        placeholder="youtube"
                        name="youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                    />

                    <Button type="submit" value="Add" />

                    <a
                        href="/"
                        className="form__button"
                        onClick={this.onLogoutClick}
                    >
                        Logout
                    </a>
                </form>
            </section>
        );
    }
}

export default requireAuth(
    connect(
        null,
        { addPortfolio, logout }
    )(Add)
);
