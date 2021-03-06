import React from 'react';

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
            label: 'in/giedrius-blazulionis',
            icon: 'LinkedIn',
            link: '//www.linkedin.com/in/giedrius-blazulionis/'
        },
        {
            label: '370 604 10158',
            icon: 'Mobile',
            link: 'tel:+37060410158'
        }
    ];

    const renderContacts = () =>
        contacts.map(contact => (
            <li key={contact.icon}>
                <a
                    href={contact.link}
                    className="contacts__icons--item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon
                        name={contact.icon}
                        className="contacts__icons--svg"
                    />
                    <h5 className="contacts__icons--label">{contact.label}</h5>
                </a>
            </li>
        ));

    return (
        <article className="contacts__card">
            <ul className="contacts__icons">{renderContacts()}</ul>
        </article>
    );
};

export default ContactsCard;
