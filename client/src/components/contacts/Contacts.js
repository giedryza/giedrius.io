import React from 'react';

import SkillsCard from './SkillsCard';
import ContactsCard from './ContactsCard';

const Contacts = () => {
    return (
        <section className="contacts">
            <ContactsCard />
            <SkillsCard />
        </section>
    );
};

export default Contacts;
