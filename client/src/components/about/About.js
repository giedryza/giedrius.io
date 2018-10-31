import React from 'react';

import CardAbout from './CardAbout';
import text from './texts';

import img from '../../assets/img/about_dog.jpg';

const About = () => {
    return (
        <section className="about">
            <CardAbout title="The Beginning" body={text.beginning} />
            <CardAbout title="University" body={text.university} />
            <CardAbout title="Turning point" body={text.turningPoint} />
            <CardAbout title="Objectives" body={text.objectives} />

            <div className="card">
                <h3 className="card__title">And here's my dog</h3>
                <div className="card__img-container card__img-container--about">
                    <img src={img} alt="My Dog" className="card__img" />
                </div>
            </div>
        </section>
    );
};

export default About;
