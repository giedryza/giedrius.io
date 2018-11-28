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
                <h1 className="landing__header">Hello</h1>
                <h1 className="landing__text">I am Giedrius Blažulionis</h1>
                <h1 className="landing__text">
                    I am a self-taught{' '}
                    <span className="landing__span">
                        front-end web developer
                    </span>
                </h1>
                <p className="landing__text mb-2">
                    And I am available for a job
                </p>
                <h4 className="landing__label">
                    SKILLS <p className="landing__label-span">beginner</p>
                </h4>
                <div className="card__icons">{beginner}</div>
                {/* <h4 className="landing__label">TOOLS</h4>
                <div className="card__icons">{myTools}</div> */}
            </div>
        );
    }
}

export default SkillsCard;
