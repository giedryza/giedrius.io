import React from 'react';
import IconsContainer from '../utils/elements/IconsContainer';

const SkillsCard = () => {
    const skills = {
        intermediate: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
        basic: ['Redux', 'NodeJS', 'Express', 'MongoDB', 'PHP', 'Laravel', 'MySQL']
    };

    return (
        <article className="landing__card">
            <h1 className="landing__header">Hello</h1>
            <h1 className="landing__text">I am Giedrius Blažulionis</h1>
            <h1 className="landing__text">
                I am a self-taught
                <span className="landing__label"> front-end web developer</span>
            </h1>
            <p className="landing__text">And I am available for a job</p>
            <h4 className="landing__label">Skills</h4>

            <p className="landing__label--secondary">intermediate</p>
            <IconsContainer iconsList={skills.intermediate} />
            <p className="landing__label--secondary">basic</p>
            <IconsContainer iconsList={skills.basic} />
        </article>
    );
};

export default SkillsCard;
