import React from 'react';

import CardAbout from './CardAbout';
import CardAboutImg from './CardAboutImg';

import { about } from '../../utils/texts';
import imgWeb from '../../assets/img/about_dog.jpg';
import imgDog from '../../assets/img/about_web.jpg';

const About = () => {
    return (
        <section className="about">
            <CardAbout title="The Beginning" body={about.beginning} />
            <CardAboutImg
                className="card card--landscape"
                title="My website back in 2009"
                src={imgDog}
            />
            <CardAbout title="University" body={about.university} />
            <CardAbout title="Turning point" body={about.turningPoint} />
            <CardAbout title="Objectives" body={about.objectives} />
            <CardAboutImg title="And here's my dog" src={imgWeb} />
        </section>
    );
};

export default About;
