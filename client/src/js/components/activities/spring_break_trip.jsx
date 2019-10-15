import React from 'react';

export default (props) => {
    return (
        <section className="detail-page">
            <div className="detail-splash sbt-splash">
                <h2 className="head2">Spring Break Trip</h2>
            </div>

            <section className="detail-content sbt-content">
                <div className="sbt-banner"></div>
                {/* <button className="button2">Sign me up!</button> */}

                <p className="paragraph">Every year, during spring break, Christians on Campus 
                takes a weeklong trip to visit sisters clubs elsewhere in the nation. This week 
                is full of travelling, sight-seeing, fun activities, and most importantly, a lot 
                of rich fellowship with the student believers that are receiving us. It's an 
                opportunity to see how students in other places are pursuing Christ, and to 
                experience the reality of the Body of Christ. </p>

                <h3 className="head3">Destinations</h3>
                <h1 className="head1">Sacramento, CA</h1>
                <h1 className="head1">Reno, NV</h1>
                <h1 className="head1">Boise, ID</h1>

                <p className="paragraph">You can find out more about what we did on our blog! It was definitely a blast!</p>

                <button className="button1">See More</button>
            </section>
        </section>
    )
}