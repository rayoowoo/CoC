import React from 'react';

export default (props) => {
    return (
        <section className="college-conference main-page">
            <div className="college-conference-splash">
                <caption className="college-conference-splash-title">
                    <h3 className="head3">FALL 2019</h3>
                    <h1 className="head1">NORTHERN CALIFORNIA COLLEGE CONFERENCE</h1>
                </caption>
                <div className="fa fa-chevron-down"></div>
                <div className="fa fa-chevron-down"></div>
                <div className="fa fa-chevron-down"></div>
            </div>

            <section className="college-conference-description">
                <h2 className="head2">what is it?</h2>
                <p className="paragraph">Every semester, over 200 college students from our sister clubs across 
                    Northern California gather together, away from the busyness of school, 
                    to listen to the Lord speak, to have fellowship with student believers 
                    from other campuses, and to dive into the Word of God.</p>

                <button className="button2">Sign me up!</button>
            </section>

            <section className="college-conference-video">
                <iframe title="vimeo-player" className="big-video" src="https://player.vimeo.com/video/203871887" frameBorder="0" allowFullscreen></iframe>
            </section>

            <div className="college-conference-topic">
                <h2 className="head2">topic:</h2>
                <h1 className="head1">God's Love for Man</h1>
            </div>

            <section className="college-conference-details">
                <div className="college-conference-tile college-conference-details-price">
                    <h2 className="head2">details</h2>
                    <p className="paragraph">When: <strong className="strong">Saturday, October 26, 10am - 7:30pm</strong></p>
                    <p className="paragraph">Where: UC Davis</p>
                    <p className="paragraph">Early Bird Cost: $35 if you register and pay by October 13</p>
                    <p className="paragraph">Later Bird Cost: $45 if you register and pay by October 20</p>
                    <p className="detail"><span className="highlight-text">Your registration is not complete until we receive your payment!</span>
                    If you are planning to submit payment by PayPal, please note there is a small convenience fee. </p>
                    <p className="detail">No payments after October 20 will be accepted. Cancellations after October 20 and no-shows are both non-refundable.</p>

                    <button className="button2">I WANT IN!</button>
                    <img className="paypal-button" src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-large.png" alt="Buy now with PayPal" />
                </div>
                <div className="college-conference-tile">
                    <h1 className="head1"> Image </h1>
                </div>

                <div className="college-conference-tile">
                    <h1 className="head1"> Image </h1>
                </div>
                <div className="college-conference-tile college-conference-testimonial">
                    <h2 className="head2">"What I enjoy about the college conference is all the 
                    fellowship with all the brothers and sisters, but most of all definitely just enjoying Christ together."</h2>
                    <button className="button2">SIGN ME UP!</button>
                </div>
                <div className="college-conference-tile college-conference-testimonial">
                    <h2 className="head2">"The college conference is a great time to get into God's word, and really see who God is, and enjoy His presence together!"</h2>
                    <button className="button2">SIGN ME UP!</button>
                </div>
                <div className="college-conference-tile">
                    <h1 className="head1"> Image </h1>
                </div>
            </section>


            <section className="college-conference-highlights">
                <h2 className="head2">Graphics of quotes will go here.</h2>
            </section>

            <section className="college-conference-button-splash">
                <button className="college-conference-button">REGISTER NOW!</button>
            </section>
        </section>
    )
}