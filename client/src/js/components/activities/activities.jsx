import React from 'react';
import BibleStudies from './bible_studies';
import FellowshipNights from './fellowship_nights';
import SmallGroups from './small_groups';
import NotFound from '../layouts/not_found';
import {historyPush} from '../reuse/utils';
import {useRoutes} from 'hookrouter';

const routes = {
    "/": () => <Activities />,
    "/bible-studies": () => <BibleStudies />,
    "/fellowship-nights": () => <FellowshipNights />,
    "/small-groups": () => <SmallGroups />
}

export default () => {
    return useRoutes(routes) || <NotFound />;
}

function Activities() {
    return (
        <section className="main-page">
            <div className="main-splash activities-splash">
                <h1 className="head1">what do we do?</h1>
            </div>

            <section className="main-content activities-content">
                <p className="paragraph">Christians on Campus at UC Berkeley members have various opportunities to fellowship
                    with one another to enjoy the riches of Christ in the Bible and in the members.
                    We love to gather together to sing, to pray, to study the Word, and to fellowship
                    with one another our appreciation and learning of Christ.</p>

                <p className="paragraph">Click to find out more:</p>

                <section className="activities-tiles tile-set">
                    <div onClick={historyPush('/activities/bible-studies')} className="activities-item tile1">
                        <h3 className="head3">Bible Studies</h3>
                    </div>
                    <div onClick={historyPush('/activities/fellowship-nights')} className="activities-item tile1">
                        <h3 className="head3">Fellowship Nights</h3>
                    </div>
                    <div onClick={historyPush('/activities/small-groups')} className="activities-item tile1">
                        <h3 className="head3">Small Groups</h3>
                    </div>
                    <div onClick={historyPush('/activities/twos-and-threes')} className="activities-item tile1">
                        <h3 className="head3">Two's and Three's</h3>
                    </div>
                    <div onClick={historyPush('/activities/college-conference')} className="activities-item tile1">
                        <h3 className="head3">College Conference</h3>
                    </div>
                    <div onClick={historyPush('/activities/spring-break-trip')} className="activities-item tile1">
                        <h3 className="head3">Spring Break Trip</h3>
                    </div>
                </section>

                <h2 className="activities-interested">Interested in what's coming up?</h2>

                <button className="button1 activities-button">FIND OUT HERE</button>
            </section>
        </section>
    )
}