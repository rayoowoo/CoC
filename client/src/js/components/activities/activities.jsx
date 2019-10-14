import React from 'react';
import BibleStudies from './bible_studies';
import FellowshipNights from './fellowship_nights';
import NotFound from '../layouts/not_found';
import {historyPush} from '../reuse/utils';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <Activities />,
    "/bible-studies": () => <BibleStudies />,
    "/fellowship-nights": () => <FellowshipNights />
}

export default () => {
    return useRoutes(routes) || <NotFound />;
}

function Activities() {
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

                <section className="activities-tiles tile-set">
                    <div onClick={historyPush('/activities/bible-studies')} className="activities-item tile">
                        <h1>Bible Studies</h1>
                    </div>
                    <div onClick={historyPush('/activities/fellowship-nights')} className="activities-item tile">
                        <h1>Fellowship Nights</h1>
                    </div>
                    <div onClick={historyPush('/activities/small-groups')} className="activities-item tile">
                        <h1>Small Groups</h1>
                    </div>
                    <div onClick={historyPush('/activities/twos-and-threes')} className="activities-item tile">
                        <h1>Two's and Three's</h1>
                    </div>
                    <div onClick={historyPush('/activities/college-conference')} className="activities-item tile">
                        <h1>College Conference</h1>
                    </div>
                    <div onClick={historyPush('/activities/spring-break-trip')} className="activities-item tile">
                        <h1>Spring Break Trip</h1>
                    </div>
                </section>

                <h2 className="activities-interested">Interested in what's coming up?</h2>

                <button className="main-button activities-button">FIND OUT HERE</button>
            </section>
        </section>
    )
}