import React from 'react';
import { useFetch } from '../reuse/utils';

export default () => {
    let upcomings = useFetch('/api/upcoming') || [];

    upcomings = upcomings.map(upcoming => {
        return <div key={upcoming._id} className="banner">
            <div className="banner-img">
                <img src={`https://drive.google.com/uc?export=view&id=${upcoming.url}`} alt="upcoming-event-banner"/>
            </div>
            <h2 className="head2">{upcoming.title}</h2>
            <p>{upcoming.description}</p>
        </div>
    })
    return (
        <section className="main-page">
            <div className="main-splash upcoming-splash">
                <h1 className="head1">what's coming up?</h1>
            </div>

            <section className="main-content upcoming-content">
                {upcomings}
            </section>
        </section>
    )
}