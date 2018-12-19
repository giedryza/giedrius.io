import React from 'react';
import IconsContainer from '../utils/elements/IconsContainer';

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
            'Handlebars'
        ]
    };

    return (
        <div className="landing__card">
            <h1 className="landing__header">Hello</h1>
            <h1 className="landing__text">I am Giedrius Blažulionis</h1>
            <h1 className="landing__text">
                I am a self-taught
                <span className="landing__label"> front-end web developer</span>
            </h1>
            <p className="landing__text">And I am available for a job</p>
            <h4 className="landing__label">Skills</h4>
            <p className="landing__label-secondary">beginner</p>
            <IconsContainer iconsList={skills.beginner} />
        </div>
    );
};

export default SkillsCard;
