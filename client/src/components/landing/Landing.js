import React, { Component } from 'react';

import img from '../../assets/img/landing.png';
import ContactsCard from '../contacts/ContactsCard';
import PrimaryButton from '../landing/PrimaryButton';
import Backdrop from '../layout/Backdrop';
import Icon from '../common/Icon';
import SkillsCard from './SkillsCard';

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
                    <Icon name="Avatar" className="landing__avatar" />
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

                    <PrimaryButton
                        onClick={this.modalToggle}
                        visible="Hire me"
                        invisible="Contacts"
                    />
                </div>

                {/* <div className="landing__card">
                    <img src={img} alt="Landing" className="landing__img" />
                </div> */}

                <SkillsCard />

                {/* {this.state.modalOpen && <ContactsCard />}
                <Backdrop
                    show={this.state.modalOpen}
                    onClick={this.modalToggle}
                /> */}
            </section>
        );
    }
}

export default Landing;
