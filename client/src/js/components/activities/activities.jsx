import React from 'react';

export default (props) => {
    return (
        <section className="main-page">
            <div className="main-splash activities-splash">
                <h1>what do we do?</h1>
            </div>

            <section className="main-content activities-content">
                <p>Christians on Campus at UC Berkeley members have various opportunities to fellowship
                    with one another to enjoy the riches of Christ in the Bible and in the members.
                    We love to gather together to sing, to pray, to study the Word, and to fellowship
                    with one another our appreciation and learning of Christ.</p>

                <p>Click to find out more:</p>

                <section className="activities-tiles">
                    <div className="activities-item"></div>
                    <div className="activities-item"></div>
                    <div className="activities-item"></div>
                    <div className="activities-item"></div>
                    <div className="activities-item"></div>
                    <div className="activities-item"></div>
                </section>

                <h2>Interested in what's coming up?</h2>

                <button className="main-button activities-button">FIND OUT HERE</button>
            </section>
        </section>
    )
}