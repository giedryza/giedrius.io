import React from 'react';

import ContactsCard from './ContactsCard';
import CityCard from './CityCard';

const Contacts = () => {
    return (
        <section className="contacts">
            <ContactsCard />
            <CityCard />
        </section>
    );
};

export default Contacts;
