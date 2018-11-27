import React, { Component } from 'react';

import Icon from '../common/Icon';
import { contacts } from '../../utils/texts';
import imgSkills from '../../assets/img/contacts_skills.png';

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
            <div className="landing__card">
                <h4 className="landing__label">SKILLS (beginner)</h4>
                <div className="card__icons">{beginner}</div>
                {/* <h4 className="landing__label">TOOLS</h4>
                <div className="card__icons">{myTools}</div> */}
            </div>
        );
    }
}

export default SkillsCard;
