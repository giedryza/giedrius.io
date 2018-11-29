import React from 'react';
import Icon from '../common/Icon';
import SkillsCard from './SkillsCard';

const Landing = () => (
    <section className="landing">
        <div className="landing__card">
            <Icon name="Avatar" className="landing__avatar" />
        </div>

        <SkillsCard />
    </section>
);

export default Landing;
