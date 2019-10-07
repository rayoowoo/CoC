import React from 'react';
import Dropdown from './dropdown';

export default (props) => {

    return (
        <>
            <header className="navbar">
                <section className="navbar-content">
                    <div className="navbar-left">
                        <img src="" alt="logo" />
                        <h1>CHRISTIANS ON CAMPUS at BERKELEY</h1>
                    </div>

                    <div className="navbar-right">
                        <Dropdown label="About Us" links={["Our Stories"]}/>
                        <Dropdown label="Activities" links={["Bible Studies", "Fellowship Nights", "Small Groups", "Two's and Three's", "College Conferences", "Spring Break Trips"]}/>
                        <Dropdown label="Upcoming" links={[]}/>
                        <Dropdown label="Media" links={["Pictures", "Videos", "Words of Grace"]}/>
                        <Dropdown label="Blog" links={[]}/>
                        <Dropdown label="Contact Us" links={[]}/>
                        <Dropdown label="MENU"/>
                    </div>
                </section>
            </header>
            <div className="navbar-filler"></div>
        </>
    )
}