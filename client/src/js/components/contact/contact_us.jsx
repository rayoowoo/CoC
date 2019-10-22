import React from 'react';
import ContactForm from './contact_form';
import ContactResponse from './contact_response';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <ContactForm />,
    "/response": () => <ContactResponse />
}

export default () => {
    return (
        <section className="detail-page">
            <div className="detail-splash contact-splash">
                <h2 className="head2">contact us</h2>
            </div>
            <section className="detail-content contact-content">
                {useRoutes(routes)}
            </section>
        </section>
    )
}