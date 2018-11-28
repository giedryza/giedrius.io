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

                    {/* <PrimaryButton
                        onClick={this.modalToggle}
                        visible="Hire me"
                        invisible="Contacts"
                    /> */}
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
