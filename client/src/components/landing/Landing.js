import React, { Component } from 'react';

import img from '../../assets/img/landing.png';
import ContactsCard from '../contacts/ContactsCard';
import PrimaryButton from '../landing/PrimaryButton';
import Backdrop from '../nav/Backdrop';

class Landing extends Component {
    state = {
        modalOpen: false
    };

    modalToggle = () => {
        this.setState(prevState => {
            return { modalOpen: !prevState.modalOpen };
        });
    };

    render() {
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

                    <PrimaryButton
                        onClick={this.modalToggle}
                        visible="Hire me"
                        invisible="Contacts"
                    />
                </div>
                <div className="landing__card">
                    <img src={img} alt="Landing" className="landing__img" />
                </div>
                {this.state.modalOpen && <ContactsCard />}
                {this.state.modalOpen && (
                    <Backdrop onClick={this.modalToggle} />
                )}
            </section>
        );
    }
}

export default Landing;
