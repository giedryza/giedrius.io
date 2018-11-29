import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

const SkillsCard = () => {
    const skills = {
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
    };

    const renderIcons = level =>
        level.map(skill => (
            <Link to="/" key={skill} className="icons__item">
                <Icon name={skill} className="icons__svg" />
                <h5 className="icons__label">{skill}</h5>
            </Link>
        ));

    return (
        <div className="landing__card">
            <h1 className="landing__header">Hello</h1>
            <h1 className="landing__text">I am Giedrius Blažulionis</h1>
            <h1 className="landing__text">
                I am a self-taught
                <span className="landing__label"> front-end web developer</span>
            </h1>
            <p className="landing__text mb-2">And I am available for a job</p>
            <h4 className="landing__label">Skills</h4>
            <p className="landing__label-secondary">beginner</p>
            <div className="icons">{renderIcons(skills.beginner)}</div>
        </div>
    );
};

export default SkillsCard;
