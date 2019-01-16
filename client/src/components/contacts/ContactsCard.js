import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../utils/elements/Icon';

const ContactsCard = () => {
    const contacts = [
        {
            label: 'giedrius.bla@gmail.com',
            icon: 'Gmail',
            link: 'mailto:giedrius.bla@gmail.com'
        },
        {
            label: 'fb.com/giedrius.io',
            icon: 'Facebook',
            link: '//www.facebook.com/giedrius.io'
        },
        {
            label: '370 604 10158',
            icon: 'Mobile',
            link: 'tel:+37060410158'
        }
    ];

    const renderContacts = () =>
        contacts.map(contact => (
            <Link
                to={contact.link}
                key={contact.icon}
                className="contacts__icons--item"
                target="_blank"
            >
                <Icon name={contact.icon} className="contacts__icons--svg" />
                <h5 className="contacts__icons--label">{contact.label}</h5>
            </Link>
        ));

    return (
        <div className="contacts__card">
            <div className="contacts__icons">{renderContacts()}</div>
        </div>
    );
};

export default ContactsCard;
