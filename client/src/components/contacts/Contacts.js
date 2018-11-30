import React from 'react';

import ContactsCard from './ContactsCard';

const Contacts = () => {
    return (
        <section className="contacts">
            {/* <div className="contacts__balloon">
                <Icon name="Balloon" className="contacts__balloon-icon" />
                <h4 className="contacts__balloon-text">
                    Let's get <p>in touch</p>
                </h4>
            </div> */}
            <ContactsCard />
        </section>
    );
};

export default Contacts;
