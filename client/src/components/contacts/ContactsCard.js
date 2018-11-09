import React, { Component } from 'react';

import IconLink from '../common/IconLink';

class ContactsCard extends Component {
    state = {
        contacts: [
            {
                label: 'giedrius.bla@gmail.com',
                icon: 'Gmail',
                link: 'mailto:giedrius.bla@gmail.com'
            },
            {
                label: 'm.me/giedrius.io',
                icon: 'Messenger',
                link: 'https://m.me/giedrius.io'
            },
            {
                label: 'fb.com/giedrius.io',
                icon: 'Facebook',
                link: 'https://www.facebook.com/giedrius.io'
            },
            {
                label: '370 604 10158',
                icon: 'Mobile',
                link: 'tel:+37060410158'
            },
            {
                label: 'Vilnius',
                icon: 'Vilnius',
                link: 'https://goo.gl/maps/xXB8utSLNJU2'
            }
        ]
    };

    render() {
        const { contacts } = this.state;

        const myContacts = contacts.map(contact => (
            // <a
            //     href={contact.link}
            //     target="_blank"
            //     rel="noopener noreferrer"
            //     key={contact.icon}
            //     className="card__icon-container card__icon-container--contacts"
            // >
            //     <Icon name={contact.icon} className="card__icon--contacts" />
            //     <h5 className="card__icon-title">{contact.label}</h5>
            // </a>
            <IconLink
                key={contact.icon}
                href={contact.link}
                className="card__icon-container card__icon-container--contacts"
                iconName={contact.icon}
                iconClassName="card__icon--contacts"
                label={contact.label}
            />
        ));

        return (
            <div className="card">
                <h3 className="card__title">Let's get in touch</h3>
                <div className="card__img-container card__img-container--contacts">
                    <img
                        src="img/contacts_me.jpg"
                        alt="Desktop App"
                        className="card__img"
                    />
                </div>

                <h4 className="card__label">Contacts</h4>
                <div className="card__icons card__icons--contacts">
                    {myContacts}
                </div>
            </div>
        );
    }
}

export default ContactsCard;
