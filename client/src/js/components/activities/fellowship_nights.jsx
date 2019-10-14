import React from 'react';
import {useFetch} from '../reuse/utils';


export default () => {
    let fellowshipNights = useFetch('/api/fellowshipnights') || [];
    console.log(fellowshipNights);

    fellowshipNights = fellowshipNights.map( el => {
        let {date, topic, url} = el;

        url = url.split("/watch?v=").join("/embed/");
        return (
            <div>
                <h3 className="head3">{date}</h3>
                <p className="paragraph">{topic}</p>
                <iframe type="text/html"
                    className="fellowship-nights-video small-video"
                    id="ytplayer" 
                    src={url}
                    frameBorder="0" allowFullScreen>
                </iframe>
            </div>
        )
    })


    return (
        <section className="detail-page">
            <div className="detail-splash fellowship-nights-splash">
                <h2 className="head2">Fellowship Nights</h2>
            </div>

            <section className="detail-content fellowship-night-content">
                <p className="paragraph">Once a month during the semester, the entire club gathers together. During these times, 
                    we have the opportunity to catch up with one another and to encourage each other with 
                    our experiences of Christ from the previous month. Furthermore, we get to listen to a 
                    short message that dives into a certain topic, usually covered in our weekly Bible 
                    studies. This furthers our understanding of what we are studying, and also opens us 
                    to new experiences of Christ that we wouldn't have otherwise enjoyed.</p>

                {/* fellowship night video urls will be stored in the database */}
                {fellowshipNights}

                <button className="button1">View More</button>
            </section>
        </section>
    )
}