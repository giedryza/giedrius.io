import React, { Component } from 'react';

import Icon from '../common/Icon';
import { contacts } from '../../utils/texts';
import imgSkills from '../../assets/img/contacts_skills.jpg';

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
                'NodeJS',
                'Express',
                'MongoDB',
                'Photoshop',
                'Handlebars'
            ]
        },
        tools: ['VSCode', 'Chrome', 'Windows']
    };

    render() {
        const { skills, tools } = this.state;

        const beginner = skills.beginner.map(skill => (
            <div key={skill} className="card__icon-container">
                <Icon name={skill} />
                <h5 className="card__icon-title">{skill}</h5>
            </div>
        ));

        const myTools = tools.map(tool => (
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
                        src={imgSkills}
                        alt="Desktop App"
                        className="card__img"
                    />
                </div>
                <p className="card__description">{contacts.skills}</p>
                <h4 className="card__label">Beginner</h4>
                <div className="card__icons">{beginner}</div>
                <h4 className="card__label">My tools</h4>
                <div className="card__icons">{myTools}</div>
            </div>
        );
    }
}

export default SkillsCard;
