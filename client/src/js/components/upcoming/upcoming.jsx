import React from 'react';

export default () => {
    return (
        <section className="main-page">
            <div className="main-splash upcoming-splash">
                <h1 className="head1">what's coming up?</h1>
            </div>

            <section className="main-content upcoming-content">
                <div className="banner">
                    <div className="banner-img">
                        <img src="" alt="fellowship-night-banner"/>
                    </div>
                    <h2 className="head2">Fellowship Night</h2>
                    <p className="paragraph">November 13, 2019, 7-8:30pm, 2430 Dana St.</p>
                    <p className="paragraph">Come enjoy dinner, fellowship with other believers, and a helpful speaking from what we have been studying in the Bible studies! </p>
                </div>
                <div className="banner">
                    <div className="banner-img">
                        <img src="" alt="bible-studies-banner" />
                    </div>
                    <h2 className="head2">Bible Studies</h2>
                    <p className="paragraph">Get plugged into a Bible study group and dive into the word of God. This school year we will be studying Matthew. We start August 28!</p>
                    <p className="paragraph">Campanile Esplanade | Tuesday 2-3p<br />Contact Kevin at (###) ###-#### </p>
                    <p className="paragraph">Eshleman Hall |  Wednesday 1-2pm<br />Contact Grace at (###) ###-####</p>
                    <p className="paragraph">Dana St. & Haste St. | Thursday 8-9pm<br />Contact Alex at (###) ###-####</p>
                </div>
            </section>
        </section>
    )
}