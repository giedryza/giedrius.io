import React, { Component } from 'react';

import Icon from '../common/Icon';

class SkillsCard extends Component {
    state = {
        skills: {
            beginner: [
                'HTML5',
                'CSS3',
                'Sass',
                'JavaScript',
                'ReactJS',
                'Redux',
                'Node',
                'Express',
                'MongoDB',
                'Photoshop',
                'Handlebars'
            ]
        },
        stack: ['VSCode', 'Chrome', 'Windows']
    };

    render() {
        const { skills, stack } = this.state;

        const beginner = skills.beginner.map(skill => (
            <div key={skill} className="card__icon-container">
                <Icon name={skill} />
                <h5 className="card__icon-title">{skill}</h5>
            </div>
        ));

        const myStack = stack.map(tool => (
            <div key={tool} className="card__icon-container">
                <Icon name={tool} />
                <h5 className="card__icon-title">{tool}</h5>
            </div>
        ));

        return (
            <div className="card">
                <h3 className="card__title">Skills</h3>
                <div className="card__img-container card__img-container--contacts">
                    <img
                        src="img/portfolio_desktop-app.jpg"
                        alt="Desktop App"
                        className="card__img"
                    />
                </div>
                <p className="card__description">
                    Looking forward to hearing from you!
                </p>
                <h4 className="card__label">Beginner</h4>
                <div className="card__icons">{beginner}</div>
                <h4 className="card__label">My stack</h4>
                <div className="card__icons">{myStack}</div>
            </div>
        );
    }
}

export default SkillsCard;
