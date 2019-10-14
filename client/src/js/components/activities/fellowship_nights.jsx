import React from 'react';
import {useFetch} from '../reuse/utils';


export default () => {
    

    return (
        <section className="detail-page">
            <div className="detail-splash fellowship-nights-splash">
                <h1>Fellowship Nights</h1>
            </div>

            <section className="detail-content fellowship-night-content">
                <p>Once a month during the semester, the entire club gathers together. During these times, 
                    we have the opportunity to catch up with one another and to encourage each other with 
                    our experiences of Christ from the previous month. Furthermore, we get to listen to a 
                    short message that dives into a certain topic, usually covered in our weekly Bible 
                    studies. This furthers our understanding of what we are studying, and also opens us 
                    to new experiences of Christ that we wouldn't have otherwise enjoyed.</p>

                {/* fellowship night video urls will be stored in the database */}

            </section>
        </section>
    )
}