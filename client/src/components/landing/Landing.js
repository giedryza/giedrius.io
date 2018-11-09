import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/img/landing.png';

const Landing = () => {
    return (
        <section className="landing">
            <div className="landing__card">
                <h1 className="landing__header">Hello</h1>
                <p className="landing__text">I am Giedrius Blažulionis</p>
                <p className="landing__text">
                    I am a wannabe{' '}
                    <span className="landing__span">
                        front-end web developer
                    </span>
                </p>
                <p className="landing__text mb-5">
                    And I am available for a job
                </p>
                <Link to="/contacts">
                    <button class="landing__btn">
                        <span class="landing__btn--visible">Hire me</span>
                        <span class="landing__btn--invisible">Contacts</span>
                    </button>
                </Link>
            </div>
            <div className="landing__card">
                <img src={img} alt="Landing" className="landing__img" />
            </div>
        </section>
    );
};

export default Landing;
